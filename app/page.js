import Image from "next/image";

// ─── Section: Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] bg-brand-blue flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full pt-14">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center py-16 md:py-24">
          {/* Left: Big name */}
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
              Hi, I&apos;m Sam.
            </h1>
          </div>

          {/* Right: Bio blurb */}
          <div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
              UC Berkeley Business grad working at the intersection of tech and
              finance. Currently an Account Manager &amp; Implementation
              Specialist at{" "}
              <span className="font-semibold">Allocate</span>, helping UHNW and
              RIA clients build and manage private markets portfolios. Also the
              GM of <span className="font-semibold">P.H.0</span>, a NYC-based
              Chinese Cybermetal Silkpunk band — fresh off SXSW 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reusable Role Card ────────────────────────────────────────────────────────
function RoleCard({ title, org, orgHref, description }) {
  return (
    <article className="role-card group">
      <div className="mb-2">
        <h3 className="text-base font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        {orgHref ? (
          <a
            href={orgHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            {org} ↗
          </a>
        ) : (
          <span className="text-sm font-semibold text-brand-blue">{org}</span>
        )}
      </div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </article>
  );
}

// ─── Section: What I Do ───────────────────────────────────────────────────────
function WhatIDo() {
  const roles = [
    {
      title: "Account Manager & Implementation Specialist",
      org: "Allocate",
      description:
        "I own the full onboarding lifecycle for UHNW and RIA clients — orchestrating Product, Engineering, Ops, and GP resources to activate private-markets portfolios. I build the playbooks, manage the data, and serve as the bridge between clients and the platform.",
    },
    {
      title: "Mentor",
      org: "iMentor NYC",
      description:
        "With iMentor, I check in weekly with my mentee with the goal of making sure he\u2019s prepared for college application season.",
    },
    {
      title: "General Manager",
      org: "P.H.0",
      orgHref: "https://www.ph0silkpunk.com",
      description:
        "I manage P.H.0, a NYC-based Chinese Cybermetal Silkpunk band inspired by science fiction writer Ken Liu. We played three stages at SXSW 2026, landed in the Austin Chronicle\u2019s top 40 bands out of 1,000+, and were named one of SXSW\u2019s top 5 new artists by their official Instagram.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-title">What I Do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {roles.map((role) => (
            <RoleCard key={role.title} {...role} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: What I've Done ──────────────────────────────────────────────────
function WhatIveDone() {
  const roles = [
    {
      title: "Consultant",
      org: "Deloitte",
      description:
        "Four years of cross-industry consulting spanning Infrastructure, Hyperscalers, AI, Telecom, Media, Compliance, and Finance. I PM\u2019d alliances with major cloud providers, built a $1B+ pipeline across 5 continents, and led compliance and communications engagements for global enterprises.",
    },
    {
      title: "Corporate Strategy Intern",
      org: "eTip.io",
      description:
        "eTip.io is an app-less, cashless tipping platform for service industry professionals. I fine-tuned a go-to-market strategy for early adopters in the beta stage of the product.",
    },
    {
      title: "Banker",
      org: "JP Morgan Chase",
      description:
        "At Chase, I focused my energy on developing Financial Inclusion efforts at my branch and pushing similar efforts across branches in underbanked and unbanked markets. At my branch, I developed and led financial literacy workshops for non-native English speakers after discovering that first generation immigrant families were severely underserved by our branch despite making up 51.9% of our market.",
    },
    {
      title: "Business Lead",
      org: "Berkeley Formula Racing",
      description:
        "I worked on leveraging relationships with our corporate sponsors to create learning and professional opportunities for the team. I also worked on ongoing operations like budgeting and media so the engineers could focus on engineering.",
    },
    {
      title: "Capital Management Director",
      org: "Berkeley Debate Society",
      description:
        "Similarly to Berkeley Formula, I owned the budget and leveraged it to sustain and grow activities related to debate on campus. Balancing a budget with a group of individuals who live for the thrill of defending contentious points can prove to be quite difficult.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-title">What I&apos;ve Done</p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {roles.map((role) => (
            <RoleCard key={role.title} {...role} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: When I've Failed ────────────────────────────────────────────────
function WhenIveFailed() {
  const stories = [
    {
      title: "The Disagree to Agree Podcast",
      description:
        "In late 2019, my best friend and I began working on creating a podcast that covered political news in a digestible way featuring takes from both sides of the aisle. The goal was to create an engaging platform for news while eliminating the inherent bias that exists in partisan news sources today. We made ten episodes before Covid forced us to go remote. Recording remotely didn\u2019t work well for us, so we decided to put it on pause until we could work in a shared space again; little did we know, it would be over a year before that could happen. As a result, the podcast died just as we hit the 1,000 listener mark.",
    },
    {
      title: "Resonance Marketing Solutions",
      description:
        "During my sophomore year in college, I tried to start a marketing consulting group for small businesses in the service industry. Cultivating a pipeline of coffee shops and restaurants that were willing to put their faith and money behind a student without any measurable credentials proved to be quite difficult. My main method of prospecting was canvassing my local town centers. This was an unsustainable strategy post the summer months when I had to balance my responsibilities as a student and as an executive in existing organizations. After a discouraging summer produced one proposal that fell through, the project slowly fell into obscurity. It was a fantastic learning experience, and in hindsight, it was a great initiative and a productive way to spend a summer.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-title">When I&apos;ve Failed</p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {stories.map((story) => (
            <article key={story.title} className="role-card">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                {story.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {story.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* NYC Skyline Image Placeholder */}
      {/* TODO: Replace with actual NYC skyline image at /assets/nyc-skyline.jpg */}
      <div
        className="w-full h-40 md:h-56 bg-gradient-to-b from-gray-800 to-gray-900 flex items-end justify-center pb-6 relative overflow-hidden"
        aria-label="NYC skyline placeholder"
        role="img"
      >
        {/* Stylized skyline silhouette via CSS */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-px opacity-30">
          {[20, 35, 28, 55, 40, 65, 45, 70, 50, 42, 60, 48, 35, 52, 38, 44, 30, 58, 36, 48].map(
            (h, i) => (
              <div
                key={i}
                className="bg-gray-400 w-4 md:w-6 flex-shrink-0"
                style={{ height: `${h * 1.4}px` }}
              />
            )
          )}
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="font-medium text-white">© Sam Stuff</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="tel:8185733543"
              className="hover:text-white transition-colors"
            >
              (818) 573-3543
            </a>
            <a
              href="mailto:samarias@berkeley.edu"
              className="hover:text-white transition-colors"
            >
              samarias@berkeley.edu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <WhatIveDone />
      <WhenIveFailed />
      <Footer />
    </>
  );
}
