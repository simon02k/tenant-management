import React from "react";

const DeleteTenantModal = ({ tenant, onCancel, onConfirm }) => {
  if (!tenant) return null; // don't render if no tenant is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
        <p>
          Are you sure you want to delete tenant{" "}
          <strong>{tenant.name}</strong> (House {tenant.houseno})?
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(tenant.houseno)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTenantModal;
