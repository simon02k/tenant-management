import { useState } from "react";
import AddTenantModal from "./AddTenantModal";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/tenants" className="hover:text-gray-200">Tenants</Link>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          + Add Tenant
        </button>
      </nav>
      <AddTenantModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
