import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md antialiased flex h-screen overflow-hidden w-full">
      <SideNavBar />
      
      <main className="flex-1 flex flex-col md:ml-64 w-full h-full overflow-y-auto bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home', link: '/dashboard' }, { label: 'Profile' }]} />
        
        <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex-1 flex flex-col gap-gutter">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-base border-b border-outline-variant">
            <div>
              <h2 className="font-h1 text-h1 text-primary">Profile</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your academic and professional details.</p>
            </div>
            <button 
              onClick={() => navigate('/profile-setup')}
              className="bg-primary text-on-primary px-4 py-2 rounded font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Edit Profile
            </button>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mt-4">
            {/* Personal Overview Card */}
            <div className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant mb-4">
                <img 
                  alt="Jobayer Alam" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCozQr0rTNOTJa0Sml1wDgeuBMFgnrIKqgBUiQ-XmiOQvl9UK4F18pV49qF3hRVFIykHq5mU379-56Hw6sAYWeRAtQyLqEUbDcEgonYBCRPWCyZnJVd6Gk9GHGSOnYk-U09yShOMugr06_Mcsd6SKI3IbHLthlWxzSB0fLW3cN7SsjlP5MZoU12ZLfHwusxJfkq0FwdS3SCMl-jLw__8AFIMKKG8R5nA2cgGQ69TYqs0RYjonyMjU45mjnXdkaw3-MZ7pxKs9qQn3qR" 
                />
              </div>
              <h3 className="font-h2 text-h2 text-on-surface mb-1">Jobayer Alam</h3>
              <p className="font-label-md text-label-md text-secondary mb-4">Year 3 Student</p>
              <div className="w-full border-t border-outline-variant pt-4 mt-2 flex flex-col gap-3 text-left">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Degree</p>
                  <p className="font-body-md text-body-md text-on-surface font-medium">Bachelor of Computer Engineering</p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">University ID</p>
                  <p className="font-body-md text-body-md text-on-surface font-medium">A25MJ0184</p>
                </div>
              </div>
            </div>

            {/* Contact & Skills Grid */}
            <div className="lg:col-span-2 flex flex-col gap-gutter">
              {/* Contact Info */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
                <h4 className="font-h3 text-h3 text-on-surface mb-4 pb-2 border-b border-outline-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline">contact_mail</span>
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
                    <div className="px-3 py-2 border border-outline-variant rounded bg-surface text-on-surface font-body-md text-body-md flex items-center gap-2">alam.j@graduate.utm.my</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Phone Number</label>
                    <div className="px-3 py-2 border border-outline-variant rounded bg-surface text-on-surface font-body-md text-body-md flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-outline">call</span>
                      +60 12-345 6789
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">LinkedIn Profile</label>
                    <div className="px-3 py-2 border border-outline-variant rounded bg-surface text-primary font-body-md text-body-md flex items-center gap-2 cursor-pointer hover:bg-surface-container transition-colors">
                      <span className="material-symbols-outlined text-[16px]">link</span>
                      linkedin.com/in/jobayer-alam
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
                <h4 className="font-h3 text-h3 text-on-surface mb-4 pb-2 border-b border-outline-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-outline">psychology</span>
                  Core Skills &amp; Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-md text-label-md text-on-surface">JavaScript / TypeScript</span>
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-md text-label-md text-on-surface">React Native</span>
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-md text-label-md text-on-surface">Python &amp; Data Analysis</span>
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-md text-label-md text-on-surface">UI/UX Design</span>
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded font-label-md text-label-md text-on-surface">Agile Methodologies</span>
                  <button 
                    onClick={() => navigate('/profile-setup')}
                    className="px-3 py-1 border border-primary text-primary border-dashed rounded font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span> Add Skill
                  </button>
                </div>
              </div>
            </div>

            {/* Education History */}
            <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
              <h4 className="font-h3 text-h3 text-on-surface mb-6 pb-2 border-b border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">school</span>
                Education History
              </h4>
              <div className="relative pl-6 border-l-2 border-outline-variant ml-3 flex flex-col gap-6">
                {/* Current Item */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container-lowest"></div>
                  <h5 className="font-label-md text-label-md text-on-surface font-bold text-lg">Universiti Teknologi Malaysia (UTM)</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant">Bachelor of Computer Engineering</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed-dim bg-opacity-20 px-2 py-0.5 rounded">Present</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">2025- 2029 (Expected)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface mt-2">Current CGPA: 3.71/4.00. Focus on software architecture and machine learning systems.</p>
                </div>
                {/* Past Item */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-outline-variant rounded-full border-2 border-surface-container-lowest"></div>
                  <h5 className="font-label-md text-label-md text-on-surface font-bold text-lg">International Advanced Levels</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant">Pre-University Programme (Matriculation)</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">2023 - 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume File */}
            <div className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 flex flex-col">
              <h4 className="font-h3 text-h3 text-on-surface mb-4 pb-2 border-b border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">description</span>
                Resume / CV
              </h4>
              <div 
                onClick={() => navigate('/profile-setup')}
                className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-lg p-6 text-center bg-surface hover:bg-surface-container transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-[28px]">upload_file</span>
                </div>
                <p className="font-label-md text-label-md text-on-surface">Upload new document</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">PDF, DOCX up to 5MB</p>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Current File</p>
                <div className="flex items-center justify-between bg-surface-container-high p-3 rounded border border-outline-variant">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="material-symbols-outlined text-error">picture_as_pdf</span>
                    <span className="font-body-sm text-body-sm text-on-surface truncate">J_Alam_Resume_2023.pdf</span>
                  </div>
                  <button className="text-primary hover:text-primary-container p-1 rounded transition-colors" title="Preview">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-8"></div> {/* Spacer */}
        </div>
      </main>
    </div>
  );
}
