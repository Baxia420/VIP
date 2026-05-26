import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      {/* Side Navigation */}
      <SideNavBar />

      {/* Main Content Canvas */}
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home' }, { label: 'Dashboard' }]} />
        
        <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-gutter">
          {/* Welcome Banner */}
          <header className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4">
            <div>
              <h2 className="font-h2 text-primary-container mb-2 text-h2 font-['Newsreader'] serif">Welcome back, Jobayer Alam</h2>
              <p className="font-body-lg text-on-surface-variant text-body-lg">Bachelor of Computer Engineering • Year 3</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/browse-listings')}
                className="bg-primary-container text-on-primary font-label-md px-6 py-3 rounded-DEFAULT hover:bg-primary-fixed-variant transition-colors border border-transparent cursor-pointer"
              >
                New Application
              </button>
            </div>
          </header>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant border-l-4 border-l-[#C4860A] rounded-DEFAULT p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <p className="font-label-sm text-on-surface-variant text-label-sm uppercase tracking-wider mb-1">Applications Sent</p>
                <p className="font-h1 text-on-surface text-h1 font-bold">12</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
              </div>
            </div>
            {/* Stat Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant border-l-4 border-l-[#C4860A] rounded-DEFAULT p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <p className="font-label-sm text-on-surface-variant text-label-sm uppercase tracking-wider mb-1">Interviews Scheduled</p>
                <p className="font-h1 text-on-surface text-h1 font-bold">3</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>event</span>
              </div>
            </div>
            {/* Stat Card 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant border-l-4 border-l-[#C4860A] rounded-DEFAULT p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <p className="font-label-sm text-on-surface-variant text-label-sm uppercase tracking-wider mb-1">Offers Received</p>
                <p className="font-h1 text-on-surface text-h1 font-bold">1</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
              </div>
            </div>
            {/* Stat Card 4 (Career Radar & Trends) */}
            <div 
              onClick={() => navigate('/career-radar')}
              className="bg-surface-container-lowest border border-[#E5E1DA] border-l-4 border-l-[#C4860A] rounded-DEFAULT p-6 flex items-center justify-between shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
            >
              <div>
                <p className="font-label-sm text-on-surface-variant text-label-sm uppercase tracking-wider mb-1">Career Radar</p>
                <p className="font-h3 text-on-surface text-h3 font-bold">Python (88%)</p>
                <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px] text-green-600">trending_up</span>
                  Trending Tech Skill
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>query_stats</span>
              </div>
            </div>
          </div>

          {/* Lower Grid: Applications & Forums */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Applications Table Section */}
            <section className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex flex-col shadow-sm">
              <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                <h3 className="font-h3 text-primary-container text-h3 font-['Newsreader'] serif">Recent Applications</h3>
                <button 
                  onClick={() => navigate('/my-applications')}
                  className="font-label-md text-primary-container text-label-md hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none"
                >
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-variant/50 border-b border-outline-variant">
                      <th className="p-4 font-label-sm text-on-surface-variant text-label-sm font-semibold">Company</th>
                      <th className="p-4 font-label-sm text-on-surface-variant text-label-sm font-semibold">Role</th>
                      <th className="p-4 font-label-sm text-on-surface-variant text-label-sm font-semibold">Date Applied</th>
                      <th className="p-4 font-label-sm text-on-surface-variant text-label-sm font-semibold">Status</th>
                      <th className="p-4 font-label-sm text-on-surface-variant text-label-sm font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="p-4 font-body-md text-on-surface font-medium">Petronas</td>
                      <td className="p-4 font-body-md text-on-surface-variant">Software Engineering Intern</td>
                      <td className="p-4 font-body-sm text-on-surface-variant">Apr 12, 2026</td>
                      <td className="p-4">
                        <span className="inline-block px-3 py-1 bg-[#C4860A]/10 text-[#C4860A] font-label-sm text-label-sm rounded uppercase">Reviewed</span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => navigate('/internship-details')}
                          className="text-primary-container hover:text-primary-fixed-variant transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="p-4 font-body-md text-on-surface font-medium">Microsoft</td>
                      <td className="p-4 font-body-md text-on-surface-variant">Data Analyst Intern</td>
                      <td className="p-4 font-body-sm text-on-surface-variant">Apr 02, 2026</td>
                      <td className="p-4">
                        <span className="inline-block px-3 py-1 bg-[#6B7280]/10 text-[#6B7280] font-label-sm text-label-sm rounded uppercase">Pending</span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => navigate('/internship-details')}
                          className="text-primary-container hover:text-primary-fixed-variant transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="p-4 font-body-md text-on-surface font-medium">Google</td>
                      <td className="p-4 font-body-md text-on-surface-variant">Frontend Developer Intern</td>
                      <td className="p-4 font-body-sm text-on-surface-variant">Mar 25, 2026</td>
                      <td className="p-4">
                        <span className="inline-block px-3 py-1 bg-[#6B1B1B]/10 text-[#6B1B1B] font-label-sm text-label-sm rounded uppercase">Accepted</span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => navigate('/internship-details')}
                          className="text-primary-container hover:text-primary-fixed-variant transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="p-4 font-body-md text-on-surface font-medium">DHL</td>
                      <td className="p-4 font-body-md text-on-surface-variant">IT Support Intern</td>
                      <td className="p-4 font-body-sm text-on-surface-variant">Mar 15, 2026</td>
                      <td className="p-4">
                        <span className="inline-block px-3 py-1 bg-[#6B7280]/10 text-[#6B7280] font-label-sm text-label-sm rounded uppercase">Pending</span>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => navigate('/internship-details')}
                          className="text-primary-container hover:text-primary-fixed-variant transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recent Forums Section */}
            <aside className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex flex-col shadow-sm">
              <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                <h3 className="font-h3 text-primary-container text-h3 font-['Newsreader'] serif">Recent Discussions</h3>
                <button 
                  onClick={() => navigate('/forum')}
                  className="font-label-md text-primary-container text-label-md hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none"
                >
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {[
                  {
                    id: 'petronas-interview',
                    title: 'Petronas Software Engineering Interview Experience',
                    replies: 24,
                    time: '2h ago',
                    avatar: 'ZS'
                  },
                  {
                    id: 'cv-tips',
                    title: 'Tips for CV formatting to pass ATS systems?',
                    replies: 15,
                    time: '5h ago',
                    avatar: 'NH'
                  },
                  {
                    id: 'startup-vs-glc',
                    title: 'Choosing between Startup vs GLC for internship',
                    replies: 42,
                    time: '1d ago',
                    avatar: 'KW'
                  }
                ].map((thread) => (
                  <div 
                    key={thread.id} 
                    onClick={() => navigate(`/forum/thread/${thread.id}`)}
                    className="flex items-start gap-3 p-3 hover:bg-surface-variant/30 rounded cursor-pointer transition-colors border border-transparent hover:border-outline-variant/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center text-primary font-bold shrink-0 text-xs">
                      {thread.avatar}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-label-md text-on-surface hover:text-primary transition-colors truncate">
                        {thread.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant mt-1">
                        <span>{thread.time}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[12px]">forum</span>
                          {thread.replies}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
