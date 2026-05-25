import Image from "next/image";

export const metadata = {
  title: "Film — Sam Arias",
  description:
    "Analog photography by Sam Arias. Grain is good. Exploring composition and light through the limitations of film.",
};

// ─── Gallery photos ───────────────────────────────────────────────────────────
const photos = [
  { src: "/assets/film/cinematic-01.jpg", alt: "Cinematic film frame", series: "Cinematic", aspect: "aspect-[16/9]" },
  { src: "/assets/film/street-01.jpg",    alt: "Street photograph",    series: "Street",    aspect: "aspect-[3/2]" },
  { src: "/assets/film/portrait-02.jpg",  alt: "Portrait on film",     series: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/assets/film/liminal-01.jpg",   alt: "Liminal space",        series: "Liminal",   aspect: "aspect-[3/2]" },
  { src: "/assets/film/culture-01.jpg",   alt: "Culture Inc.",         series: "Culture Inc.", aspect: "aspect-[3/2]" },
  { src: "/assets/film/portrait-01.jpg",  alt: "Portrait on film",     series: "Portraits", aspect: "aspect-[3/2]" },
  { src: "/assets/film/cinematic-02.jpg", alt: "Cinematic film frame", series: "Cinematic", aspect: "aspect-[3/2]" },
  { src: "/assets/film/liminal-02.jpg",   alt: "Liminal space",        series: "Liminal",   aspect: "aspect-[3/2]" },
  { src: "/assets/film/street-02.jpg",    alt: "Street photograph",    series: "Street",    aspect: "aspect-[3/2]" },
  { src: "/assets/film/culture-02.jpg",   alt: "Culture Inc.",         series: "Culture Inc.", aspect: "aspect-[3/2]" },
  { src: "/assets/film/studio-01.jpg",    alt: "Studio shot",          series: "Studio",    aspect: "aspect-[3/2]" },
  { src: "/assets/film/valley-01.jpg",    alt: "Valley Girls",         series: "Valley Girls", aspect: "aspect-[3/2]" },
];

// ─── Photo Card ───────────────────────────────────────────────────────────────
function PhotoCard({ photo }) {
  return (
    <figure className={`${photo.aspect} relative overflow-hidden group cursor-pointer`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Series label on hover */}
      <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] text-green-400 tracking-widest uppercase">
          {photo.series}
        </span>
      </figcaption>
    </figure>
  );
}

// ─── Film Page ────────────────────────────────────────────────────────────────
export default function FilmPage() {
  return (
    <div className="bg-film-bg min-h-screen film-grain">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
        <Image
          src="/assets/film/hero.jpg"
          alt="Film hero — cinematic wide shot"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hero text */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-28 w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
            Grain is good.
          </h1>
        </div>
      </section>

      {/* ── Why I Shoot Film ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-green-700 mb-6">
            Why I shoot film
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            I began studying analog photography as a cinematic exercise to help
            me develop an eye for composition and light. Shooting film introduces
            a set of creative limitations that create a condition of scarcity
            that I find is absent in digital photography. A limit of 36 frames
            per roll makes me much more selective of my compositions. The light
            sensitivity of the film is hardcoded, meaning the availability of
            light becomes a more careful consideration.
          </p>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="text-xs font-bold tracking-widest uppercase text-green-700 mb-8">
          Selected Shots
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <PhotoCard key={i} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  );
}
