import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { getDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

// Create the Admin Context
const AdminContext = createContext();

// Custom hook to use the Admin Context
export const useAdmin = () => useContext(AdminContext);

// AdminProvider component to wrap around your app or specific parts
export const AdminProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get admin credentials from environment variables
          const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

          // Check if logged-in user matches the admin credentials
          if (user.email === adminEmail) {
            setUserData({ email: adminEmail, role: 'admin' });
            console.log('Logged in as admin');
          } else {
            // Fetch user data from Firestore
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
              const data = userDoc.data();
              setUserData(data);

              if (data.role === 'admin') {
                console.log('User is an admin from Firestore');
              } else {
                console.log('User is not an admin');
              }
            } else {
              console.log('No user document found');
              setUserData(null);
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError('Error fetching user data. Please try again later.');
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Check if the user is an admin
  const isAdmin = userData && userData.role === 'admin';

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AdminContext.Provider value={{ userData, isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
