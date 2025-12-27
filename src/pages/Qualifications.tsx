export default function Qualifications() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white pt-28">

      {/* TITLE */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
          <span className="text-red-600">QUALIFICATIONS</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
      </div>

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 items-center gap-10 px-8 md:px-16 mb-24">
        <img
          src="/imgs/qualification-1.webp"
          alt="Experience"
          className="w-full max-h-[380px] object-cover rounded-3xl"
        />

        <div className="flex items-center py-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Hands-on experience in photography and filmmaking, working with
              brands, artists, and creators to craft impactful visual stories
              across multiple platforms.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 items-center gap-10 px-8 md:px-16 mb-24">
        <div className="flex items-center py-10 order-2 md:order-1">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Creative Direction
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Strong expertise in directing shoots, planning visual narratives,
              and delivering cinematic content that aligns with brand identity
              and emotion.
            </p>
          </div>
        </div>

        <img
          src="/imgs/qualification-2.PNG"
          alt="Creative Direction"
          className="w-full max-h-[380px] object-cover rounded-3xl order-1 md:order-2"
        />
      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 items-center gap-10 px-8 md:px-16 mb-24">
        <img
          src="/imgs/qualification-3 (2).JPG"
          alt="Visual Storytelling"
          className="w-full max-h-[380px] object-cover rounded-3xl"
        />

        <div className="flex items-center py-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Visual Storytelling
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Focused on storytelling through powerful visuals — blending
              lighting, composition, and motion to create meaningful,
              emotionally engaging content.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
