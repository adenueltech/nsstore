import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Header';
import Footer from '../components/Footer';
import { doc, setDoc } from 'firebase/firestore';
import Services from '../components/Services'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: 'user',
      });

      setSuccess('Account created successfully!');
      setLoading(false);
      navigate('/login');
    } catch (err) {
      setLoading(false);
      setError('Failed to register. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow flex mt-[30px] items-center justify-center">
        <div className="flex flex-wrap bg-white rounded-lg max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center bg-gray-50">
            <img src="/images/signup.png" alt="Sign Up" className="w-full object-cover rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4">Create an account</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Register;
