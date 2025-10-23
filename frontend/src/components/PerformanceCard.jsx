import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function PerformanceCard() {
  const metrics = [
    { label: "Rent Collected", value: "$75,000", color: "text-green-600" },
    { label: "Expenses", value: "$12,500", color: "text-red-600" },
    { label: "Net Income", value: "$62,500", color: "text-blue-600" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <ChartBarIcon className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">Performance</h3>
      </div>

      {/* KPI Rows */}
      <div className="space-y-3">
        {metrics.map((metric, idx) => (
          <div key={idx}>
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className={`text-xl font-bold ${metric.color}`}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
