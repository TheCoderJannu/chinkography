import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message?: string }>({ type: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({ type: 'error', message: 'Email service is not configured. Add EmailJS env vars.' });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: import.meta.env.VITE_TO_EMAIL || 'chinkography@gmail.com',
    };

    try {
      // Debug: show what we're about to send (don't log sensitive keys)
      console.log('EmailJS send', { serviceId, templateId, to: templateParams.to_email, templateParams });

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS response', response);

      setStatus({ type: 'success', message: `Message sent — thank you! (status ${response?.status ?? 'unknown'})` });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error', err);
      const errMsg = err?.text || err?.message || (err?.status ? `Status ${err.status}` : 'Failed to send message.');
      setStatus({ type: 'error', message: errMsg });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', url: 'chinkography@gmail.com', value: 'chinkography@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9157130323' },
    { icon: MapPin, label: 'Location', value: 'Ahmedabad , India' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/chinkography/' },
    { icon: Youtube, label: 'Youtube', url: 'https://www.youtube.com/channel/UC0Gf4dhpdMIIwuYUVgulUTQ/about' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://in.linkedin.com/in/chinkography-602972170' },
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/suthar.meet.9/' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-red-950 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            LET'S <span className="text-red-500">CONNECT</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
You tell Me What You need, and i'll tell You how to Execute it Creatively          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer"
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-red-600/50">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold text-lg">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/50"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          { <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-red-600 transition-all duration-300 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-red-600 transition-all duration-300 placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-red-600 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-red-600 transition-all duration-300 resize-none placeholder-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-4 bg-red-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/50 flex items-center justify-center gap-2 ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-red-700'}`}
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-5 h-5" />
            </button>

            {status.type === 'success' && (
              <p className="text-green-400 text-sm mt-3">{status.message}</p>
            )}
            {status.type === 'error' && (
              <p className="text-red-400 text-sm mt-3">{status.message}</p>
            )}
          </form> }
        </div>
      </div>

      <div className="text-center mt-20 pt-12 border-t border-gray-800">
        <p className="text-gray-400">
          © 2019 CHINKOGRAPHY. All rights reserved. Crafted with passion.
        </p>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
                                             