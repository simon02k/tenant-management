import {
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export default function AttentionNeededCard() {
  const issues = [
    {
      id: 1,
      icon: <BanknotesIcon className="w-5 h-5 text-red-600" />,
      title: "Overdue Rent",
      description: "5 tenants have not paid rent this month",
    },
    {
      id: 2,
      icon: <WrenchScrewdriverIcon className="w-5 h-5 text-orange-500" />,
      title: "Pending Maintenance",
      description: "3 maintenance requests awaiting response",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Card Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mr-2" />
        Attention Needed
      </h3>

      {/* Issues List */}
      <div className="space-y-3">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md border"
          >
            {/* Icon */}
            <div>{issue.icon}</div>

            {/* Text */}
            <div>
              <p className="font-medium text-gray-800">{issue.title}</p>
              <p className="text-sm text-gray-500">{issue.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
