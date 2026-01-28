import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2, ShieldCheck, Lock } from 'lucide-react';

export default function AdminRoute({ children }) {
  const [status, setStatus] = useState('checking'); 
  const location = useLocation();

  useEffect(() => {
    const verifyAdmin = () => {
      // Accessing keys directly from your local storage schema
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');

      // 1. Basic Existence Check
      if (!token || !role) {
        setStatus('unauthorized');
        return;
      }

      // 2. Role Validation
      // Based on your image, the value is stored as a simple string (e.g., "user" or "admin")
      if (role.toLowerCase() === 'admin') {
        setStatus('authorized');
      } else {
        setStatus('unauthorized');
      }
    };

    // Small delay to ensure smooth UI transition
    const timer = setTimeout(verifyAdmin, 600);
    return () => clearTimeout(timer);
  }, []);

  if (status === 'checking') {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
          <Lock className="absolute inset-0 m-auto text-emerald-500 h-8 w-8" />
        </div>
        <p className="mt-4 font-bold text-gray-900 dark:text-white tracking-tight">
          Verifying Admin Access...
        </p>
      </div>
    );
  }

  if (status === 'unauthorized') {
    // If they aren't admin, redirect to home or login
    // We replace the history entry so they can't "Go Back" into a protected route
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}