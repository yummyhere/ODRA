import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#C8484A] text-white text-center py-2 px-4 text-[0.78rem] font-bold tracking-[0.08em] uppercase border-b border-[#a83638] shadow-sm">
      <div className="max-w-[1240px] mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>RETAIL DELI COUNTER & WHOLESALE MEAT</span>
        <span className="hidden sm:inline opacity-70">·</span>
        <span>PICKUP AT 2395 CAWTHRA RD, MISSISSAUGA</span>
        <span className="hidden md:inline opacity-70">·</span>
        <a 
          href="tel:+19058963666" 
          className="underline decoration-white/40 hover:decoration-white font-extrabold tracking-wider transition-colors ml-1"
        >
          CALL (905) 896-3666
        </a>
      </div>
    </div>
  );
};
