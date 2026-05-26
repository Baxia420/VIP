import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function ApplicationForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    navigate('/my-applications');
  };

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      <SideNavBar />
      
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background">
        <TopNavBar breadcrumbs={[{ label: 'Home', link: '/dashboard' }, { label: 'Browse Listings', link: '/browse-listings' }, { label: 'Application Form' }]} />
        
        <div className="px-margin-mobile md:px-margin-desktop py-12 max-w-[800px] mx-auto w-full flex-1 mb-8">
          {/* Page Header & Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-h2 text-h2 text-on-surface">Application Form</h2>
              {/* Progress Indicator */}
              <div className="flex items-center gap-3">
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Step 2 of 3</span>
                <div className="flex gap-1">
                  <div className="h-1.5 w-8 rounded-full bg-primary opacity-30"></div>
                  <div className="h-1.5 w-8 rounded-full bg-primary"></div>
                  <div className="h-1.5 w-8 rounded-full bg-surface-variant"></div>
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">Please provide your supporting documents and availability for this position.</p>
          </div>

          {/* Form Container (Bento/Card inspired) */}
          <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 shadow-sm flex flex-col gap-8">
            {/* Section 1: CV Upload */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface">Curriculum Vitae (CV) <span className="text-error">*</span></label>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Upload your most recent CV in PDF format. Max size 5MB.</p>
              <div className="relative group">
                <input accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="cv-upload" required type="file" />
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-outline-variant rounded bg-surface transition-colors duration-200 group-hover:border-primary group-hover:bg-primary-fixed/10">
                  <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-primary mb-3">upload_file</span>
                  <span className="font-label-md text-label-md text-on-surface group-hover:text-primary">Click to upload or drag and drop</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">PDF only (max. 5MB)</span>
                </div>
              </div>
            </div>

            {/* Section 2: Cover Letter */}
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="cover-letter">Cover Letter <span className="text-error">*</span></label>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Introduce yourself and explain why you are a strong candidate for this specific role.</p>
              <textarea 
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-outline-variant resize-y" 
                id="cover-letter" 
                name="cover-letter" 
                placeholder="Dear Hiring Manager..." 
                required 
                rows={6}
              ></textarea>
            </div>

            {/* Section 3: Two Column Layout for shorter fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Availability Date */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="start-date">Availability Start Date <span className="text-error">*</span></label>
                <div className="relative">
                  <input className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="start-date" name="start-date" required type="date" />
                </div>
              </div>
              {/* Why this company? */}
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="why-company">Why this company? <span className="text-error">*</span></label>
                <input className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-outline-variant" id="why-company" name="why-company" placeholder="Briefly summarize your motivation" required type="text" />
              </div>
            </div>

            {/* Form Actions & Footer Note */}
            <div className="mt-4 pt-6 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">info</span>
                <span className="font-body-sm text-body-sm">Your application will be reviewed within 5–7 working days.</span>
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => navigate(-1)}
                  className="w-full sm:w-auto px-6 py-3 border border-primary text-primary font-label-md text-label-md rounded hover:bg-primary-fixed transition-colors duration-200 cursor-pointer" 
                  type="button"
                >
                  Back
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-[#3a0306] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                  Submit Application
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
