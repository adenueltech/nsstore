import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Nav from '../components/Header';  
import Footer from '../components/Footer';  
import { db } from '../firebase/config'; // Import Firestore
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import Services from '../components/Services'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // After login, get the user info
      const loggedInUser = userCredential.user;
      
      // Fetch user role from Firestore
      const userDocRef = doc(db, 'users', loggedInUser.uid); // Use uid to get the user document
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        if (userData.role === 'admin') {
          // Redirect to admin panel if the role is admin
          navigate('/admin');
        } else {
          // Redirect to home page if not admin
          navigate('/');
        }
      } else {
        console.error('No such user document!');
      }
      
      setError(''); // Clear any previous error
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Render Navbar */}
      <Nav />
      <div className="flex-grow flex mt-[30px] items-center justify-center">
        <div className="flex flex-wrap rounded-lg max-w-6xl mx-auto">
          
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center ">
            <img
              src="/images/login.png"  // Update with your actual image path
              alt="Login Illustration"
              className="w-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
            <p className="text-gray-600 mb-6">Login to your account</p>
            {user ? (
              <p className="text-green-500">Welcome, {user.email}!</p>
            ) : (
              <>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="w-full border py-3 rounded text-gray-700 hover:bg-gray-100 transition"
                  >
                    Sign in with Google
                  </button>
                </form>
                <p className="text-gray-600 mt-4">
                  Don't have an account?{' '}
                  <a href="/register" className="text-red-500 hover:underline">
                    Register
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Services />

      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default Login;
