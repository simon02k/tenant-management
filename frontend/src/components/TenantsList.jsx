import { useEffect, useState } from "react";
import ViewTenantModal from "./ViewtenantModal";
import DeleteTenantModal from "./DeleteTenantModal";
import EditTenantModal from "./EditTenantModal";
import { showToast} from "../utils/toast";

export default function TenantsList({ limit = null, table = false }) {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [IsViewModalOpen, setViewModalOpen] = useState(false); // 👈 modal state
  const [IsEditModalOpen, setEditModalOpen] = useState(false); // 👈 modal state
  const [IsDeleteModalOpen, setDeleteModalOpen] = useState(false); // 👈 modal state
  const [selectedTenantEdit, setSelectedTenantEdit] = useState(null); // select tenant
  const [selectedTenantView, setSelectedTenantView] = useState(null); // select tenant
  const [selectedTenantDelete, setSelectedTenantDelete] = useState(null); // select tenant


  
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const tenantsPerPage = 5; // show 5 per page

  const closeModals = () => {
    setSelectedTenantEdit(null);
    setSelectedTenantView(null);
    setSelectedTenantDelete(null);
    setDeleteModalOpen(false);
    setViewModalOpen(false);
    setEditModalOpen(false);
  };

    // Open modal
  const confirmDelete = (tenant) => {
    setSelectedTenantDelete(tenant);
    setDeleteModalOpen(true);
  };

  const handleView = (tenant) => {
    setSelectedTenantView(tenant);
    setViewModalOpen(true);
  }

  const handleEdit = (tenant) => {
    setSelectedTenantEdit(tenant);
    setEditModalOpen(true);
  };

  const handleSaveEdit = async (houseno, updatedData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tenants/${houseno}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

     {/*} if (res.ok) {
        const updatedTenant = await res.json();
        setTenants(tenants.map(t => (t.houseno === houseno ? updatedTenant : t)));
        setEditModalOpen(false);
        setSelectedTenantEdit(null);
      }*/}
    } catch (err) {
      console.error("Error updating tenant:", err);
    }
  };
  
  // Delete tenant
  const handleDelete = async (houseno) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tenants/softdelete/${houseno}`, {
        method: "DELETE",
      });
     {/*} if (res.ok) {
        setTenants(tenants.filter((t) => t.houseno !== houseno)); // remove from table
        if (selectedTenantDelete && selectedTenantDelete.houseno === houseno) {
          setSelectedTenantDelete(null); // clear if deleted
        }
      } else {
        console.error("Failed to delete tenant");
      }*/}
    } catch (err) {
      console.error("Error deleting tenant:", err);
    }
  };

  const fetchTenants = async() =>{
      await fetch("http://localhost:5000/api/tenants")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tenants");
        return res.json();
      })
      .then((res) => {
        setTenants(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tenants:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  if (loading) return <p className="text-gray-500">Loading tenants...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (tenants.length === 0) return <p className="text-gray-500">No tenants found.</p>;



    // pagination logic
  const indexOfLastTenant = currentPage * tenantsPerPage;
  const indexOfFirstTenant = indexOfLastTenant - tenantsPerPage;

  const sortedTenants = [...tenants].reverse();

  const currentTenants = sortedTenants.slice(indexOfFirstTenant, indexOfLastTenant);

  const totalPages = Math.ceil(tenants.length / tenantsPerPage);

    // Reverse order to show latest first
  const displayTenants = limit
    ? [...currentTenants].reverse().slice(0, +limit)
    : [...currentTenants].reverse();


  // 📌 Table layout for Tenants Page
  if (table) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-4 py-2 text-left">houseno</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Move-in Date</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {displayTenants.map((tenant) => (
              <tr key={tenant.name} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{tenant.houseno}</td>
                <td className="px-4 py-2">{tenant.name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      tenant.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tenant.status || "Unknown"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {tenant.move_in_date
                    ? new Date(tenant.move_in_date).toLocaleDateString()
                    : "—"}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleView(tenant)}   
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-1 px-2 border border-blue-500 hover:border-transparent rounded mx-2">
                    View  
                  </button>
                  <button
                    onClick={() => handleEdit(tenant)}                  
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-1 px-2 border border-blue-500 hover:border-transparent rounded mx-2 ">
                    edit  
                  </button>

                  <button
                    onClick={() => confirmDelete(tenant)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-1 px-2 border border-blue-500 hover:border-transparent rounded ">
                    delete

                  </button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      <ViewTenantModal
        tenant={selectedTenantView}
        isOpen={IsViewModalOpen}
        onClose={closeModals}
        
      />

      <EditTenantModal
      tenant={selectedTenantEdit}
      isOpen={IsEditModalOpen}  
      onClose={closeModals}
      onSave={handleSaveEdit}

      />

      
      <DeleteTenantModal
      tenant={selectedTenantDelete}
      isOpen={IsDeleteModalOpen}
      onClose={closeModals}
      onConfirm={handleDelete}
      onCancel={closeModals}
      />

            {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      </div>
    );
  }

  // 📌 Card layout for Dashboard
  return (
    <div className="grid gap-4">
      {displayTenants.map((tenant) => (
        <div
          key={tenant.houseno}
          className="p-4 bg-gray-50 rounded-lg border hover:shadow-sm transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">{tenant.name}</p>
              <p className="text-sm text-gray-500">Unit {tenant.unit}</p>
            </div>
            <span className="text-xs text-gray-400">
              {tenant.created_at
                ? new Date(tenant.created_at).toLocaleDateString()
                : "—"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
