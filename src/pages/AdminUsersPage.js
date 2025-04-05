import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'; // Ensure config is correct
import AdminNav from '../components/AdminNav';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        console.log(usersSnapshot.docs);  // Log the raw docs for inspection
        const usersList = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Users List:', usersList);  // Log the mapped data to verify
        setUsers(usersList);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Error fetching users. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">All Registered Users</h1>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white rounded shadow">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">UID</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name || 'N/A'}</td>
                    <td className="px-4 py-2">{user.email || 'N/A'}</td>
                    <td className="px-4 py-2">{user.role || 'N/A'}</td>
                    <td className="px-4 py-2 text-xs text-gray-600">{user.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsersPage;
