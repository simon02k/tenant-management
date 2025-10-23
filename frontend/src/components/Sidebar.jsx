import { Link, useLocation } from "react-router-dom";
import { HomeIcon, UsersIcon, XIcon } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
      location.pathname === path
        ? "bg-blue-200 text-blue-700 font-semibold"
        : "text-gray-700"
    }`;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 lg:static top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Close button (mobile only) */}
        <button
          className="lg:hidden mb-4 p-2 rounded-md hover:bg-gray-100"
          onClick={onClose}
        >
          <XIcon className="w-6 h-6 text-gray-700" />
        </button>

        <nav className="space-y-2">
          <Link to="/" className={linkClasses("/")} onClick={onClose}>
            <HomeIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link to="/tenants" className={linkClasses("/tenants")} onClick={onClose}>
            <UsersIcon className="w-5 h-5 mr-2" />
            Tenants
          </Link>
        </nav>
      </div>
    </>
  );
}
