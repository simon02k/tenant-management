import React from "react";

function ViewTenantModal({tenant, isOpen, onClose, onCreate }) {
  if (!isOpen) return null;


  return (
<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Tenant Details</h2>
         <h2 className="text-lg font-bold mb-2">{tenant.name}</h2>
      <p className="text-gray-600">
        <strong>House No:</strong> {tenant.houseno}
      </p>
      <p className="text-gray-600">
        <strong>Move-in Date:</strong> {tenant.move_in_date}
      </p>
      <p className="text-gray-600">
        <strong>Status</strong> 
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium mx-2 ${
                      tenant.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tenant.status || "Unknown"}
                  </span>
      </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ViewTenantModal;
