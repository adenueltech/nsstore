import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome,  FaSignOutAlt, FaUsers } from 'react-icons/fa';

import { useAuth } from '../context/AuthContext';  // Assuming you have this context for logout

const AdminNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Access logout function from AuthContext

  const handleLogout = () => {
    logout();  // Call logout function to clear the session
    navigate('/login');  // Redirect to login page immediately
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Admin Panel</div>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => navigate('/admin')} className="flex items-center space-x-2 hover:text-blue-400">
              <FaHome className="text-xl" />
              <span>Dashboard</span>
            </button>
          </li>
         
          <li>
  <button onClick={() => navigate('/admin/users')} className="flex items-center space-x-2 hover:text-blue-400">
    <FaUsers className="text-xl" />
    <span>View Users</span>
  </button>
</li>
          <li>
            {/* Use button for logout to handle logic */}
            <button 
              onClick={handleLogout} 
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNav;
