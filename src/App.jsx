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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse-listings" element={<BrowseListings />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/internship-details" element={<InternshipDetails />} />
        <Route path="/apply" element={<ApplicationForm />} />
        
        {/* New Forums / Radar Routes */}
        <Route path="/career-radar" element={<CareerRadar />} />
        <Route path="/forum" element={<PeerForum />} />
        <Route path="/forum/thread/:threadId" element={<ForumThread />} />
        
        {/* Supervisor Routes */}
        <Route path="/supervisor/dashboard" element={<SupervisorDashboard />} />
        <Route path="/supervisor/postings" element={<MyPostings />} />
        <Route path="/supervisor/create-listing" element={<CreateListingForm />} />
        <Route path="/supervisor/review" element={<ApplicantReview />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}
