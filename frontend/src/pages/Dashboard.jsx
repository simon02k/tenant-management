import DashboardStats from "../components/DashboardStats";
import PropertyOverview from "../components/PropertyOverview";
import PerformanceCard from "../components/PerformanceCard";
import AttentionNeededCard from "../components/AttentionNeededCard";
import TenantsList from "../components/TenantsList";

export default function Dashboard() {
  const recentTenants = [
    { name: "John Doe", unit: "12A", joined: "Sept 8, 2025" },
    { name: "Jane Smith", unit: "8B", joined: "Sept 6, 2025" },
    { name: "Ali Hassan", unit: "3C", joined: "Sept 5, 2025" },
    { name: "Maria Lopez", unit: "14D", joined: "Sept 3, 2025" },
    { name: "David Kim", unit: "2F", joined: "Sept 2, 2025" },
  ];

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6">
      {/* Page title */}
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

      {/* Stats Section */}
      <DashboardStats />

      {/* Extra Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tenants */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Tenants
          </h3>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Tenants</h3>
            <TenantsList limit={5} /> {/* cards */}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow p-4">
          <PerformanceCard/>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <PropertyOverview />
          {/* More cards */}
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <AttentionNeededCard />
          {/* More cards */}
        </div>


      </div>
    </div>
  );
}
