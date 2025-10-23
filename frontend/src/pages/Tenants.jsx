import TenantsList from "../components/TenantsList";
import ToastContainer from "../components/ToastContainer";

export default function TenantsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Tenants</h2>
      <TenantsList table /> {/* full table with actions */}
    </div>
  );
}
