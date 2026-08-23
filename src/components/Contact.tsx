import { motion } from "motion/react";
import { content } from "../content";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", content.contact.web3formsToken);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/b596e442-db69-46d8-80bb-20424c031fac.MP4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's create something extraordinary.</h2>
            <p className="text-neutral-400 mb-12 text-lg">
              {content.hero.personalNote}
            </p>

            <div className="space-y-6">
              <a href={`mailto:${content.contact.email}`} className="flex items-center text-neutral-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </div>
                {content.contact.email}
              </a>
              <a href={`tel:${content.contact.phone.replace(/\s+/g, '')}`} className="flex items-center text-neutral-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </div>
                {content.contact.phone}
              </a>
              <a href={`https://${content.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                  <Globe className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </div>
                {content.contact.website}
              </a>
              <div className="flex items-center text-neutral-300 group">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-neutral-400" />
                </div>
                {content.contact.address}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New Submission from Portfolio" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                  placeholder="How can we work together?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-sm text-center">
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-sm text-center">
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
