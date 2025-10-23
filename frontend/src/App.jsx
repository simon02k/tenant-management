import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import ToastContainer from "./components/ToastContainer";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
            {/* toaster*/}
      <ToastContainer/>
      <div className="flex flex-col h-screen">
        {/* Fixed Header */}
        <Header onMenuToggle={() => setIsSidebarOpen(true)} />

        <div className="flex flex-1 pt-16"> 
          {/* pt-16 = header height spacing */}

          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

          {/* Main Content */}
          <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tenants" element={<Tenants />} />
            </Routes>
          </div>
        </div>


      </div>
    </Router>
  );
}
