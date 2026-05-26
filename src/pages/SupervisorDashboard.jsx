import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function SupervisorDashboard() {
  const navigate = useNavigate();

  const handleViewProfile = (e) => {
    e.preventDefault();
    navigate('/supervisor/review');
  };

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      <SideNavBar />

      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home' }, { label: 'Supervisor Dashboard' }]} />

        <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-gutter mt-4 mb-8">
          {/* Welcome Header */}
          <div className="mb-2">
            <h1 className="font-h1 text-h1 text-on-surface mb-2 font-bold font-h1 serif">Welcome back, Supervisor</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Here is an overview of your internship portal activity today.</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Total Applications Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter border-l-4 border-l-secondary-container flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Applications</p>
                  <h2 className="font-h2 text-h2 text-on-surface font-bold">148</h2>
                </div>
                <div className="p-2 bg-surface-container rounded-lg text-primary">
                  <span className="material-symbols-outlined">folder_open</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>trending_up</span>
                +12% from last week
              </p>
            </div>

            {/* Shortlisted Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter border-l-4 border-l-secondary-container flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Shortlisted</p>
                  <h2 className="font-h2 text-h2 text-on-surface font-bold">24</h2>
                </div>
                <div className="p-2 bg-secondary-container/20 rounded-lg text-secondary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>info</span>
                Ready for interviews
              </p>
            </div>

            {/* Pending Review Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter border-l-4 border-l-secondary-container flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Pending Review</p>
                  <h2 className="font-h2 text-h2 text-on-surface font-bold">82</h2>
                </div>
                <div className="p-2 bg-error-container/50 rounded-lg text-error">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>pending_actions</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-error" style={{ fontVariationSettings: '"FILL" 1' }}>warning</span>
                Requires attention
              </p>
            </div>
          </div>

          {/* Applicant Roster Table Area */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="p-gutter border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <h3 className="font-h3 text-h3 text-on-surface font-['Newsreader'] serif font-bold">Recent Applicants</h3>
              <button 
                onClick={() => navigate('/supervisor/review')}
                className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer"
              >
                View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-lowest border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">University</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Program</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date Applied</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          alt="Jobayer Alam" 
                          className="w-10 h-10 rounded-full border border-outline-variant" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCozQr0rTNOTJa0Sml1wDgeuBMFgnrIKqgBUiQ-XmiOQvl9UK4F18pV49qF3hRVFIykHq5mU379-56Hw6sAYWeRAtQyLqEUbDcEgonYBCRPWCyZnJVd6Gk9GHGSOnYk-U09yShOMugr06_Mcsd6SKI3IbHLthlWxzSB0fLW3cN7SsjlP5MZoU12ZLfHwusxJfkq0FwdS3SCMl-jLw__8AFIMKKG8R5nA2cgGQ69TYqs0RYjonyMjU45mjnXdkaw3-MZ7pxKs9qQn3qR" 
                        />
                        <div>
                          <p className="font-label-md text-label-md text-on-surface">Jobayer Alam</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Software Engineering Intern</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">Universiti Teknologi Malaysia</td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">BEng. Computer Engineering</td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">Oct 24, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={handleViewProfile}
                          className="px-3 py-1.5 border border-primary text-primary font-label-sm text-label-sm rounded-md hover:bg-primary/5 transition-colors cursor-pointer"
                        >
                          View Profile
                        </button>
                        <button 
                          onClick={() => alert('Interview Scheduler Modal placeholder')}
                          className="px-3 py-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm rounded-md hover:bg-primary transition-colors flex items-center gap-1 cursor-pointer border border-transparent"
                        >
                          <span className="material-symbols-outlined text-[16px]">calendar_month</span> Schedule
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-high flex items-center justify-center text-on-surface-variant font-label-md">SC</div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface">Sarah Chen</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Data Analyst Intern</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">Universiti Teknologi Malaysia</td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">BSc. Statistics</td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">Oct 23, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={handleViewProfile}
                          className="px-3 py-1.5 border border-primary text-primary font-label-sm text-label-sm rounded-md hover:bg-primary/5 transition-colors cursor-pointer"
                        >
                          View Profile
                        </button>
                        <button 
                          onClick={() => alert('Interview Scheduler Modal placeholder')}
                          className="px-3 py-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm rounded-md hover:bg-primary transition-colors flex items-center gap-1 cursor-pointer border border-transparent"
                        >
                          <span className="material-symbols-outlined text-[16px]">calendar_month</span> Schedule
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-high flex items-center justify-center text-on-surface-variant font-label-md">KW</div>
                        <div>
                          <p className="font-label-md text-label-md text-on-surface">Khalid Waleed</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Network Admin Intern</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">Universiti Teknologi Malaysia</td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">BEng. Electronics</td>
                    <td className="px-6 py-4 whitespace-nowrap font-body-sm text-body-sm text-on-surface">Oct 21, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={handleViewProfile}
                          className="px-3 py-1.5 border border-primary text-primary font-label-sm text-label-sm rounded-md hover:bg-primary/5 transition-colors cursor-pointer"
                        >
                          View Profile
                        </button>
                        <button 
                          onClick={() => alert('Interview Scheduler Modal placeholder')}
                          className="px-3 py-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm rounded-md hover:bg-primary transition-colors flex items-center gap-1 cursor-pointer border border-transparent"
                        >
                          <span className="material-symbols-outlined text-[16px]">calendar_month</span> Schedule
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
