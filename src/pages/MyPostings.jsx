import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function MyPostings() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const mockPostings = [
    { id: 1, title: "Data Analyst Intern", department: "Department of Information Systems", date: "Oct 12, 2023", applicants: 14, status: "Active" },
    { id: 2, title: "Software Engineering Intern", department: "Innovation Lab", date: "-", applicants: 0, status: "Draft" },
    { id: 3, title: "UX Research Assistant", department: "Human-Computer Interaction Dept", date: "Sep 28, 2023", applicants: 8, status: "Active" },
    { id: 4, title: "Network Administration Intern", department: "Campus IT Services", date: "Aug 15, 2023", applicants: 32, status: "Closed" }
  ];

  const filtered = mockPostings.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-[#C4860A]/10 text-[#C4860A]';
      case 'closed':
        return 'bg-[#6B1B1B]/10 text-[#6B1B1B]';
      case 'draft':
      default:
        return 'bg-gray-500/10 text-gray-700';
    }
  };

  const getLeftBorderColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-secondary-container';
      case 'closed':
        return 'bg-primary-container';
      case 'draft':
      default:
        return 'bg-outline-variant';
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      <SideNavBar />

      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home', link: '/supervisor/dashboard' }, { label: 'My Postings' }]} />

        <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-gutter mt-4 mb-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-h1 text-h1 text-on-surface font-bold font-h1 serif">My Internship Postings</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your current and past internship listings.</p>
            </div>
            <button 
              onClick={() => navigate('/supervisor/create-listing')}
              className="bg-primary-container text-on-primary py-3 px-6 rounded-DEFAULT font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-2 shadow-sm border border-transparent cursor-pointer"
            >
              <span className="material-symbols-outlined">add</span>
              Post New Internship
            </button>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col md:flex-row gap-4 justify-between items-center shadow-sm">
            <div className="relative w-full md:w-1/3">
              <label className="sr-only" htmlFor="search-postings">Search by title</label>
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-DEFAULT bg-surface text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface" 
                id="search-postings" 
                placeholder="Search by title..." 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Filter by Status:</span>
              <select 
                className="w-full md:w-48 py-2 px-3 border border-outline-variant rounded-DEFAULT bg-surface text-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none cursor-pointer text-on-surface"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Listings Table / Cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* Header Row (Hidden on mobile) */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline-variant text-on-surface-variant font-label-md text-label-md uppercase tracking-wider font-semibold">
              <div className="col-span-5">Job Title</div>
              <div className="col-span-2">Date Posted</div>
              <div className="col-span-2 text-center">Applicants</div>
              <div className="col-span-1 text-center">Status</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {filtered.map(listing => (
              <div key={listing.id} className={`bg-surface-container-lowest border border-outline-variant rounded-lg p-0 flex flex-col md:flex-row relative overflow-hidden group hover:border-outline transition-colors ${listing.status === 'Closed' ? 'opacity-75' : ''}`}>
                {/* Status-specific Left Border */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${getLeftBorderColor(listing.status)}`}></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-center p-6 pl-8">
                  <div className="col-span-1 md:col-span-5 flex flex-col">
                    <span className="font-h3 text-h3 text-on-surface font-bold font-h2 serif">{listing.title}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">{listing.department}</span>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex flex-col md:block">
                    <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Date Posted</span>
                    <span className="font-body-md text-body-md text-on-surface">{listing.date}</span>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant uppercase">Applicants</span>
                    {listing.applicants > 0 ? (
                      <button 
                        onClick={() => navigate('/supervisor/review')}
                        className="font-label-md text-label-md text-primary hover:underline bg-surface-container px-3 py-1 rounded-full border-none cursor-pointer"
                      >
                        {listing.applicants} Applicants
                      </button>
                    ) : (
                      <span className="font-body-md text-body-md text-on-surface-variant">0</span>
                    )}
                  </div>
                  <div className="col-span-1 md:col-span-1 flex justify-between md:justify-center items-center">
                    <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant uppercase">Status</span>
                    <span className={`font-label-sm text-label-sm px-2 py-1 rounded uppercase ${getStatusColor(listing.status)}`}>
                      {listing.status}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-end gap-2 mt-4 md:mt-0">
                    <button 
                      onClick={() => listing.status !== 'Closed' && navigate('/supervisor/create-listing')}
                      className="p-2 text-on-surface-variant hover:text-primary transition-colors border border-transparent hover:border-outline-variant rounded-DEFAULT cursor-pointer bg-transparent"
                    >
                      <span className="material-symbols-outlined">{listing.status === 'Closed' ? 'visibility' : 'edit'}</span>
                    </button>
                    {listing.status !== 'Closed' && (
                      <button 
                        onClick={() => alert('Closed Listing placeholder')}
                        className="p-2 text-on-surface-variant hover:text-primary transition-colors border border-transparent hover:border-outline-variant rounded-DEFAULT cursor-pointer bg-transparent"
                      >
                        <span className="material-symbols-outlined">block</span>
                      </button>
                    )}
                    <button 
                      onClick={() => alert('Delete Listing placeholder')}
                      className="p-2 text-error hover:bg-error-container/20 transition-colors border border-transparent rounded-DEFAULT cursor-pointer bg-transparent"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8 border-t border-outline-variant pt-4 mb-4">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Showing {filtered.length} of {mockPostings.length} postings</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-outline-variant rounded-DEFAULT text-on-surface-variant disabled:opacity-50 font-label-md text-label-md cursor-pointer bg-transparent" disabled>Prev</button>
              <button className="px-3 py-1 border border-outline-variant rounded-DEFAULT text-on-surface-variant disabled:opacity-50 font-label-md text-label-md cursor-pointer bg-transparent" disabled>Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
