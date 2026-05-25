import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideNavBar() {
  const activeClass = "flex items-center gap-3 px-3 py-2 bg-primary text-on-primary rounded-lg font-bold transition-all duration-200 scale-95 active:scale-100";
  const inactiveClass = "flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all duration-200 scale-95 active:scale-100";

  return (
    <nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 z-40 w-64 overflow-y-auto border-r border-outline-variant bg-surface transition-all duration-150 ease-in-out p-4 gap-2">
      <div className="p-4 border-b border-outline-variant flex items-center gap-4">
        <div className="w-12 h-12 bg-surface-variant rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img 
            alt="University Crest" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQj53n5epibEuS3oAB1RhGwnY6X5mdBY4lGKfn8xlGPa_1RHmWv9rXqOaZ8_Ek3cgz5ARSA0IvA8CPdAtSDsRO0dOqmb1j8NuHM8oREKqOui0w1DYGOYR9u7G85OovPGbRu2rJbtyTobDSvk94M2-EwX_YOuapUlUSr-EZUBJB5JUMUazB8hYtFhT2YH0GbmCQ988FZFaBS0fLeQyz5zZUI-Olgg9cnMIsClNK9t_1w9abtEcbDwsBV-fgpQr7Ubdctrc7mM_GIfCD" 
          />
        </div>
        <div>
          <h1 className="text-xl font-black text-[#6B1B1B] uppercase font-h1 serif antialiased">VIP Portal</h1>
          <p className="font-body-sm text-on-surface-variant text-sm">University Internships</p>
        </div>
      </div>
      <div className="flex-1 py-6 flex flex-col gap-2">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </NavLink>
        <NavLink to="/browse-listings" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-md text-label-md">Browse Listings</span>
        </NavLink>
        <NavLink to="/my-applications" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          <span className="material-symbols-outlined">assignment</span>
          <span className="font-label-md text-label-md">My Applications</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-md text-label-md">Profile</span>
        </NavLink>
      </div>
      <div className="mt-auto border-t border-outline-variant pt-4 flex items-center gap-3 px-3 py-2">
        <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-label-md">
          JA
        </div>
        <div>
          <p className="font-label-sm text-label-sm text-on-surface">Jobayer Alam</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Student ID: 202610</p>
        </div>
      </div>
      <div className="border-t border-outline-variant p-2">
        <NavLink to="/auth" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all duration-200 scale-95 active:scale-100 font-label-md text-label-md">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </NavLink>
      </div>
    </nav>
  );
}
