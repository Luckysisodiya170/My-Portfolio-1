import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      title: "TRICKSY",
      category: "Service Booking & CMS",
      desc: "A full-scale platform for home maintenance services. Built a custom Admin Panel to manage bookings and services efficiently.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "#", 
      image: "/tricksy-preview.png"
    },
    {
      title: "SHIPZY",
      category: "Multi-Vendor Delivery UI",
      desc: "Developed a complex delivery ecosystem featuring vendor dashboards and OTP-based customer authentication flow.",
      tech: ["React", "Material UI", "Express", "Context API"],
       github: "https://github.com/Luckysisodiya170", // GitHub link add kiya
      link: "#",
      image: "/shipzy-preview.png"
    },
    {
      title: "Employee Manager",
      category: "Corporate Management System",
      desc: "Built a professional interface for managing organizational workflows with advanced filtering and secure data handling.",
      tech: ["React", "MUI", "Git", "REST API"],
      link: "#",
      image: "/employee-preview.png"
    },
    {
  title: "Medical Admin",
  category: "Medical Store Admin Panel",
  desc: "Developed a comprehensive healthcare management dashboard to handle medicines, user records, and orders. Features real-time stock indicators and JWT-secured admin access.",
  tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
  link: "#", 
  image: "/medical-store-preview.png" 
},
  ];

  return (
    <section id="projects" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-500 font-mono text-xs tracking-[0.5em] uppercase mb-4"
          >
            / Selected Works
          </motion.p>
          <h2 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase">
            Featured <br /> <span className="opacity-20">Projects.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {projectList.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <span className="text-indigo-400 font-mono text-sm tracking-widest">{project.category}</span>
                <h3 className="text-4xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                  {project.desc}
                </p>
                 <div className="flex gap-6 pt-8">
                  {/* Real Link Button */}
                  <a href={project.link} className="text-white font-bold group flex items-center gap-2">
                    Live Demo <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  
                  {/* GitHub Source Button */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-indigo-400 font-bold flex items-center gap-2 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    Source Code
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1 text-[10px] font-bold text-white/40 border border-white/10 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-8">
                  <a href={project.link} className="inline-flex items-center gap-2 text-white font-bold group">
                    View Case Study
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full group">
                <div className="relative aspect-video bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-indigo-500/30">
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  
                  {/* Actual Image Tag */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none'; 
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-4xl italic uppercase tracking-tighter -z-10">
                    {project.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}