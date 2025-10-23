import { HomeIcon } from "@heroicons/react/24/outline";

export default function PropertyOverview() {
  const vacantUnits = 8;
  const occupancyRate = 12; // in percentage

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <HomeIcon className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">Property Overview</h3>
      </div>

      {/* Vacant Units */}
      <div className="mb-3">
        <p className="text-sm text-gray-500">Vacant Units</p>
        <p className="text-2xl font-bold text-gray-800">{vacantUnits}</p>
      </div>

      {/* Occupancy Rate */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Occupancy Rate</p>
        <p className="text-xl font-bold text-gray-800 mb-2">
          {occupancyRate}%
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: `${occupancyRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
