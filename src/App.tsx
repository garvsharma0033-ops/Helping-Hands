/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RoleSelection from './pages/RoleSelection';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import JobPortal from './pages/JobPortal';
import RealEstate from './pages/RealEstate';
import AIAssistant from './pages/AIAssistant';
import Chat from './pages/Chat';
import Navbar from './components/Navbar';
import { motion, AnimatePresence } from 'motion/react';

import AppLayout from './layouts/AppLayout';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, profile } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user && !profile && window.location.pathname !== '/role-selection') {
    return <Navigate to="/role-selection" />;
  }
  return <AppLayout>{children}</AppLayout>;
};

function AppRoutes() {
  const { user } = useAuth();
  const location = window.location.pathname;
  const isLandingOrLogin = location === '/' || location === '/login';

  return (
    <Router>
      <div className="min-h-screen bg-[#F5F7FA] font-sans">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
            <Route path="/role-selection" element={<PrivateRoute><RoleSelection /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/marketplace" element={<PrivateRoute><Marketplace /></PrivateRoute>} />
            <Route path="/jobs" element={<PrivateRoute><JobPortal /></PrivateRoute>} />
            <Route path="/real-estate" element={<PrivateRoute><RealEstate /></PrivateRoute>} />
            <Route path="/assistant" element={<PrivateRoute><AIAssistant /></PrivateRoute>} />
            <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

