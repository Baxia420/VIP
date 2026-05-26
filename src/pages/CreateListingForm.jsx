import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function CreateListingForm() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState(['Python', 'React']);
  const [skillInput, setSkillInput] = useState('');
  const [stipend, setStipend] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddSkill = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = skillInput.trim();
      if (val && !skills.includes(val)) {
        setSkills([...skills, val]);
        setSkillInput('');
      }
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Listing Published Successfully!');
    navigate('/supervisor/postings');
  };

  const handleSaveDraft = () => {
    alert('Listing Saved as Draft!');
    navigate('/supervisor/postings');
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
            { label: 'My Postings', link: '/supervisor/postings' },
            { label: 'Post New Internship' }
          ]} 
        />

        <div className="p-margin-mobile md:p-margin-desktop max-w-[1280px] mx-auto w-full flex flex-col gap-gutter mt-4 mb-8">
          <div className="mb-2">
            <h1 className="font-h1 text-h1 text-on-surface mb-2 font-bold font-h1 serif">Post New Internship</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Create a detailed listing to attract top student talent from UTM.</p>
          </div>

          {/* Form Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Job Title */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="job-title">Job Title</label>
                  <input 
                    className="w-full border border-outline-variant rounded px-3 py-2 font-body-md text-body-md bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface placeholder:text-on-surface-variant/50" 
                    id="job-title" 
                    placeholder="e.g., Software Engineering Intern" 
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>

                {/* Category & Duration Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="category">Category</label>
                    <div className="relative">
                      <select 
                        className="w-full border border-outline-variant rounded px-3 py-2 font-body-md text-body-md bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface appearance-none pr-10" 
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select category</option>
                        <option value="engineering">Engineering</option>
                        <option value="data-science">Data Science</option>
                        <option value="business">Business &amp; Finance</option>
                        <option value="design">Design &amp; UX</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="duration">Duration</label>
                    <div className="relative">
                      <select 
                        className="w-full border border-outline-variant rounded px-3 py-2 font-body-md text-body-md bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface appearance-none pr-10" 
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select duration</option>
                        <option value="3-months">3 Months</option>
                        <option value="6-months">6 Months</option>
                        <option value="12-months">12 Months</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Role Description */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="description">Role Description</label>
                  <div className="border border-outline-variant rounded overflow-hidden">
                    <div className="bg-surface-container-low border-b border-outline-variant px-3 py-2 flex gap-2">
                      <button className="p-1 text-on-surface-variant hover:bg-surface-variant rounded transition-colors cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-[18px]">format_bold</span>
                      </button>
                      <button className="p-1 text-on-surface-variant hover:bg-surface-variant rounded transition-colors cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-[18px]">format_italic</span>
                      </button>
                      <button className="p-1 text-on-surface-variant hover:bg-surface-variant rounded transition-colors cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                      </button>
                    </div>
                    <textarea 
                      className="w-full border-none px-3 py-2 font-body-md text-body-md bg-surface-container-lowest focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 resize-y focus:outline-none" 
                      id="description" 
                      placeholder="Describe the responsibilities and learning opportunities..." 
                      rows="5"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Required Skills */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="skills-input">Required Skills</label>
                  <div className="border border-outline-variant rounded p-2 bg-surface-container-lowest flex flex-wrap gap-2 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary">
                    {skills.map((skill, index) => (
                      <span key={index} className="bg-surface-container-high border border-outline-variant text-on-surface font-label-sm text-label-sm px-2 py-1 rounded flex items-center gap-1">
                        {skill}
                        <button 
                          className="hover:text-error cursor-pointer border-none bg-transparent p-0 flex items-center" 
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          <span className="material-symbols-outlined text-[14px]">close</span>
                        </button>
                      </span>
                    ))}
                    <input 
                      className="flex-1 min-w-[200px] border-none bg-transparent focus:ring-0 focus:outline-none p-1 font-body-sm text-body-sm placeholder:text-on-surface-variant/50 text-on-surface" 
                      id="skills-input" 
                      placeholder="Type a skill and press Enter..." 
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={handleAddSkill}
                    />
                  </div>
                </div>

                {/* Stipend & Deadline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="stipend">Monthly Stipend</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-body-md text-body-md">RM</span>
                      <input 
                        className="w-full border border-outline-variant rounded pl-10 pr-3 py-2 font-body-md text-body-md bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface placeholder:text-on-surface-variant/50" 
                        id="stipend" 
                        placeholder="e.g., 1000" 
                        type="number"
                        value={stipend}
                        onChange={(e) => setStipend(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="deadline">Application Deadline</label>
                    <div className="relative">
                      <input 
                        className="w-full border border-outline-variant rounded px-3 py-2 font-body-md text-body-md bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-on-surface pr-10" 
                        id="deadline" 
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-outline-variant flex justify-end gap-4 mt-8">
                  <button 
                    onClick={handleSaveDraft}
                    className="px-6 py-2.5 border border-primary-container text-primary-container font-label-md text-label-md rounded hover:bg-primary-container/10 transition-colors cursor-pointer bg-transparent" 
                    type="button"
                  >
                    Save as Draft
                  </button>
                  <button 
                    className="px-6 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary/90 transition-colors cursor-pointer border border-transparent" 
                    type="submit"
                  >
                    Publish Listing
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
