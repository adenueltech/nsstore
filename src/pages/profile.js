import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services'

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setUserInfo({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        address: user.address || '',
      });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof updateUser === 'function') {
      updateUser(userInfo);
      setEditMode(false); // Ensure edit mode exits after saving
    } else {
      console.error("updateUser is not a function. Check AuthContext.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-10">
        <aside className="w-full md:w-1/4 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-red-500">Manage My Account</h2>
          <ul className="space-y-2">
            <li className="text-red-500 font-medium">My Profile</li>
            <li className="text-gray-600 hover:text-red-500 cursor-pointer">Address Book</li>
            <li className="text-gray-600 hover:text-red-500 cursor-pointer">My Payment Options</li>
          </ul>
        </aside>

        <main className="w-full md:w-3/4 p-6 bg-white shadow-md rounded-lg md:ml-6">
          <h1 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h1>
          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input type="text" name="firstName" value={userInfo.firstName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input type="text" name="lastName" value={userInfo.lastName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" value={userInfo.email} disabled className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100" />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input type="text" name="address" value={userInfo.address} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setEditMode(false)} className="px-6 py-3 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
                <button type="submit" className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600">Save Changes</button>
              </div>
            </form>
          ) : (
            <div>
              <p><strong>First Name:</strong> {userInfo.firstName}</p>
              <p><strong>Last Name:</strong> {userInfo.lastName}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Address:</strong> {userInfo.address}</p>
              <button onClick={() => setEditMode(true)} className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4">
                Edit Profile
              </button>
            </div>
          )}
        </main>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Profile;
