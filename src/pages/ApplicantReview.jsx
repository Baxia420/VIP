import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function ApplicantReview() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Pending Review');

  const handleShortlist = () => {
    setStatus('Shortlisted');
    alert('Candidate successfully shortlisted!');
  };

  const handleReject = () => {
    setStatus('Rejected');
    alert('Application rejected.');
  };

  const handleDownload = () => {
    alert('Downloading profile...');
  };

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      {/* Side Navigation */}
      <SideNavBar />

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar 
          breadcrumbs={[
            { label: 'Home', link: '/supervisor/dashboard' },
            { label: 'Applicants', link: '/supervisor/dashboard' },
            { label: 'Applicant Review' }
          ]} 
        />

        <div className="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full flex flex-col gap-gutter mt-4 mb-8">
          {/* Back Navigation */}
          <div>
            <button 
              onClick={() => navigate('/supervisor/dashboard')}
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md bg-transparent border-none cursor-pointer p-0"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Applicants
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-gutter">
            {/* Left Column: Details */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Candidate Header Card */}
              <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-container"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <img 
                    alt="Jobayer Alam Avatar" 
                    className="w-24 h-24 rounded-lg border border-outline-variant object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC25ssI_6UgnKBCD-0v0TioYbbtLNVGOVgQYnNxFP0OV18mFXp1MhU8vUf2kYyQHD83CPxTsb8qVxG3yho25lPvCfTFblt77Sd8vjxjJBy0en9vLvnHsxhFx6yM-gV3Gw8z6J8St629C9jkveVWfu16tyqmx1VfKGi-sndWDczI9Y5nQlY1Fcr5-ossGcIl1mlg2l5YOPt2299GKQ7KNpQeA5XZmMToIheXfr-O-mGLatRp35u4exYI2TTWA78TfYI3pvMZZZ3mFzFu"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h1 className="font-h2 text-h2 text-on-surface font-bold font-h2 serif">Jobayer Alam</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Bachelor of Computer Engineering</p>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-primary">school</span>
                            Universiti Teknologi Malaysia (UTM)
                          </span>
                          <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                            Year 3
                          </span>
                        </div>
                      </div>
                      <span className={`inline-block font-label-sm text-label-sm px-3 py-1.5 rounded-lg border uppercase tracking-wider font-semibold self-start md:self-center ${
                        status === 'Shortlisted' 
                          ? 'bg-secondary-container/10 border-secondary-container text-on-secondary-container' 
                          : status === 'Rejected' 
                          ? 'bg-error-container/15 border-error text-error' 
                          : 'bg-surface-variant border-outline-variant text-on-surface'
                      }`}>
                        {status}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Grid Content */}
              <div className="grid grid-cols-1 gap-6">
                {/* Cover Letter */}
                <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                  <h2 className="font-h3 text-h3 text-on-surface border-b border-outline-variant pb-3 mb-4 font-bold font-h3 serif">Cover Letter</h2>
                  <div className="font-body-md text-body-md text-on-surface-variant space-y-4 leading-relaxed">
                    <p>Dear Hiring Manager,</p>
                    <p>I am writing to express my strong interest in the Software Engineering Internship position at your esteemed organization. As a third-year Computer Engineering student at UTM, I have developed a solid foundation in software development principles and practical problem-solving skills.</p>
                    <p>Throughout my academic journey, I have consistently sought opportunities to apply theoretical knowledge to real-world challenges. My coursework in data structures, algorithms, and system design, combined with hands-on projects, has equipped me with the technical acumen necessary to contribute effectively to your team.</p>
                    <p>I am particularly drawn to your company's innovative approach to building scalable solutions and would be thrilled to bring my passion for coding and continuous learning to your internship program.</p>
                    <p>Thank you for considering my application. I look forward to the possibility of discussing how my skills and enthusiasm align with your team's goals.</p>
                    <p className="mt-4">Sincerely,<br/><strong>Jobayer Alam</strong></p>
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Core Skills */}
                  <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col">
                    <h2 className="font-h3 text-h3 text-on-surface border-b border-outline-variant pb-3 mb-4 font-bold font-h3 serif">Core Skills</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Python', 'Java', 'React', 'SQL', 'Git', 'Agile'].map((skill, index) => (
                        <span key={index} className="bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* CV Document Preview */}
                  <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <h2 className="font-h3 text-h3 text-on-surface border-b border-outline-variant pb-3 mb-4 font-bold font-h3 serif">Resume / CV</h2>
                    </div>
                    <div 
                      onClick={handleDownload}
                      className="border border-outline-variant rounded-xl p-4 flex items-center justify-between bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer group w-full mt-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-lg">
                          <span className="material-symbols-outlined text-primary text-[28px]">picture_as_pdf</span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-label-md text-label-md text-on-surface truncate max-w-[150px] md:max-w-none">J_Alam_Resume_2026.pdf</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">1.2 MB • Uploaded 2 days ago</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors flex-shrink-0">download</span>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Right Column: Actions Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sticky top-24 shadow-sm flex flex-col">
                <h3 className="font-h3 text-h3 text-on-surface mb-6 font-bold font-h3 serif">Review Actions</h3>
                <div className="space-y-4">
                  <button 
                    onClick={handleShortlist}
                    disabled={status === 'Shortlisted'}
                    className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors duration-200 cursor-pointer border border-transparent shadow-sm disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    Shortlist Candidate
                  </button>
                  <button 
                    onClick={handleReject}
                    disabled={status === 'Rejected'}
                    className="w-full bg-transparent border border-outline text-on-surface font-label-md text-label-md py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors duration-200 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">cancel</span>
                    Reject Application
                  </button>
                  <div className="w-full h-px bg-outline-variant my-4"></div>
                  <button 
                    onClick={handleDownload}
                    className="w-full bg-transparent border border-outline-variant text-on-surface-variant font-label-md text-label-md py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:text-primary hover:border-primary transition-colors duration-200 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Download Full Profile
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
