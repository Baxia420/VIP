import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function ForumThread() {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const [newReply, setNewReply] = useState('');

  // Mock database of threads
  const threadData = {
    'cv-tips': {
      title: 'Tips for CV formatting to pass ATS systems?',
      author: 'Nahid Hasan Rayan',
      role: 'Computer Science, Year 3',
      avatar: 'NR',
      time: 'Posted 2 days ago',
      tags: ['resume-tips', 'ATS', 'career-advice'],
      likes: 24,
      body: (
        <div className="prose prose-slate max-w-none font-body-md text-on-surface leading-relaxed flex flex-col gap-4">
          <p>Hey everyone, I've been applying for summer internships and keep hearing about ATS (Applicant Tracking Systems) automatically rejecting resumes before human eyes even see them. I wanted to share some pitfalls I've learned about recently:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Complex Tables:</strong> Bots can't read across columns reliably. Stick to single-column layouts if possible.</li>
            <li><strong>Images/Graphics:</strong> Headshots or skill-level charts (like those 5-star ratings for Java) are invisible to ATS.</li>
            <li><strong>Non-standard Fonts:</strong> Stick to Arial, Calibri, Times New Roman, or Inter. Custom fonts often parse as gibberish.</li>
          </ul>
          <p>Has anyone here had success after simplifying their CV? Or does anyone know if specific tech companies in KL use stricter ATS rules?</p>
        </div>
      ),
      replies: [
        { author: 'Zay Yar Shin', time: 'Yesterday at 10:23 AM', avatar: 'ZY', content: 'Great tips! I used to have a fancy two-column resume I made in Canva. Switched to a plain black-and-white Word doc template, exported to PDF, and immediately started getting more callbacks from banks here.', likes: 8 },
        { author: 'Khalid Waleed Issa', time: 'Yesterday at 2:45 PM', avatar: 'KW', content: 'Does anyone know if saving as PDF vs DOCX makes a difference? I heard some older ATS systems actually prefer DOCX because PDFs can parse weirdly if they are generated from design software.', likes: 3 },
        { author: 'Nahid Hasan Rayan', time: 'Today at 9:00 AM', avatar: 'NR', content: '@Khalid From what I read, if you use standard fonts and basic formatting, PDF is usually safer now because it preserves formatting. Just make sure it has selectable text (not an image PDF).', likes: 5, isNested: true }
      ]
    },
    'petronas-interview': {
      title: 'Petronas Software Engineering Interview Experience - 2026',
      author: 'Zay Yar Shin',
      role: 'Alumni, Recent Grad',
      avatar: 'ZS',
      time: 'Posted 2 days ago',
      tags: ['interview-prep', 'petronas', 'software-engineering'],
      likes: 45,
      body: (
        <div className="prose prose-slate max-w-none font-body-md text-on-surface leading-relaxed flex flex-col gap-4">
          <p>Hi everyone, I recently completed the interview process for the Software Engineering Internship position at Petronas (KLCC HQ) for the 2026 intake. I wanted to share my experience here since past posts really helped me prepare.</p>
          <h3 className="text-xl font-bold font-h2 serif text-primary mt-4">Stage 1: Initial Screening (Video Recording)</h3>
          <p>This was an asynchronous video interview via HireVue. You get 3 questions, with 30 seconds to prepare and 2 minutes to record your answer for each.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Introduce yourself and why you chose Software Engineering.</li>
            <li>Describe a time you had to work with a difficult team member.</li>
            <li>Why Petronas and how does our core values align with yours?</li>
          </ul>
          <h3 className="text-xl font-bold font-h2 serif text-primary mt-4">Stage 2: Technical Assessment (HackerRank)</h3>
          <p>About a week after the screening, I received an invitation for a 90-minute HackerRank test. It consisted of 10 Multiple Choice Questions and 2 Coding Challenges (Medium difficulty). One was array manipulation, the other involved writing a SQL query with JOINs.</p>
          <h3 className="text-xl font-bold font-h2 serif text-primary mt-4">Stage 3: Final Interview with Lead Engineer</h3>
          <p>This was a 45-minute Teams interview with a Senior Engineering Manager and an HR representative. We discussed state management and error handling in React, followed by a light system design scenario on rigorous rig-sensor data displays.</p>
          <p className="mt-4">I got the offer email 2 weeks after the final round! Feel free to ask any questions below.</p>
        </div>
      ),
      replies: [
        { author: 'Jobayer Alam', time: '1 day ago', avatar: 'JA', content: 'Congratulations Zay! Thanks for the detailed breakdown. For the React project they asked about, did you put the GitHub link in your resume, or did they just ask you to talk through it conceptually?', likes: 12 },
        { author: 'Zay Yar Shin', time: '20 hours ago', avatar: 'ZS', content: 'Hey Jobayer! I had the GitHub link on my resume, but they did not actively pull it up during the call. They just asked me to explain the architecture verbally and why I chose Redux over Context API for that specific use case.', likes: 7, isNested: true },
        { author: 'Nahid Hasan Rayan', time: '5 hours ago', avatar: 'NR', content: 'Very helpful post. Were the HackerRank questions monitored (webcam on) or unproctored?', likes: 3 }
      ]
    },
    'startup-vs-glc': {
      title: 'Need advice: Choosing between Startup vs GLC for internship',
      author: 'Khalid Waleed Issa',
      role: 'Computer Science, Year 3',
      avatar: 'KW',
      time: 'Posted 2 days ago',
      tags: ['career-choice', 'internship-hunting'],
      likes: 32,
      body: (
        <div className="prose prose-slate max-w-none font-body-md text-on-surface leading-relaxed flex flex-col gap-4">
          <p>Hi everyone, I'm currently in my 3rd year of Computer Science and I've been fortunate enough to receive two internship offers for the upcoming semester. However, I'm really torn between the two and could use some perspective.</p>
          <p><strong>Offer 1: Fast-growing Tech Startup in KL</strong><br />
          They are building an AI-driven logistics platform. The team is around 20 people and I would be working directly with the CTO. Steep learning curve, React/Node/AWS stack, but slightly lower allowance and potentially unstructured.</p>
          <p><strong>Offer 2: Major Government Linked Company (GLC)</strong><br />
          This is for their IT department. Prestigious name, structured 12-week program, better allowance, and return offer potential. However, it is a Java/Spring legacy stack and a slower corporate pace.</p>
          <p>My long-term goal is to become a software architect. Does the "prestige" of a GLC outweigh the hands-on experience of a startup early in one's career? Any advice is appreciated!</p>
        </div>
      ),
      replies: [
        { author: 'Anis Sofea', time: '1 day ago', avatar: 'AS', content: "I was in this exact situation 3 years ago! I chose the startup route and didn't regret it. The learning curve was brutal, but when I graduated, I had actual shipped products to talk about in interviews. Technical skills and actual project impact usually win out.", likes: 18 },
        { author: 'Ang Yu Thung', time: '20 hours ago', avatar: 'AY', content: "Counter-point: While startups give you breadth, GLCs give you depth in process. You learn how enterprise software is actually maintained, deployed, and scaled securely. Plus, the network you build in a GLC internship is invaluable.", likes: 12, isNested: true }
      ]
    }
  };

  const currentThread = threadData[threadId] || threadData['cv-tips'];
  const [repliesList, setRepliesList] = useState(currentThread.replies);
  const [likesCount, setLikesCount] = useState(currentThread.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handlePostReply = (e) => {
    e.preventDefault();
    if (!newReply.trim()) return;

    const newReplyObj = {
      author: 'Jobayer Alam',
      time: 'Just now',
      avatar: 'JA',
      content: newReply.trim(),
      likes: 0
    };

    setRepliesList([...repliesList, newReplyObj]);
    setNewReply('');
  };

  return (
    <div className="bg-background text-on-background font-body-md h-screen overflow-hidden flex w-full">
      {/* Side Navigation */}
      <SideNavBar />

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto w-full flex flex-col bg-background pb-8">
        <TopNavBar 
          breadcrumbs={[
            { label: 'Home', link: '/dashboard' },
            { label: 'Peer Forum', link: '/forum' },
            { label: 'Discussion' }
          ]} 
        />

        <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop pt-6 pb-4 w-full">
          {/* Back Navigation */}
          <button 
            onClick={() => navigate('/forum')}
            className="inline-flex items-center text-on-surface-variant hover:text-primary-container font-label-sm transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            <span className="material-symbols-outlined text-sm mr-1">arrow_back</span>
            Back to Discussions
          </button>
        </div>

        <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-gutter w-full">
          {/* Left Column: Thread Content */}
          <div className="flex flex-col gap-6">
            {/* Main Post Card */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col relative overflow-hidden shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container"></div>
              <div className="p-6 md:p-8 pl-8 md:pl-10">
                {/* Post Header */}
                <div className="flex flex-col gap-4 border-b border-outline-variant pb-6 mb-6">
                  <h1 className="font-h1 text-h1 text-on-background font-bold font-h1 serif leading-tight">
                    {currentThread.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-body-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md shrink-0 border border-outline-variant">
                        {currentThread.avatar}
                      </div>
                      <div>
                        <div className="font-label-md text-on-surface">{currentThread.author}</div>
                        <div className="text-xs">{currentThread.role} • {currentThread.time}</div>
                      </div>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentThread.tags.map((tag, idx) => (
                      <span key={idx} className="bg-surface-variant text-on-surface-variant font-label-sm px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Post Body */}
                <div className="mb-8">
                  {currentThread.body}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                  <div className="flex gap-4">
                    <button 
                      onClick={handleLike}
                      className={`flex items-center gap-1.5 font-label-md text-label-md transition-colors cursor-pointer bg-transparent border-none ${
                        isLiked ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isLiked ? '"FILL" 1' : '"FILL" 0' }}>thumb_up</span>
                      <span>{likesCount} Likes</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-label-md cursor-pointer bg-transparent border-none">
                      <span className="material-symbols-outlined text-[20px]">share</span>
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="text-on-surface-variant font-label-sm">
                    {repliesList.length} Replies
                  </div>
                </div>
              </div>
            </article>

            {/* Comments Section */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="font-h2 text-h2 mb-6 border-b border-outline-variant pb-2 font-bold font-h2 serif">
                Discussion ({repliesList.length})
              </h2>

              {/* Comment Thread */}
              <div className="flex flex-col gap-6 mb-8">
                {repliesList.map((reply, idx) => (
                  <div key={idx} className={`flex gap-4 ${reply.isNested ? 'ml-12 border-l-2 border-outline-variant pl-4' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary font-bold shrink-0">
                      {reply.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="bg-surface-container p-4 rounded-xl border border-outline-variant">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-label-md text-label-md text-on-surface">{reply.author}</span>
                          <span className="text-xs text-on-surface-variant">{reply.time}</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">{reply.content}</p>
                      </div>
                      <div className="flex gap-4 mt-2 ml-2">
                        <button className="text-xs font-label-sm text-on-surface-variant hover:text-primary bg-transparent border-none cursor-pointer">Reply</button>
                        <button className="text-xs font-label-sm text-on-surface-variant hover:text-primary flex items-center gap-1 bg-transparent border-none cursor-pointer">
                          <span className="material-symbols-outlined text-[14px]">thumb_up</span> 
                          {reply.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              <form onSubmit={handlePostReply} className="flex gap-4 border-t border-outline-variant pt-6">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md shrink-0 border border-outline-variant">
                  JA
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <textarea 
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="w-full border border-outline-variant rounded-lg p-3 font-body-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-y min-h-[100px] bg-surface text-on-surface" 
                    placeholder="Add your thoughts or advice..."
                    required
                  ></textarea>
                  <div className="flex justify-end">
                    <button 
                      type="submit"
                      className="bg-primary text-on-primary font-label-md px-6 py-2.5 rounded-lg hover:bg-primary/95 transition-colors cursor-pointer border border-transparent shadow-sm"
                    >
                      Post Reply
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
            {/* Thread Info Card */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <h3 className="font-h3 text-h3 mb-4 border-b border-outline-variant pb-2 font-bold font-h3 serif">About this Thread</h3>
              <div className="flex flex-col gap-3 font-body-sm text-on-surface-variant">
                <div className="flex justify-between">
                  <span>Created</span>
                  <span className="text-on-surface font-medium">Oct 12, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Category</span>
                  <span className="text-on-surface font-medium">Interview Experiences</span>
                </div>
              </div>
            </div>

            {/* Related Discussions */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <h3 className="font-h3 text-h3 mb-4 border-b border-outline-variant pb-2 font-bold font-h3 serif">Related Discussions</h3>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Maybank IT Summer Internship 2026 - Assessment Centre Tips', info: '15 replies • 3 days ago' },
                  { title: 'Shopee Backend Engineering Interview - System Design Prep', info: '42 replies • 1 week ago' },
                  { title: 'Is Petronas taking fresh grads for Data Engineering this cycle?', info: '8 replies • 2 weeks ago' }
                ].map((item, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <h4 className="font-label-md text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h4>
                    <div className="text-xs text-on-surface-variant mt-1">{item.info}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
