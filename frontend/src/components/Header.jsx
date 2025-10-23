import { useState } from "react";
import { PlusIcon, MenuIcon, XIcon } from "lucide-react";

export default function Header({ onMenuToggle}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = {
    name: "Admin User",
    role: "Property Manager",
  };


  return (
    <header className="bg-white shadow-sm border-b px-4 py-2 flex items-center justify-between">
      {/* Left: Logo + Name */}
      <div className="flex items-center space-x-2">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={onMenuToggle}
          >
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>
        {/* Logo placeholder */}
        <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
          TH
        </div>
        <div className="leading-tight">
          <h1 className="text-base font-semibold text-gray-800">TenantHub</h1>
          <p className="text-xs text-gray-500">Property Management</p>
        </div>
      </div>

      {/* Center: Section Title / Nav (optional) */}
      <div className="hidden md:flex items-center space-x-4 text-gray-600">
        
      </div>

      {/* Right: User Info */}
      <div className="flex items-center space-x-2">
        <div className="hidden sm:block text-right leading-tight">
          <p className="text-sm font-medium text-gray-800">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">
          {user.name.charAt(0)}
        </div>
      </div>
    </header>
  );
}
