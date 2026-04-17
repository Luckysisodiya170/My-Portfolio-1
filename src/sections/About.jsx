import { motion } from 'framer-motion';

export default function About() {
  return (
    // min-h-screen add kiya hai taaki section poori screen le
    // py-40 padding thodi aur badha di hai spacing ke liye
    <section id="about" className="relative min-h-screen flex items-center py-40 bg-black px-6 border-t border-white/5">
      
      {/* Background Decorative Element (Optional: for extra depth) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Side: The Honest Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <h2 className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">
              / About Me
            </h2>
          </div>
          
          <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Learning, Building, <br /> 
            <span className="opacity-30">& Growing.</span>
          </h3>
          
          <div className="space-y-6 text-white/60 text-lg leading-relaxed max-w-xl font-medium">
            <p>
              I’m <span className="text-white">Lucky Sisodiya</span>, a developer based in Indore. 
              I don't claim to know everything, but I am passionate about solving problems 
              through code and building clean web applications.
            </p>
            <p>
              Currently, I'm gaining hands-on experience as a MERN Stack Intern at <span className="text-white">Blackcube Solutions</span>. 
              Working on real-world projects like CMS platforms and service-based sites has taught 
              me how to bridge the gap between design and functionality.
            </p>
            <p className="text-sm border-l-2 border-indigo-500 pl-4 py-1 italic">
              "Focusing on the MERN stack to build tools that make life easier."
            </p>
          </div>
        </motion.div>

        {/* Right Side: The Clean Summary Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group p-10 md:p-14 bg-[#080808] border border-white/10 rounded-[3rem] transition-all duration-500 hover:border-indigo-500/30 shadow-2xl">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-indigo-500/5 blur-[60px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <h4 className="relative z-10 text-white font-bold text-xl mb-10 border-b border-white/5 pb-4">
              Current Status
            </h4>
            
            <ul className="relative z-10 space-y-10">
              <li className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-mono text-xs">01</div>
                <div>
                  <p className="text-white font-bold text-base tracking-tight">Internship</p>
                  <p className="text-white/40 text-sm mt-1">Full-Stack Intern at Blackcube Solutions</p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-mono text-xs">02</div>
                <div>
                  <p className="text-white font-bold text-base tracking-tight">Current Focus</p>
                  <p className="text-white/40 text-sm mt-1">Mastering MongoDB, Express, React, and Node.js</p>
                </div>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-mono text-xs">03</div>
                <div>
                  <p className="text-white font-bold text-base tracking-tight">Location</p>
                  <p className="text-white/40 text-sm mt-1">Living and Developing in Indore, MP</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}