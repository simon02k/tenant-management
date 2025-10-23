import React, { useState, useEffect } from "react";

const EditTenantModal = ({ tenant, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    houseno: "",
    //phone: "",
    status: "",
    move_in_date: ""
  });

  // Pre-fill form when modal opens
  useEffect(() => {
    if (tenant) {
      setFormData({
        name: tenant.name || "",
        houseno: tenant.houseno || "",
        //phone: tenant.phone || "",
        status: tenant.status || "",
        move_in_date: tenant.move_in_date || ""
      });
    }
  }, [tenant]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(tenant.houseno, formData);
  };

  if (!tenant) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">Edit Tenant</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">House No</label>
            <input
              type="text"
              name="houseno"
              value={formData.houseno}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Move In Date</label>
            <input
              type="date"
              name="move_in_date"
              value={formData.move_in_date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTenantModal;
