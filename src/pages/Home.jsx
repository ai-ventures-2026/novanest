import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Background decoration */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
      </div>

      <div className="hero-inner">
        {/* Left – content */}
        <div className="hero-content">
          <div className="hero-badge" aria-label="New: AI-Powered Home OS">
            <span className="hero-badge-dot" aria-hidden="true" />
            New: AI-Powered Home OS v3.0
          </div>

          <h1 className="hero-title">
            Live <span className="highlight">Smarter.</span><br />
            Live <span className="highlight">Better.</span>
          </h1>

          <p className="hero-subtitle">
            NovaNest transforms your living space into an intelligent, responsive
            sanctuary. Seamless automation, unparalleled security, and effortless
            comfort — all at your fingertips.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Solutions ›
            </Link>
            <Link to="/about" className="btn btn-outline">
              Our Story
            </Link>
          </div>

          <div className="hero-stats" aria-label="Key statistics">
            <div className="hero-stat">
              <div className="hero-stat-value">50<span>K+</span></div>
              <div className="hero-stat-label">Homes Connected</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">99<span>%</span></div>
              <div className="hero-stat-label">Satisfaction Rate</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">12<span>+</span></div>
              <div className="hero-stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Right – animated visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="smart-home-visual">
            <div className="smart-home-ring ring-1" />
            <div className="smart-home-ring ring-2" />
            <div className="smart-home-ring ring-3" />

            {/* Floating device dots */}
            <div className="smart-home-dot" title="Lighting">💡</div>
            <div className="smart-home-dot" title="Security">🔐</div>
            <div className="smart-home-dot" title="Climate">🌡️</div>
            <div className="smart-home-dot" title="Audio">🎵</div>

            {/* Core */}
            <div className="smart-home-core">
              <span className="smart-home-core-icon">⌂</span>
              <span className="smart-home-core-text">NovaNest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Features Section
───────────────────────────────────────── */
const features = [
  {
    icon: '🎛️',
    title: 'Smart Control Hub',
    desc: 'Command every device in your home from a single, intuitive dashboard. Voice control, app management, and intelligent automation work together seamlessly.',
    points: ['Universal device compatibility', 'Voice & touch control', 'Real-time status monitoring'],
  },
  {
    icon: '⚡',
    title: 'Energy Efficiency',
    desc: 'Intelligent energy management learns your habits and optimises consumption automatically. Cut bills by up to 40% while reducing your carbon footprint.',
    points: ['AI-powered scheduling', 'Live energy analytics', 'Solar integration ready'],
  },
  {
    icon: '🛡️',
    title: 'Advanced Security',
    desc: 'Military-grade encryption and 24/7 AI monitoring protect your home and family. Real-time alerts, smart locks, and facial recognition keep you safe.',
    points: ['AI intrusion detection', 'Encrypted video feeds', 'Smart lock integration'],
  },
]

function Features() {
  return (
    <section className="section features-section" id="features" aria-labelledby="features-heading">
      <div className="container">
        <div className="features-header text-center">
          <span className="section-label">Why NovaNest</span>
          <h2 id="features-heading" className="section-title">
            Intelligence Built Into <span className="gold">Every Layer</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
          <p className="section-subtitle text-center">
            Our ecosystem brings together hardware, software, and AI to deliver a
            living experience that adapts to you — not the other way around.
          </p>
        </div>

        <div className="features-grid">
          {features.map(f => (
            <article key={f.title} className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle icon-circle-lg" aria-hidden="true">{f.icon}</div>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {f.points.map(pt => (
                  <li key={pt} className="service-feature-item">{pt}</li>
                ))}
              </ul>
              <Link to="/services" className="feature-link">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   How It Works Section
───────────────────────────────────────── */
const steps = [
  {
    num: '01',
    icon: '📋',
    title: 'Free Consultation',
    desc: 'Schedule a no-obligation consultation with our smart home experts. We assess your space, understand your lifestyle, and design a custom automation plan tailored to your needs.',
  },
  {
    num: '02',
    icon: '🔧',
    title: 'Expert Installation',
    desc: 'Our certified technicians handle everything from wiring to software configuration. Clean, efficient installation with zero disruption to your daily life — most setups complete in a single day.',
  },
  {
    num: '03',
    icon: '✨',
    title: 'Live Smarter',
    desc: 'Wake up to an intelligent home that anticipates your every need. Your system continuously learns and optimises, getting smarter with every passing day. 24/7 support always on standby.',
  },
]

function HowItWorks() {
  return (
    <section className="section how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label">The Process</span>
          <h2 id="how-heading" className="section-title">
            Up and Running in <span className="gold">Three Simple Steps</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
          <p className="section-subtitle text-center">
            Getting started with NovaNest is effortless. From consultation to a
            fully automated home, our streamlined process has you covered.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map(s => (
            <div key={s.num} className="step-card">
              <div className="step-number" aria-label={`Step ${s.num}`}>{s.num}</div>
              <div className="step-icon-row" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Testimonials Section
───────────────────────────────────────── */
const testimonials = [
  {
    stars: 5,
    text: "NovaNest completely transformed our home. The system is incredibly intuitive — it knew our routine within a week. Our energy bill dropped by 38% and the security gives us total peace of mind, even when we're travelling.",
    name: 'Sarah Mitchell',
    role: 'Interior Designer, London',
    initials: 'SM',
    avatarClass: 'avatar-1',
  },
  {
    stars: 5,
    text: "As a tech enthusiast, I've tried everything. NovaNest is in a league of its own. The integration is flawless, the app is beautiful, and their support team is exceptional. Worth every penny and then some.",
    name: 'James Okafor',
    role: 'Software Engineer, Manchester',
    initials: 'JO',
    avatarClass: 'avatar-2',
  },
  {
    stars: 5,
    text: "We have three kids and a busy household. NovaNest has made our lives so much simpler. The automated routines, smart locks, and energy management just work — effortlessly. It feels like the home looks after us.",
    name: 'Priya Sharma',
    role: 'GP & Parent, Birmingham',
    initials: 'PS',
    avatarClass: 'avatar-3',
  },
]

function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Customer Stories</span>
          <h2 id="testimonials-heading" className="section-title">
            Trusted by <span className="gold">50,000+ Homeowners</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
          <p className="section-subtitle text-center">
            Real people, real results. Hear from homeowners who have made
            the switch to intelligent living with NovaNest.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <article key={t.name} className="testimonial-card">
              <div className="testimonial-quote-icon" aria-hidden="true">"</div>
              <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className={`testimonial-avatar ${t.avatarClass}`} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   CTA Banner
───────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="cta-banner-orb" aria-hidden="true" />
      <div className="cta-banner-inner">
        <span className="section-label">Get Started Today</span>
        <h2 id="cta-heading">
          Ready to Transform Your <span className="gold">Home?</span>
        </h2>
        <p>
          Join over 50,000 homeowners who have already discovered the NovaNest
          difference. Book your free consultation today — no obligation, no pressure.
        </p>
        <div className="cta-banner-actions">
          <Link to="/contact" className="btn btn-primary">
            Book Free Consultation ›
          </Link>
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Page Export
───────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  )
}
