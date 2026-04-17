import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // EmailJS Keys Integrated
    emailjs.sendForm(
      'service_88i6089', 
      'template_1o3lz0d', 
      form.current, 
      '90dU3IdaLmS4VbxIJ'
    )
    .then(() => {
        setStatus('Message Sent! I will get back to you soon.');
        form.current.reset();
        // 5 seconds baad success message hatane ke liye
        setTimeout(() => setStatus(''), 5000);
    }, (error) => {
        setStatus('Failed to send. Please try again.');
        console.log("EmailJS Error:", error.text);
    });
  };

  return (
    <section id="contact" className="py-32 bg-black px-6 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">
            / Get In Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 italic">
              something real.
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-md mb-10 font-medium">
            I'm currently looking for new opportunities in Indore or Remote. If you have a question or just want to say hi, my inbox is open!
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-2">Email Me</p>
              <p className="text-white font-bold text-xl hover:text-indigo-400 transition-colors cursor-pointer">
                luckysisodiya170@email.com
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              {['Github', 'LinkedIn', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-white/40 hover:text-indigo-500 transition-colors uppercase text-[10px] font-black tracking-[0.2em]">{s}</a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="group">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2 group-focus-within:text-indigo-500 transition-colors">Full Name</label>
              <input 
                type="text" name="user_name" required
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all mt-2"
                placeholder="Lucky Sisodiya"
              />
            </div>
            <div className="group">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2 group-focus-within:text-indigo-500 transition-colors">Email Address</label>
              <input 
                type="email" name="user_email" required
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all mt-2"
                placeholder="hello@example.com"
              />
            </div>
            <div className="group">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2 group-focus-within:text-indigo-500 transition-colors">Your Message</label>
              <textarea 
                name="message" rows="4" required
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all mt-2 resize-none"
                placeholder="What project are you working on?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] disabled:opacity-50"
            >
              {status === 'Sending...' ? 'Processing...' : 'Send Message'}
            </button>

            {status && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-xs font-bold mt-4 ${status.includes('Sent') ? 'text-emerald-400' : 'text-red-400'}`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}