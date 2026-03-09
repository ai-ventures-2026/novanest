import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────
   Page Hero
───────────────────────────────────────── */
function PageHero() {
  return (
    <section className="page-hero" aria-label="Services introduction">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="page-hero-inner">
        <span className="section-label">What We Offer</span>
        <h1>
          Complete Smart Home <span className="gold">Solutions</span>
        </h1>
        <div className="divider divider-center" aria-hidden="true" />
        <p>
          From home automation to intelligent security, our comprehensive suite
          of services covers every aspect of modern intelligent living.
          Premium technology, expertly installed, endlessly supported.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Services Data
───────────────────────────────────────── */
const services = [
  {
    icon: '🏠',
    title: 'Home Automation',
    desc: 'Transform your home into a fully automated ecosystem. Control lighting, appliances, entertainment, and more from a single app or with your voice. Custom scenes and schedules adapt to your lifestyle automatically.',
    features: [
      'Universal device control',
      'Custom automation scenes',
      'Voice assistant integration',
      'Remote access via app',
    ],
    price: '£1,499',
    priceNote: 'starting from',
    badge: 'Most Popular',
  },
  {
    icon: '🔐',
    title: 'Smart Security',
    desc: 'Protect what matters most with AI-powered security. Smart locks, HD cameras with facial recognition, motion sensors, and 24/7 monitoring give you total peace of mind — at home or away.',
    features: [
      'AI facial recognition',
      'Smart lock installation',
      'HD camera systems',
      '24/7 monitoring service',
    ],
    price: '£999',
    priceNote: 'starting from',
    badge: null,
  },
  {
    icon: '⚡',
    title: 'Energy Management',
    desc: 'Cut your energy bills by up to 40% with our intelligent energy platform. Real-time consumption monitoring, smart tariff optimisation, solar integration, and AI-driven scheduling make efficiency effortless.',
    features: [
      'Real-time consumption tracking',
      'Solar panel integration',
      'Smart tariff optimisation',
      'EV charger management',
    ],
    price: '£799',
    priceNote: 'starting from',
    badge: 'Eco Choice',
  },
  {
    icon: '💡',
    title: 'Lighting Control',
    desc: 'Immersive, intelligent lighting that sets the perfect mood for every moment. Circadian rhythm lighting supports your wellbeing, while dynamic scenes create atmosphere at the touch of a button.',
    features: [
      'Full-spectrum circadian lighting',
      'Dynamic scene creation',
      'Presence-based automation',
      'Energy monitoring',
    ],
    price: '£649',
    priceNote: 'starting from',
    badge: null,
  },
  {
    icon: '🌡️',
    title: 'Climate Systems',
    desc: 'Achieve perfect comfort in every room with intelligent climate control. AI-powered heating and cooling learns your preferences, adjusts for weather, and ensures comfort while minimising waste.',
    features: [
      'AI temperature optimisation',
      'Multi-zone control',
      'Weather-adaptive scheduling',
      'Humidity & air quality monitoring',
    ],
    price: '£1,099',
    priceNote: 'starting from',
    badge: null,
  },
  {
    icon: '🎵',
    title: 'Smart Entertainment',
    desc: 'Create the ultimate connected entertainment experience. Multi-room audio, 4K smart displays, and seamless streaming integration turn your home into a personal cinema and concert hall.',
    features: [
      'Multi-room audio system',
      '4K display integration',
      'Streaming service hub',
      'Surround sound automation',
    ],
    price: '£1,299',
    priceNote: 'starting from',
    badge: null,
  },
]

/* ─────────────────────────────────────────
   Services Grid
───────────────────────────────────────── */
function ServicesGrid() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }} aria-labelledby="services-heading">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '1rem' }}>
          <span className="section-label">Our Services</span>
          <h2 id="services-heading" className="section-title">
            Everything Your Smart Home <span className="gold">Needs</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
          <p className="section-subtitle text-center">
            Each service is designed as a standalone solution or integrated into
            a fully unified NovaNest smart home ecosystem.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <article key={s.title} className="service-card">
              {s.badge && (
                <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                  <span className="badge badge-gold">{s.badge}</span>
                </div>
              )}
              <div className="service-icon-wrap" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-features" aria-label={`${s.title} features`}>
                {s.features.map(f => (
                  <li key={f} className="service-feature-item">{f}</li>
                ))}
              </ul>
              <div className="service-footer">
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {s.priceNote}
                  </div>
                  <div className="service-price">{s.price}</div>
                </div>
                <Link to="/contact" className="btn btn-ghost" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  Enquire →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Comparison / Why Us Section
───────────────────────────────────────── */
const reasons = [
  { icon: '🏆', title: 'Award-Winning Platform', desc: '12 industry awards including Which? Best Smart Home Brand 2023 and 2024.' },
  { icon: '🔧', title: 'Certified Engineers', desc: 'All installations carried out by NICEIC-certified, factory-trained technicians.' },
  { icon: '📞', title: '24/7 UK Support', desc: 'Real humans available around the clock by phone, chat, and video call.' },
  { icon: '🛡️', title: '5-Year Warranty', desc: 'Every NovaNest installation is backed by our comprehensive 5-year warranty.' },
]

function WhyChooseUs() {
  return (
    <section className="section" style={{ background: 'var(--color-bg-mid)' }} aria-labelledby="why-heading">
      <div className="container">
        <div className="text-center">
          <span className="section-label">The NovaNest Difference</span>
          <h2 id="why-heading" className="section-title">
            Why Thousands Choose <span className="gold">NovaNest</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
        </div>
        <div className="grid-4" style={{ marginTop: '3rem' }}>
          {reasons.map(r => (
            <div key={r.title} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} aria-hidden="true">{r.icon}</div>
              <h4 style={{ marginBottom: '0.6rem', color: 'var(--color-white)' }}>{r.title}</h4>
              <p style={{ fontSize: '0.88rem' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Services CTA
───────────────────────────────────────── */
function ServicesCTA() {
  return (
    <section className="services-cta" aria-labelledby="services-cta-heading">
      <div className="services-cta-inner">
        <span className="section-label">Get a Custom Quote</span>
        <h2 id="services-cta-heading">
          Not Sure Which Package <span className="gold">Is Right for You?</span>
        </h2>
        <p>
          Our smart home advisors will design a bespoke solution based on your
          home, budget, and lifestyle. Free consultation, no obligation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary">
            Book Free Consultation ›
          </Link>
          <Link to="/about" className="btn btn-outline">
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Page Export
───────────────────────────────────────── */
export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
      <WhyChooseUs />
      <ServicesCTA />
    </>
  )
}
