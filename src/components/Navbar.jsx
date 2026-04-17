import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/90 backdrop-blur-xl border-b border-white/[0.08] z-50 px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        
        <h1 className="text-2xl font-black tracking-tighter uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
         PortFolio
        </h1>

        <div className="flex items-center gap-12">
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-all uppercase relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="relative group p-[1px] rounded-full overflow-hidden block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow group-hover:animate-none"></div>
            <div className="relative px-6 py-2 bg-black rounded-full transition-all group-hover:bg-transparent">
              <span className="text-[11px] font-black uppercase tracking-widest text-white">
                Let's Talk
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}