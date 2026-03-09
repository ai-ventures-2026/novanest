import { useState } from 'react'

/* ─────────────────────────────────────────
   Page Hero
───────────────────────────────────────── */
function PageHero() {
  return (
    <section className="page-hero" aria-label="Contact introduction">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="page-hero-inner">
        <span className="section-label">Get in Touch</span>
        <h1>
          Let's Build Your <span className="gold">Smart Home</span>
        </h1>
        <div className="divider divider-center" aria-hidden="true" />
        <p>
          Whether you have a question, want a quote, or are ready to start your
          smart home journey, our expert team is here to help. We typically
          respond within 2 business hours.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Contact Info Data
───────────────────────────────────────── */
const contactInfo = [
  {
    icon: '📍',
    label: 'Our Office',
    value: '12 Innovation Quarter, Canary Wharf, London, E14 5AB, United Kingdom',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+44 (0) 20 7946 0832',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'hello@novanest.co.uk',
  },
  {
    icon: '⏰',
    label: 'Working Hours',
    value: 'Monday – Friday: 8am – 8pm\nSaturday: 9am – 5pm\nSunday: Support only',
  },
]

/* ─────────────────────────────────────────
   Contact Form Component
───────────────────────────────────────── */
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const services = [
    'Home Automation',
    'Smart Security',
    'Energy Management',
    'Lighting Control',
    'Climate Systems',
    'Smart Entertainment',
    'Full Package / Bundle',
    'General Enquiry',
  ]

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim())  newErrors.lastName  = 'Last name is required'
    if (!formData.email.trim())     newErrors.email     = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.message.trim())   newErrors.message   = 'Message is required'
    return newErrors
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form-col" role="alert" aria-live="polite">
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
          <h3 style={{ marginBottom: '0.75rem', color: 'var(--color-gold)' }}>
            Message Sent!
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Thank you, {formData.firstName}! We've received your enquiry and will
            get back to you within 2 business hours.
          </p>
          <button
            className="btn btn-ghost"
            onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }) }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-col">
      <h3>Send Us a Message</h3>
      <p>Fill in the form below and one of our smart home advisors will be in touch shortly.</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name <span style={{ color: 'var(--color-gold)' }}>*</span></label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Alex"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            />
            {errors.firstName && (
              <span id="firstName-error" style={{ color: '#f87171', fontSize: '0.78rem' }} role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name <span style={{ color: 'var(--color-gold)' }}>*</span></label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Johnson"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <span id="lastName-error" style={{ color: '#f87171', fontSize: '0.78rem' }} role="alert">
                {errors.lastName}
              </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address <span style={{ color: 'var(--color-gold)' }}>*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="alex@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" style={{ color: '#f87171', fontSize: '0.78rem' }} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+44 7700 900000"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service">Service of Interest</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-label="Select a service"
          >
            <option value="" disabled>Select a service...</option>
            {services.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message <span style={{ color: 'var(--color-gold)' }}>*</span></label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your home, your goals, and how we can help..."
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span id="message-error" style={{ color: '#f87171', fontSize: '0.78rem' }} role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <div className="form-submit-row">
          <p className="form-note">
            By submitting, you agree to our{' '}
            <a href="#" style={{ color: 'var(--color-gold)' }}>Privacy Policy</a>.
            We never share your data.
          </p>
          <button type="submit" className="btn btn-primary">
            Send Message ›
          </button>
        </div>
      </form>
    </div>
  )
}

/* ─────────────────────────────────────────
   Contact Section (info + form)
───────────────────────────────────────── */
function ContactSection() {
  return (
    <section className="contact-section" aria-label="Contact information and form">
      <div className="contact-inner">

        {/* Left column – info */}
        <div className="contact-info-col">
          <span className="section-label">Reach Us</span>
          <h2>We'd Love to <span className="gold">Hear from You</span></h2>
          <div className="divider" aria-hidden="true" />
          <p>
            Our team of smart home specialists is ready to answer your questions,
            provide a tailored quote, or simply have a conversation about what's
            possible for your home.
          </p>

          <div className="contact-info-items">
            {contactInfo.map(item => (
              <div key={item.label} className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">{item.icon}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="map-placeholder" role="img" aria-label="Office location map placeholder">
            <div className="map-placeholder-grid" aria-hidden="true" />
            <div className="map-placeholder-pin" aria-hidden="true">📍</div>
            <div className="map-placeholder-text">12 Innovation Quarter, Canary Wharf, London</div>
          </div>
        </div>

        {/* Right column – form */}
        <ContactForm />
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FAQ Section
───────────────────────────────────────── */
const faqs = [
  {
    q: 'How long does installation take?',
    a: 'Most standard installations are completed within a single day. Larger whole-home setups may take 2–3 days. We always provide a firm timeline during your free consultation.',
  },
  {
    q: 'Will smart home tech work with my existing devices?',
    a: 'NovaNest integrates with over 10,000 smart devices including Amazon Alexa, Google Home, Apple HomeKit, Philips Hue, Nest, and many more. Our advisors will confirm compatibility before installation.',
  },
  {
    q: 'Is my data secure with NovaNest?',
    a: 'Absolutely. We use AES-256 encryption for all data, and your home data is stored on UK-based servers. We never sell or share your personal data with third parties.',
  },
  {
    q: 'What happens if something stops working?',
    a: 'Your system is covered by our 5-year warranty and 24/7 support. Most issues are resolved remotely. Where an engineer visit is needed, we aim to attend within 24 hours.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      className="section"
      style={{ background: 'var(--color-bg-mid)' }}
      aria-labelledby="faq-heading"
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center">
          <span className="section-label">Common Questions</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked <span className="gold">Questions</span>
          </h2>
          <div className="divider divider-center" aria-hidden="true" />
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid ' + (isOpen ? 'rgba(232,184,109,0.4)' : 'var(--color-border)'),
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-white)', fontFamily: 'var(--font-sans)' }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: 'var(--color-gold)',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    style={{ padding: '0 1.5rem 1.25rem' }}
                    role="region"
                  >
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Page Export
───────────────────────────────────────── */
export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactSection />
      <FAQ />
    </>
  )
}
