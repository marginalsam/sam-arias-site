// TODO: populate with band content — shows, music releases, press photos, etc.
// Note: This page was previously 404 on Squarespace. Built as a clean placeholder.

export const metadata = {
  title: "P.H.0 — Sam Arias",
  description:
    "P.H.0 — NYC-based Chinese Cybermetal Silkpunk band. SXSW 2026 top 5 new artists. Austin Chronicle top 40 out of 1,000+ bands.",
};

// ─── Placeholder section wrapper ─────────────────────────────────────────────
function PlaceholderSection({ label, children }) {
  return (
    <div className="border border-ph0-accent/20 rounded-sm p-6 md:p-8 relative">
      <span className="absolute -top-2.5 left-4 bg-ph0-bg px-2 font-mono text-xs text-ph0-accent/50 tracking-widest uppercase">
        {label}
      </span>
      {children}
    </div>
  );
}

// ─── P.H.0 Page ──────────────────────────────────────────────────────────────
export default function Ph0Page() {
  return (
    <div className="bg-ph0-bg min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-14">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,160,96,0.05)_0%,transparent_70%)]" />

        {/* TODO: Replace with actual band photo or artwork as background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <p className="font-mono text-xs text-ph0-accent tracking-widest rotate-0 text-center leading-8">
            // TODO: hero background — band photo or album artwork
            <br />
            /public/assets/ph0/hero-bg.jpg
          </p>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-3xl">
          {/* Band name */}
          <h1 className="text-8xl md:text-[10rem] lg:text-[13rem] font-black text-white leading-none tracking-tighter mb-6 select-none">
            P.H.0
          </h1>

          {/* Divider */}
          <div className="w-24 h-px bg-ph0-accent mx-auto mb-6" />

          {/* Genre tag */}
          <p className="text-ph0-accent font-medium tracking-[0.3em] uppercase text-sm md:text-base">
            New York Based Silk-Punk
          </p>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Taking the world of science fiction writer{" "}
            <span className="text-ph0-accent-light font-medium">Ken Liu</span>{" "}
            and giving it a soundtrack.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
            scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* ── About ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <p className="text-xs font-bold tracking-widest uppercase text-ph0-accent/60 mb-8">
          About
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
              P.H.0 is a NYC-based Chinese Cybermetal Silkpunk band that takes
              the world of science fiction writer Ken Liu and gives it a
              soundtrack.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We played three stages at SXSW 2026, landed in the{" "}
              <a
                href="https://www.austinchronicle.com/music/40-musical-acts-to-see-at-sxsw-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ph0-accent-light hover:underline"
              >
                Austin Chronicle&apos;s top 40 bands
              </a>{" "}
              out of 1,000+, and were named one of SXSW&apos;s top 5 new
              artists by their official Instagram.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We came straight from a festival in Boston the weekend prior, and
              we&apos;re back in NYC building toward the world stage.
            </p>
          </div>

          {/* TODO: Replace with actual band photo */}
          <div className="aspect-[4/3] bg-[#111111] border border-ph0-accent/10 relative flex items-center justify-center">
            <div className="text-center opacity-30">
              <div className="w-12 h-12 border border-ph0-accent/40 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-ph0-accent text-xl">📷</span>
              </div>
              <p className="font-mono text-xs text-ph0-accent/50 tracking-widest">
                // TODO: band photo
              </p>
              <p className="font-mono text-xs text-gray-600 mt-1">
                /public/assets/ph0/band-photo.jpg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shows / Events ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
        <p className="text-xs font-bold tracking-widest uppercase text-ph0-accent/60 mb-8">
          Shows &amp; Events
        </p>

        <PlaceholderSection label="upcoming shows">
          <div className="space-y-6">
            {/* TODO: Replace with actual show data */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 border-b border-white/5 pb-6 last:border-0 last:pb-0"
              >
                <div className="font-mono text-ph0-accent text-sm w-28 shrink-0 opacity-40">
                  TBD — 202X
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-white/5 rounded w-3/4 mb-2" />
                  <div className="h-2.5 bg-white/5 rounded w-1/2" />
                </div>
                <div className="font-mono text-xs text-gray-600 whitespace-nowrap">
                  // TODO
                </div>
              </div>
            ))}
            <p className="font-mono text-xs text-gray-700 pt-2">
              // TODO: populate with actual show dates, venues, and ticket links
            </p>
          </div>
        </PlaceholderSection>
      </section>

      {/* ── Music / Releases ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
        <p className="text-xs font-bold tracking-widest uppercase text-ph0-accent/60 mb-8">
          Music &amp; Releases
        </p>

        <PlaceholderSection label="discography">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-[#111] border border-white/5 flex flex-col items-center justify-center gap-2 p-4"
              >
                <div className="w-10 h-10 rounded-full border border-ph0-accent/20 flex items-center justify-center opacity-30">
                  <span className="text-ph0-accent text-sm">♪</span>
                </div>
                <p className="font-mono text-xs text-gray-700 text-center">
                  // TODO: album art
                </p>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-gray-700 mt-6">
            // TODO: populate with Spotify, Apple Music, Bandcamp links and
            release artwork
          </p>
        </PlaceholderSection>
      </section>

      {/* ── Contact ── */}
      <section className="max-w-5xl mx-auto px-6 pb-24 md:pb-32">
        <p className="text-xs font-bold tracking-widest uppercase text-ph0-accent/60 mb-8">
          Contact
        </p>

        <div className="border border-ph0-accent/20 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bookings &amp; Inquiries
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            For booking requests, press inquiries, or general questions about
            P.H.0.
          </p>
          <a
            href="mailto:p.h.0.cyberpunk@gmail.com"
            className="inline-block border border-ph0-accent text-ph0-accent hover:bg-ph0-accent hover:text-black transition-all duration-200 px-8 py-3 font-medium tracking-wide text-sm"
          >
            Get in Touch
          </a>
          <div className="flex items-center justify-center gap-8 mt-8">
            <a
              href="https://www.instagram.com/ph0.silkpunk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-ph0-accent transition-colors tracking-widest uppercase"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.youtube.com/watch?v=rEPV2p71U4E"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-ph0-accent transition-colors tracking-widest uppercase"
            >
              YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="font-mono text-xs text-gray-700 tracking-widest">
          P.H.0 — NEW YORK
        </p>
      </footer>
    </div>
  );
}
