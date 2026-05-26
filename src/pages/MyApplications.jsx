import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import InternshipCard from '../components/InternshipCard';

export default function MyApplications() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState('');
  const [search, setSearch] = useState('');

  const mockApplications = [
    { id: 1, title: "Software Engineering Intern", company: "Petronas", status: "Pending", appliedDate: "March 15, 2026" },
    { id: 2, title: "Data Analyst Intern", company: "Microsoft", status: "Reviewed", appliedDate: "March 22, 2026" },
    { id: 3, title: "Frontend Developer Intern", company: "Google", status: "Accepted", appliedDate: "April 2, 2026" },
    { id: 4, title: "IT Support Intern", company: "DHL", status: "Pending", appliedDate: "April 10, 2026" }
  ];

  const filtered = mockApplications.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(search.toLowerCase()) || app.company.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === '' || app.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      <SideNavBar />
      
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home', link: '/dashboard' }, { label: 'My Applications' }]} />
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-gutter">
          <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-6">
            <div>
              <h2 className="font-h1 text-h1 text-primary mb-2">My Applications</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Track and manage your academic internship progress.</p>
            </div>
          </header>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 border border-outline bg-surface-container-lowest text-on-surface rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md placeholder:text-on-surface-variant transition-colors" 
                placeholder="Search by company or role..." 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="relative w-full md:w-48">
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-outline bg-surface-container-lowest text-on-surface rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md appearance-none cursor-pointer transition-colors"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="accepted">Accepted</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-outline pointer-events-none">arrow_drop_down</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filtered.map(app => (
              <InternshipCard 
                key={app.id}
                title={app.title}
                company={app.company}
                status={app.status}
                appliedDate={app.appliedDate}
                onViewDetails={() => navigate('/internship-details')}
              />
            ))}
          </div>

          {/* Pagination (Mock) */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary font-label-sm text-label-sm rounded transition-colors">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-outline-variant text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-container transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
