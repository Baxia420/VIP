import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function PeerForum() {
  const navigate = useNavigate();

  const threads = [
    {
      id: 'petronas-interview',
      title: 'Petronas Software Engineering Interview Experience - 2026',
      snippet: 'Just finished my final technical round with Petronas yesterday. Sharing the structure and some of the technical questions they asked, especially regarding system design and specific tech stacks...',
      tags: ['interview-prep', 'petronas', 'software-engineering'],
      replies: 24,
      views: '1.2k',
      author: 'Zay Yar Shin',
      avatar: 'ZS',
      time: 'Posted 2 hours ago'
    },
    {
      id: 'cv-tips',
      title: 'Tips for CV formatting to pass ATS systems?',
      snippet: "I've been applying to a few MNCs but feel like my CV isn't making it past the initial screening. Are there specific keywords or formatting styles (like standard fonts vs designed templates) that work better for Malaysian tech companies?",
      tags: ['resume-tips', 'ATS', 'career-advice'],
      replies: 15,
      views: '850',
      author: 'Nahid Hasan Rayan',
      avatar: 'NH',
      time: 'Posted 5 hours ago'
    },
    {
      id: 'startup-vs-glc',
      title: 'Need advice: Choosing between Startup vs GLC for internship',
      snippet: 'I have offers from a small fast-paced startup in KL and a large Government Linked Company. The startup pays slightly less but promises more hands-on work. The GLC is prestigious but might be slower. Thoughts?',
      tags: ['career-choice', 'internship-hunting'],
      replies: 42,
      views: '2.1k',
      author: 'Khalid Waleed Issa',
      avatar: 'KW',
      time: 'Posted 1 day ago'
    }
  ];

  const handleStartThread = () => {
    alert('Start New Thread modal/action placeholder.');
  };

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      {/* Side Navigation */}
      <SideNavBar />

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home', link: '/dashboard' }, { label: 'Peer Forum' }]} />

        <div className="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full flex flex-col gap-gutter mt-4 mb-8">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-h1 text-h1 text-on-background font-bold font-h1 serif">Peer Discussion Forum</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Connect, share experiences, and seek advice from fellow UTM students and alumni.</p>
            </div>
            <button 
              onClick={handleStartThread}
              className="bg-primary-container text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap self-start sm:self-auto cursor-pointer border border-transparent shadow-sm"
            >
              <span className="material-symbols-outlined">add</span>
              Start New Thread
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-gutter items-start">
            {/* Left Column (Thread Feed) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {/* Filters/Sort */}
              <div className="flex items-center justify-between bg-surface-container-lowest p-4 border border-outline-variant rounded-lg">
                <div className="flex gap-4 font-label-md text-label-md">
                  <button className="text-primary border-b-2 border-primary pb-1 cursor-pointer bg-transparent border-none">Recent</button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors pb-1 cursor-pointer bg-transparent border-none">Top Voted</button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors pb-1 cursor-pointer bg-transparent border-none">Unanswered</button>
                </div>
                <button className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors cursor-pointer bg-transparent border-none">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  Filter
                </button>
              </div>

              {/* Thread Cards */}
              <div className="flex flex-col gap-4">
                {threads.map(thread => (
                  <article 
                    key={thread.id} 
                    onClick={() => navigate(`/forum/thread/${thread.id}`)}
                    className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 border-l-4 border-l-secondary-container hover:bg-surface-container-low transition-colors cursor-pointer shadow-sm relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center text-primary font-bold">
                          {thread.avatar}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-h3 text-h3 text-on-background mb-1 font-bold font-h3 serif hover:text-primary transition-colors">
                          {thread.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 line-clamp-2 leading-relaxed">
                          {thread.snippet}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {thread.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">forum</span>
                              {thread.replies} replies
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">visibility</span>
                              {thread.views} views
                            </span>
                          </div>
                          <span className="text-xs">{thread.time} by {thread.author}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column (Sidebar Widgets) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {/* Popular Topics Widget */}
              <aside className="bg-surface-container-lowest border border-outline-variant rounded-lg p-5 shadow-sm">
                <h4 className="font-h3 text-[20px] text-on-background mb-4 flex items-center gap-2 font-bold font-h3 serif">
                  <span className="material-symbols-outlined text-secondary">trending_up</span>
                  Popular Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  <a className="px-3 py-1.5 bg-surface-variant text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors font-label-sm text-label-sm rounded-full border border-outline-variant" href="#">#interview-prep (142)</a>
                  <a className="px-3 py-1.5 bg-surface-variant text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors font-label-sm text-label-sm rounded-full border border-outline-variant" href="#">#resume-tips (98)</a>
                  <a className="px-3 py-1.5 bg-surface-variant text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors font-label-sm text-label-sm rounded-full border border-outline-variant" href="#">#petronas (75)</a>
                  <a className="px-3 py-1.5 bg-surface-variant text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors font-label-sm text-label-sm rounded-full border border-outline-variant" href="#">#software-engineering (62)</a>
                </div>
              </aside>

              {/* Top Contributors Widget */}
              <aside className="bg-surface-container-lowest border border-outline-variant rounded-lg p-5 shadow-sm">
                <h4 className="font-h3 text-[20px] text-on-background mb-4 flex items-center gap-2 font-bold font-h3 serif">
                  <span className="material-symbols-outlined text-secondary">group</span>
                  Top Contributors
                </h4>
                <ul className="flex flex-col gap-3">
                  {[
                    { name: 'Ghazi Anwar', role: 'Alumni Mentor', pts: '342 pts', avatar: 'GA' },
                    { name: 'Jobayer Alam', role: 'Senior Student', pts: '215 pts', avatar: 'JA' },
                    { name: 'Zay Yar Shin', role: 'Recent Grad', pts: '189 pts', avatar: 'Z' }
                  ].map((user, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center text-primary font-bold text-xs">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-label-md text-label-md text-on-background">{user.name}</p>
                          <p className="text-[11px] text-on-surface-variant">{user.role}</p>
                        </div>
                      </div>
                      <span className="bg-surface-variant text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full">{user.pts}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Guidelines Box */}
              <aside className="bg-surface-container p-5 rounded-lg border border-outline-variant shadow-sm">
                <h4 className="font-h3 text-[18px] text-primary mb-2 flex items-center gap-2 font-bold font-h3 serif">
                  <span className="material-symbols-outlined">policy</span>
                  Forum Guidelines
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 leading-relaxed">
                  Please maintain professional conduct in all discussions. This forum is monitored by UTM career advisors.
                </p>
                <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                  <li>Respect academic integrity.</li>
                  <li>Do not share confidential interview materials.</li>
                  <li>Be constructive and supportive.</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
