import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSetup() {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-gutter">
        <header className="mb-gutter md:mb-12">
          <h1 className="font-h1 text-h1 text-primary mb-2">Profile Setup</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Complete your profile to unlock personalized career pathways and internship opportunities. This information will be visible to university staff and partnered organizations.</p>
        </header>
        <form className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start" onSubmit={handleSave}>
          {/* Left Column: Primary Details */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            {/* Personal Information Card */}
            <section className="bg-surface-container-lowest border border-outline-variant p-gutter border-l-[4px] border-l-secondary-container">
              <h2 className="font-h3 text-h3 text-on-surface mb-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-base mt-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="first_name">First Name</label>
                  <input className="font-body-md text-body-md border border-outline-variant bg-surface rounded-DEFAULT px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none" id="first_name" placeholder="e.g., Jobayer" type="text" defaultValue="Jobayer" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="last_name">Last Name</label>
                  <input className="font-body-md text-body-md border border-outline-variant bg-surface rounded-DEFAULT px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none" id="last_name" placeholder="e.g., Alam" type="text" defaultValue="Alam" />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2 mt-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="bio">Professional Bio</label>
                  <textarea className="font-body-md text-body-md border border-outline-variant bg-surface rounded-DEFAULT px-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none" id="bio" placeholder="Briefly describe your academic focus and career aspirations..." rows={4} defaultValue="Bachelor of Computer Engineering student focusing on software design, systems programming, and modern web application development. Excited to explore internships in software engineering." />
                </div>
              </div>
            </section>

            {/* Skills & Expertise Card */}
            <section className="bg-surface-container-lowest border border-outline-variant p-gutter border-l-[4px] border-l-secondary-container">
              <h2 className="font-h3 text-h3 text-on-surface mb-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">code</span>
                Technical Skills
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Add skills relevant to your field of study to help match you with suitable internships.</p>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <input className="w-full font-body-md text-body-md border border-outline-variant bg-surface rounded-DEFAULT pl-10 pr-3 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none" id="skill_search" placeholder="Search and add skills (e.g., Python, Data Analysis)..." type="text" />
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline">search</span>
                </div>
                {/* Selected Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="inline-flex items-center gap-1 bg-surface-container-high border border-outline-variant rounded-full px-3 py-1">
                    <span className="font-label-md text-label-md text-on-surface">Data Analysis</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors flex items-center justify-center" type="button">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-surface-container-high border border-outline-variant rounded-full px-3 py-1">
                    <span className="font-label-md text-label-md text-on-surface">Python</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors flex items-center justify-center" type="button">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-surface-container-high border border-outline-variant rounded-full px-3 py-1">
                    <span className="font-label-md text-label-md text-on-surface">Project Management</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors flex items-center justify-center" type="button">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Document Upload & Actions */}
          <div className="lg:col-span-4 flex flex-col gap-gutter lg:sticky lg:top-gutter">
            {/* Resume Upload Card */}
            <section className="bg-surface-container-lowest border border-outline-variant p-gutter border-l-[4px] border-l-secondary-container">
              <h2 className="font-h3 text-h3 text-on-surface mb-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">upload_file</span>
                Resume / CV
              </h2>
              <div className="mt-4 border-2 border-dashed border-outline-variant bg-surface-container-low p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-high hover:border-primary transition-colors group">
                <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-primary transition-colors">cloud_upload</span>
                <p className="font-label-md text-label-md text-on-surface mb-1">Drag and drop your PDF here</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">or click to browse files (Max 5MB)</p>
                <button className="font-label-md text-label-md border border-primary text-primary px-4 py-2 hover:bg-primary-container hover:text-on-primary-container transition-colors" type="button">
                  Select File
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between p-3 border border-outline-variant bg-surface">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="material-symbols-outlined text-error" data-weight="fill">picture_as_pdf</span>
                  <div className="flex flex-col truncate">
                    <span className="font-label-sm text-label-sm text-on-surface truncate">Jobayer_Alam_Resume_2025.pdf</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">1.2 MB</span>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors p-1" title="Remove file" type="button">
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 px-4 hover:bg-opacity-90 transition-opacity flex justify-center items-center gap-2" type="submit">
                Save Profile
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-3 px-4 hover:bg-surface-container-low transition-colors" 
                type="button"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
