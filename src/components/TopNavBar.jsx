import React from 'react';

export default function TopNavBar({ breadcrumbs = [] }) {
  const role = localStorage.getItem('role') || 'student';
  const isSupervisor = role === 'supervisor';

  const avatarSrc = isSupervisor 
    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBBdfysowd5Pm1a6FLlqsvtjIHq8VOr2W4XMy2ezgO60lYp60Nnma8xydX30Q98h7EjogREpvMz0cVIK2rMpeTR9kPeKbPqHv0qzb7Hd-9d0vMqsJqRClucAWYijkZe9x1r03A33v6YZu4mnMIKhVOiypICI5_i3Pe3nBwARLSiBxuffumEns3AxOeZeCB-3Ctnd8rTYObpy20YGa-Mn3avrU9Sri1HrBFcVDpqL3_eEiG7v4qPm8N-DLY22mAEshzi525MCPk_-Q"
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuCxagNABC5cQKSUfttqXxWuKOUihfncHJPKbZKSIrqjVGA29PDYEt4JyNC7lm02N9s06qd9VdV1KI3dxJ11u84PwNZMGtfMkrwhDapfWMwxixdiDbADbaEktry-0dWBZr-tGf8X4yKTmnqV3PybxRBaHmjN10_KtMNbLXdmIdDzUEEldOjrbKQD-6FYMUfv3cTMNkVvUWKLHelRiz5A85S1_9RQ8-E5U6Gz-e1TWY3sjWi6jDLJDoQA_a1mKa15WkGtl_FwhRQfftKs";

  return (
    <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-base md:px-margin-desktop h-16 z-30 sticky top-0">
      <div className="flex items-center gap-4 md:hidden">
        <button className="text-on-surface p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-h3 text-h3 font-semibold text-primary">VIP Portal</span>
      </div>
      <div className="hidden md:flex items-center space-x-2 font-label-sm text-label-sm text-on-surface-variant">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="material-symbols-outlined text-[14px]">chevron_right</span>}
            {crumb.link ? (
              <a className="hover:text-primary-container" href={crumb.link}>{crumb.label}</a>
            ) : (
              <span className="text-on-surface">{crumb.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
          <img 
            alt="User profile avatar" 
            className="w-full h-full object-cover" 
            src={avatarSrc} 
          />
        </div>
      </div>
    </header>
  );
}
