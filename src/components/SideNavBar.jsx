import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SideNavBar() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role') || 'student';
  const isSupervisor = role === 'supervisor';

  const activeClass = "flex items-center gap-3 px-4 py-3 bg-surface-container-high border-l-4 border-secondary-container text-primary font-bold rounded-lg transition-all scale-98";
  const inactiveClass = "flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-all duration-200 scale-95 active:scale-100";

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/auth');
  };

  return (
    <nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 z-40 w-64 overflow-y-auto border-r border-outline-variant bg-surface transition-all duration-150 ease-in-out p-4 gap-2">
      {/* Header */}
      <div className="p-4 border-b border-outline-variant flex flex-col items-center text-center">
        <img 
          alt="UTM Logo" 
          className="h-16 w-auto object-contain mb-4" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJ0IC37RsH7JLKd8P899TSVUiIgwwZC4a-pLfFURvinhF7kAG8ZaJRUFn-Lx9Q17AoYEojN3xJAxEUQhFSc22dRmF3lwjWYhRrpgLMNymQir2fQaUKZTGv0WfX2-5EuUpQT1xXf7cZeMfwQyLCwyaW2y9r718Cd5OomWK8OcXChiWF4uo9T-PFt_RZ-oV7S5_8tWOVC3xy2vBi29FGRbuQA6CJiGtrwVDrqcEByhOPIzMr6I1iSv0MTgii6g9CMJ22XZuYuxK6A"
        />
        <h1 className="text-xl font-black text-[#6B1B1B] uppercase font-h1 serif antialiased">VIP Portal</h1>
        <p className="font-body-sm text-on-surface-variant text-sm mt-1">
          {isSupervisor ? 'Supervisor Panel' : 'Student Panel'}
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 flex flex-col gap-2">
        {isSupervisor ? (
          <>
            <NavLink to="/supervisor/dashboard" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </NavLink>
            <NavLink to="/supervisor/postings" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <span className="material-symbols-outlined">work</span>
              <span className="font-label-md text-label-md">My Postings</span>
            </NavLink>
            <NavLink to="/supervisor/review" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              <span className="material-symbols-outlined">group</span>
              <span className="font-label-md text-label-md">Applicants</span>
            </NavLink>
            <div className="mt-4 px-2">
              <button 
                onClick={() => navigate('/supervisor/create-listing')}
                className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer border border-transparent shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Post New Internship
              </button>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Footer Info & Logout */}
      <div className="mt-auto border-t border-outline-variant pt-4 flex items-center gap-3 px-3 py-2">
        <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-label-md overflow-hidden">
          {isSupervisor ? (
            <img 
              alt="Dr. Sarah Chen" 
              className="h-full w-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBdfysowd5Pm1a6FLlqsvtjIHq8VOr2W4XMy2ezgO60lYp60Nnma8xydX30Q98h7EjogREpvMz0cVIK2rMpeTR9kPeKbPqHv0qzb7Hd-9d0vMqsJqRClucAWYijkZe9x1r03A33v6YZu4mnMIKhVOiypICI5_i3Pe3nBwARLSiBxuffumEns3AxOeZeCB-3Ctnd8rTYObpy20YGa-Mn3avrU9Sri1HrBFcVDpqL3_eEiG7v4qPm8N-DLY22mAEshzi525MCPk_-Q" 
            />
          ) : 'JA'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-label-sm text-label-sm text-on-surface truncate">
            {isSupervisor ? 'Dr. Sarah Chen' : 'Jobayer Alam'}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs truncate">
            {isSupervisor ? 'Supervisor ID: 9921' : 'Student ID: 202610'}
          </p>
        </div>
      </div>
      <div className="border-t border-outline-variant p-2">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all duration-200 scale-95 active:scale-100 font-label-md text-label-md bg-transparent border-none cursor-pointer text-left"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </nav>
  );
}
