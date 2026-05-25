import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import InternshipCard from '../components/InternshipCard';

export default function BrowseListings() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockListings = [
    { id: 1, title: "Data Science Intern", company: "Nexus Technologies Analytics Group", location: "Kuala Lumpur (Hybrid)" },
    { id: 2, title: "Software Engineering Intern", company: "Petronas", location: "Kuala Lumpur (On-site)" },
    { id: 3, title: "Data Analyst Intern", company: "Microsoft", location: "Singapore (Remote)" },
    { id: 4, title: "Frontend Developer Intern", company: "Google", location: "Kuala Lumpur (Hybrid)" },
    { id: 5, title: "IT Support Intern", company: "DHL", location: "Johor Bahru (On-site)" }
  ];

  const filteredListings = mockListings.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      <SideNavBar />
      
      <main className="flex-1 ml-0 md:ml-64 flex flex-col w-full overflow-y-auto bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home', link: '/dashboard' }, { label: 'Browse Listings' }]} />
        
        <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-base mt-4 mb-8">
          <header className="mb-6">
            <h2 className="font-h1 text-h1 text-primary mb-2">Browse Listings</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Find and apply for premium academic internship opportunities.</p>
          </header>

          {/* Search bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 border border-outline bg-surface-container-lowest text-on-surface rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md placeholder:text-on-surface-variant transition-colors" 
                placeholder="Search by company or role..." 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {filteredListings.map(listing => (
              <InternshipCard 
                key={listing.id}
                title={listing.title}
                company={`${listing.company} • ${listing.location}`}
                status="Active"
                onViewDetails={() => navigate('/internship-details')}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
