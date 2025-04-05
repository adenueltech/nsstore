import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Import the Auth context
import { useAdmin } from './context/AdminContext'; // Import the Admin context
import { CartProvider } from './context/CartContext'; // Import the Cart context
import { AdminProvider } from './context/AdminContext'; // Import AdminProvider
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // Make sure the path is correct
import AdminPage from './pages/AdminPage'; // Import Admin Page component
import ProductPage from './pages/ProductPage'; // Import ProductPage component
import Profile from './pages/profile'; // Import Profile Page component
import Contact from './pages/Contact';
import About from './pages/About';
import AdminUsersPage from './pages/AdminUsersPage';

const App = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const { userData } = useAdmin(); // Get user data from AdminContext

  // Check if user is admin
  const isAdmin = userData && userData.role === 'admin';

  return (
    <AdminProvider> {/* Wrap with AdminProvider */}
      <CartProvider> {/* Wrap the entire application with the CartProvider */}
        <Router>
          <Routes>
            {/* Home page should be shown to both logged-in and non-logged-in users */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* Login page - Only accessible if the user is not logged in */}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />

            {/* Register page - Only accessible if the user is not logged in */}
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />

            {/* Cart page - Accessible to both logged-in and non-logged-in users */}
            <Route path="/cart" element={<Cart />} />

            {/* Product page - Accessible to everyone */}
            <Route path="/products" element={<ProductPage />} />

            <Route path="/checkout" element={<Checkout />} /> {/* Ensure this exists */}

            {/* Admin page - Only accessible to logged-in admins */}
            <Route
              path="/admin"
              element={user && isAdmin ? <AdminPage /> : <Navigate to="/" />}
            />

               <Route path="/admin/users" element={<AdminUsersPage />} />

            {/* Profile page - Only accessible if the user is logged in */}
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />

            
          </Routes>
        </Router>
      </CartProvider>
    </AdminProvider>
  );
};

export default App;
