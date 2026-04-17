import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start group">
            <h2 className="text-white font-black tracking-tighter text-2xl mb-1">
              LUCKY<span className="text-indigo-500 group-hover:animate-pulse">.</span>
            </h2>
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2026 Developer Edition
            </p>
          </div>

          {/* Socials & Location */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8">
              <a 
                href="https://github.com/Luckysisodiya170" 
                target="_blank" 
                className="text-white/40 hover:text-white text-[11px] font-black uppercase tracking-widest transition-all hover:scale-110"
              >
                Github
              </a>
              <a 
                href="https://www.linkedin.com/in/lucky-sisodiya-780946306/" 
                target="_blank" 
                className="text-white/40 hover:text-white text-[11px] font-black uppercase tracking-widest transition-all hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-white/10 text-[9px] font-bold uppercase tracking-[0.4em] hidden md:block">
              Indore, India — 22.7196° N, 75.8577° E
            </p>
          </div>

          {/* New & Improved Arrow Button */}
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#6366f1' }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/[0.03] transition-colors group shadow-xl"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white group-hover:text-white transition-transform group-hover:-translate-y-1"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </motion.button>
        </div>

        <div className="mt-16 text-center border-t border-white/[0.03] pt-8">
          <p className="text-white/[0.05] text-[10px] font-black uppercase tracking-[0.6em]">
            Crafted with passion by Lucky Sisodiya
          </p>
        </div>
      </div>
    </footer>
  );
}