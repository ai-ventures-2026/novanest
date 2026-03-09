import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────
   Page Hero
───────────────────────────────────────── */
function PageHero() {
  return (
    <section className="page-hero" aria-label="About us introduction">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="page-hero-inner">
        <span className="section-label">Our Story</span>
        <h1>
          We Believe Your Home Should <span className="gold">Work for You</span>
        </h1>
        <div className="divider divider-center" aria-hidden="true" />
        <p>
          Founded in 2012, NovaNest was born from a simple belief: that technology
          should simplify life, not complicate it. We've spent over a decade
          perfecting the art of intelligent living.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Story / Mission Section
───────────────────────────────────────── */
function Story() {
  return (
    <section className="section story-section" aria-labelledby="story-heading">
      <div className="container">
        <div className="story-grid">

          {/* Visual card */}
          <div className="story-visual" aria-hidden="true">
            <div className="story-card-visual">
              <span className="story-icon-large">🏠</span>
              <div className="story-card-title">NovaNest HQ</div>
              <div className="story-card-sub">London, United Kingdom · Est. 2012</div>
            </div>
            <div className="story-badge-float">
              <span className="num">50K+</span>
              <span className="lbl">Homes Served</span>
            </div>
          </div>

          {/* Content */}
          <div className="story-content">
            <span className="section-label">Our Mission</span>
            <h2 id="story-heading" className="section-title">
              Technology That Feels <span className="gold">Human</span>
            </h2>
            <div className="divider" aria-hidden="true" />

            <p>
              NovaNest started in a small London garage when two friends — a
              software engineer and an electrical architect — grew frustrated with
              the complexity of smart home products that promised simplicity but
              delivered headaches. They knew there had to be a better way.
            </p>

            <p>
              Twelve years later, NovaNest has grown into the UK's most trusted
              premium smart home brand, serving over 50,000 households across
              Europe. Our award-winning platform unifies every device, system, and
              service under one beautifully designed ecosystem.
            </p>

            <p>
              We remain obsessively focused on one thing: creating technology that
              becomes invisible — so you experience the comfort, security, and
              efficiency it brings without thinking about how it works.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Start Your Journey ›
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Stats
───────────────────────────────────────── */
const stats = [
  { number: '50K+', label: 'Homes Connected' },
  { number: '12+',  label: 'Years of Excellence' },
  { number: '99%',  label: 'Customer Satisfaction' },
  { number: '24/7', label: 'Expert Support' },
]

function Stats() {
  return (
    <section className="section-sm stats-section" aria-label="Key statistics">
      <div className="container">
        <dl className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <dt className="stat-number">{s.number}</dt>
              <dd className="stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Values Section
───────────────────────────────────────── */
const values = [
  {
    icon: '💡',
    title: 'Innovation First',
    desc: 'We invest heavily in R&D to stay at the frontier of smart home technology. Every product and update is built around solving real problems in more intelligent ways.',
  },
  {
    icon: '🤝',
    title: 'Customer Obsession',
    desc: "Our customers are at the heart of everything we do. From free consultations to lifetime support, we're with you every step of the journey.",
  },
  {
    icon: '🔒',
    title: 'Security & Privacy',
    desc: 'Your data is yours. We employ military-grade encryption and strict data minimisation principles. We never sell your data — ever.',
  },
  {
    icon: '🌿',
    title: 'Sustainability',
    desc: 'Smart homes save energy. We design our systems to maximise efficiency, reduce waste, and make sustainable living effortless for every homeowner.',
  },
  {
    icon: '⚙️',
    title: 'Reliability',
    desc: 'Our platform boasts 99.98% uptime. Redundant systems, automatic failsafes, and proactive monitoring ensure your home always works as intended.',
  },
  {
    icon: '🌍',
    title: 'Global Thinking',
    desc: 'Serving customers across 18 countries, we design for diverse homes, climates, and cultures — bringing world-class smart living to every doorstep.',
  },
]

function Values() {
  return (
    <section className="section values-section" aria-labelledby="values-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label">What Drives Us</span>
          <h2 id="values-heading" className="section-title">
            Our Core <span className="gold">Values</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
          <p className="section-subtitle text-center">
            These aren't just words on a wall. Our values guide every decision,
            product, and interaction we have.
          </p>
        </div>

        <div className="values-grid">
          {values.map(v => (
            <article key={v.title} className="value-card">
              <div className="value-icon" aria-hidden="true">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Team Section
───────────────────────────────────────── */
const team = [
  {
    name: 'Alexander Holt',
    role: 'Chief Executive Officer & Co-Founder',
    bio: 'Alex brings 20+ years of experience in consumer electronics and SaaS. Former VP at Siemens Smart Infrastructure, he co-founded NovaNest with a vision to make premium smart home technology accessible to everyone.',
    emoji: '👨‍💼',
    bgClass: 'team-avatar-bg-1',
  },
  {
    name: 'Dr. Mei-Ling Chen',
    role: 'Chief Technology Officer & Co-Founder',
    bio: 'A PhD in AI and distributed systems from Imperial College London, Mei-Ling leads NovaNest\'s engineering and research teams. She holds 14 patents in home automation and machine learning.',
    emoji: '👩‍💻',
    bgClass: 'team-avatar-bg-2',
  },
  {
    name: 'Marcus Osei',
    role: 'Chief Design Officer',
    bio: 'Previously at Apple and Dyson, Marcus ensures every NovaNest product is as beautiful as it is functional. His human-centred design philosophy has won multiple Red Dot and iF Design Awards.',
    emoji: '🎨',
    bgClass: 'team-avatar-bg-3',
  },
]

function Team() {
  return (
    <section className="section team-section" aria-labelledby="team-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label">The People Behind NovaNest</span>
          <h2 id="team-heading" className="section-title">
            Meet Our <span className="gold">Leadership Team</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
          <p className="section-subtitle text-center">
            World-class engineers, designers, and innovators united by a shared
            passion for making homes genuinely smarter.
          </p>
        </div>

        <div className="team-grid">
          {team.map(member => (
            <article key={member.name} className="team-card">
              <div className={`team-avatar-area ${member.bgClass}`} aria-hidden="true">
                <div className="team-avatar-circle">{member.emoji}</div>
              </div>
              <div className="team-card-body">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Page Export
───────────────────────────────────────── */
export default function About() {
  return (
    <>
      <PageHero />
      <Story />
      <Stats />
      <Values />
      <Team />
    </>
  )
}
