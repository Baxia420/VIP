import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function InternshipDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased flex h-screen overflow-hidden w-full">
      <SideNavBar />
      
      <main className="flex-1 ml-0 md:ml-64 min-h-screen flex flex-col overflow-y-auto bg-background">
        <TopNavBar 
          breadcrumbs={[
            { label: 'Home', link: '/dashboard' },
            { label: 'Browse Listings', link: '/browse-listings' },
            { label: 'Data Science Intern' }
          ]} 
        />
        
        <div className="px-margin-desktop py-12 max-w-[1080px] mx-auto w-full flex-1 mb-8">
          {/* Header Section */}
          <header className="flex items-start gap-8 mb-12 pb-8 border-b border-outline-variant">
            <div className="w-24 h-24 rounded border border-outline-variant bg-surface-container-lowest flex items-center justify-center shrink-0 p-2 overflow-hidden shadow-sm">
              <img 
                alt="Company Logo Placeholder" 
                className="w-full h-full object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsVw8iVk95CMpYNV6_XpUWOrV6720y4j24phlz64JcCC9Bem4fl9ksutgy8VxwL-ebnbuW2QgDihNOfyYkcwFd6E4yhzDfAb_xj-8J6Fyf7V0smb0_wwh5Xz6AQ2v5Vk0Hpmg8v5L2Qol1bVRIiTqtbpeo-NF5kiyWsrAHvGrbPdo7ABlZ2sQrbZx_VyWBbsRVJrv06snDZ12GevnaaTUn6wICWrTPt8dpZWs6QuAiw-o50H3IH6D4XjJomOW7EcLGyxogznpccg" 
              />
            </div>
            <div className="flex-1 pt-1">
              <div className="inline-flex items-center px-2 py-1 mb-3 rounded bg-gray-600/10 text-gray-600 font-label-sm text-label-sm uppercase tracking-wider">
                Active Listing
              </div>
              <h1 className="font-h1 text-h1 text-primary-container mb-2 leading-tight">Data Science Intern</h1>
              <div className="font-h3 text-h3 text-secondary mb-4">Nexus Technologies Analytics Group</div>
              <div className="flex flex-wrap gap-4 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  Kuala Lumpur (Hybrid)
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">business</span>
                  Technology / Software
                </div>
              </div>
            </div>
          </header>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column (Content Canvas) */}
            <div className="lg:col-span-8 space-y-10">
              <section>
                <h2 className="font-h3 text-h3 text-primary-container mb-4 pb-2 border-b border-surface-variant">Role Description</h2>
                <div className="font-body-md text-body-md text-on-surface space-y-4">
                  <p>Nexus Technologies is seeking a highly motivated and analytical Data Science Intern to join our core product team. In this role, you will work closely with senior data scientists and engineers to analyze vast datasets, develop predictive models, and contribute to the optimization of our enterprise software solutions.</p>
                  <p>This internship is designed to provide hands-on experience in a fast-paced corporate environment. You will not only apply theoretical knowledge to practical, large-scale problems but also learn the rigorous methodologies required for deploying machine learning models in a production environment.</p>
                </div>
              </section>

              <section>
                <h2 className="font-h3 text-h3 text-primary-container mb-4 pb-2 border-b border-surface-variant">Key Responsibilities</h2>
                <ul className="font-body-md text-body-md text-on-surface space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                    <span>Assist in the extraction, cleaning, and preprocessing of large datasets from varied sources.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                    <span>Collaborate on building, training, and validating supervised and unsupervised machine learning models.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                    <span>Design and implement interactive dashboards using Python or specialized BI tools to visualize complex data trends for stakeholders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                    <span>Participate in weekly analytical review sessions and present findings to the technical leadership team.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-h3 text-h3 text-primary-container mb-4 pb-2 border-b border-surface-variant">Requirements</h2>
                <ul className="font-body-md text-body-md text-on-surface space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">bookmark</span>
                    <span>Currently pursuing a Bachelor's or Master's degree in Computer Science, Statistics, Mathematics, or a related field.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">bookmark</span>
                    <span>Strong foundation in statistical analysis and programming, specifically with Python (Pandas, NumPy, Scikit-learn).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">bookmark</span>
                    <span>Familiarity with SQL for database querying and manipulation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">bookmark</span>
                    <span>Excellent written and verbal communication skills, with the ability to explain complex technical concepts to non-technical audiences.</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Right Column (Sticky Summary) */}
            <div className="lg:col-span-4">
              <aside className="sticky top-24 bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-sm">
                {/* Amber vertical accent typical of the cards in this system */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C4860A] rounded-l"></div>
                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-6 pb-4 border-b border-surface-variant">Internship Details</h3>
                <div className="space-y-5 mb-8">
                  <div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">Duration</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium">12 - 24 Weeks</div>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">Monthly Stipend</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium">RM 1,200 - RM 1,500</div>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">Application Deadline</div>
                    <div className="font-body-md text-body-md text-error font-medium">October 15, 2026</div>
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mb-1">Positions Available</div>
                    <div className="font-body-md text-body-md text-on-surface font-medium">2 Openings</div>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/apply')}
                  className="w-full bg-[#6B1B1B] hover:bg-[#4d0408] text-[#ffffff] font-label-md text-label-md py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2 border border-transparent cursor-pointer"
                >
                  <span>Apply Now</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <div className="mt-4 text-center">
                  <a className="inline-block font-label-sm text-label-sm text-primary-container hover:underline text-center" href="#">Save for later</a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
