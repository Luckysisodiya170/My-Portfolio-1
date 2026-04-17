import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "Frontend Stuff",
      skills: ["React.js", "Tailwind", "MUI", "Figma"],
      description: "Building responsive, high-performance web interfaces with pixel perfection[cite: 1, 3].",
      icon: "01",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
    },
    {
      title: "Backend & Server",
      skills: ["Node.js", "Express", "REST APIs", "CMS"],
      description: "Designing scalable server logic and custom CMS solutions for dynamic apps[cite: 1, 3].",
      icon: "02",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]"
    },
    {
      title: "Databases & Logic",
      skills: ["MongoDB", "SQL", "Sequelize", "C++"],
      description: "Architecting robust MySQL schemas and optimizing data flows for professional projects[cite: 1, 4, 3].",
      icon: "03",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.5)]"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Vercel", "Render", "Railway"],
      description: "Managing version control and deploying corporate systems using modern CI/CD tools[cite: 1, 3].",
      icon: "04",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.5)]"
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 bg-black px-6 overflow-hidden flex flex-col justify-center">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-indigo-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
              / Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Tech I <span className="opacity-20 italic underline decoration-indigo-500/30">Master.</span>
            </h3>
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-[#080808] border border-white/[0.03] p-10 rounded-[2rem] transition-all duration-500 hover:bg-[#0c0c0c] hover:border-white/10 min-h-[200px] flex flex-col justify-between ${cat.glow}`}
            >
              <span className="absolute top-8 right-10 text-[10px] font-mono text-white/5 group-hover:text-indigo-500 transition-colors">
                //{cat.icon}
              </span>

              <div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                  {cat.title}
                </h4>
                
                <p className="text-white/40 text-sm mb-6 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white/30 bg-white/[0.02] rounded-full border border-white/[0.05] group-hover:text-white group-hover:border-indigo-500/50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-10 opacity-30 hover:opacity-100 transition-opacity">
          {["Vercel", "Render", "Railway", "Git", "Postman"].map((tool) => (
            <span key={tool} className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}