import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './pages/Authentication';
import ProfileSetup from './pages/ProfileSetup';
import Dashboard from './pages/Dashboard';
import BrowseListings from './pages/BrowseListings';
import MyApplications from './pages/MyApplications';
import ProfilePage from './pages/ProfilePage';
import InternshipDetails from './pages/InternshipDetails';
import ApplicationForm from './pages/ApplicationForm';
import SupervisorDashboard from './pages/SupervisorDashboard';
import MyPostings from './pages/MyPostings';
import CreateListingForm from './pages/CreateListingForm';
import ApplicantReview from './pages/ApplicantReview';
import CareerRadar from './pages/CareerRadar';
import PeerForum from './pages/PeerForum';
import ForumThread from './pages/ForumThread';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Route helper to protect pages
function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem('role');
  if (!role) {
    return <Navigate to="/auth" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(role)) {
    return role === 'supervisor' 
      ? <Navigate to="/supervisor/dashboard" replace /> 
      : <Navigate to="/dashboard" replace />;
  }
  return children;
}

// Route helper to prevent logged in users from returning to Login page
function AuthRoute({ children }) {
  const role = localStorage.getItem('role');
  if (role) {
    return role === 'supervisor' 
      ? <Navigate to="/supervisor/dashboard" replace /> 
      : <Navigate to="/dashboard" replace />;
  }
  return children;
}

// Wildcard and root redirect helper
function FallbackRedirect() {
  const role = localStorage.getItem('role');
  if (!role) {
    return <Navigate to="/auth" replace />;
  }
  return role === 'supervisor' 
    ? <Navigate to="/supervisor/dashboard" replace /> 
    : <Navigate to="/dashboard" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FallbackRedirect />} />
        <Route path="/auth" element={<AuthRoute><Authentication /></AuthRoute>} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* Student Routes */}
        <Route path="/profile-setup" element={<ProtectedRoute allowedRoles={['student']}><ProfileSetup /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['student']}><Dashboard /></ProtectedRoute>} />
        <Route path="/browse-listings" element={<ProtectedRoute allowedRoles={['student']}><BrowseListings /></ProtectedRoute>} />
        <Route path="/my-applications" element={<ProtectedRoute allowedRoles={['student']}><MyApplications /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute allowedRoles={['student']}><ProfilePage /></ProtectedRoute>} />
        <Route path="/internship-details" element={<ProtectedRoute allowedRoles={['student']}><InternshipDetails /></ProtectedRoute>} />
        <Route path="/apply" element={<ProtectedRoute allowedRoles={['student']}><ApplicationForm /></ProtectedRoute>} />
        <Route path="/career-radar" element={<ProtectedRoute allowedRoles={['student']}><CareerRadar /></ProtectedRoute>} />
        
        {/* Forums / Radar Routes (Accessible by both roles) */}
        <Route path="/forum" element={<ProtectedRoute allowedRoles={['student', 'supervisor']}><PeerForum /></ProtectedRoute>} />
        <Route path="/forum/thread/:threadId" element={<ProtectedRoute allowedRoles={['student', 'supervisor']}><ForumThread /></ProtectedRoute>} />
        
        {/* Supervisor Routes */}
        <Route path="/supervisor/dashboard" element={<ProtectedRoute allowedRoles={['supervisor']}><SupervisorDashboard /></ProtectedRoute>} />
        <Route path="/supervisor/postings" element={<ProtectedRoute allowedRoles={['supervisor']}><MyPostings /></ProtectedRoute>} />
        <Route path="/supervisor/create-listing" element={<ProtectedRoute allowedRoles={['supervisor']}><CreateListingForm /></ProtectedRoute>} />
        <Route path="/supervisor/review" element={<ProtectedRoute allowedRoles={['supervisor']}><ApplicantReview /></ProtectedRoute>} />

        <Route path="*" element={<FallbackRedirect />} />
      </Routes>
    </Router>
  );
}
