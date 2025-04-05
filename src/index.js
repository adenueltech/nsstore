import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';  // Import AuthContext
import { AdminProvider } from './context/AdminContext';  // Import AdminContext

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
