import { UsersIcon, HomeIcon, DollarSignIcon, AlertTriangleIcon } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Tenants",
      value: "120",
      status: "+2.1% from last month",
      statusType: "positive",
      icon: <UsersIcon className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Occupied Units",
      value: "94%",
      status: "High occupancy",
      statusType: "positive",
      icon: <HomeIcon className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Monthly Revenue",
      value: "$45,200",
      status: "+5.4% from last month",
      statusType: "positive",
      icon: <DollarSignIcon className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Pending Payments",
      value: "12",
      status: "Requires attention",
      statusType: "negative",
      icon: <AlertTriangleIcon className="w-6 h-6 text-red-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div>{stat.icon}</div>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
          <p
            className={`text-sm mt-1 ${
              stat.statusType === "positive"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {stat.status}
          </p>
        </div>
      ))}
    </div>
  );
}
