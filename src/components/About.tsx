import { Camera, Heart, View, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Camera, value: '1229+', label: 'Projects Completed' },
    { icon: Heart, value: '28+', label: 'Premium & parmenent Clients' },
    { icon: View, value: '14.6+', label: 'Million views' },
    { icon: Zap, value: '9+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <img
  src="/imgs/aboutmeimg.webp"
  alt="Photographer"
  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"
/>


          </div>

          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              ABOUT <span className="text-red-600">ME</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Experienced  Cinematographer with a robust background in film production, graphic designing, editing, and exemplary customer service.
Proficient in fostering positive client relationships and delivering exceptional outcomes. Adept at managing studio operations for eleven
years, ensuring efficient workflows and client satisfaction. Skilled in public relations, effectively communicating with clients, vendors, and
team members to facilitate smooth project execution.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Proven ability to lead creative teams and collaborate to achieve project objectives on
time and within budget. Committed to excellence in media production and dedicated to enhancing storytelling through captivating visual

narratives.
            </p>

            <a
  href="/Meet_Suthar_Resume.pdf"
  download
  className="inline-block"
>
  <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/50">
    Download Resume
  </button>
</a>



          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-red-600/50">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
