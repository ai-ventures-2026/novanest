import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { to: '/about',    label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/contact',  label: 'Contact' },
    { to: '/about',    label: 'Careers' },
    { to: '/about',    label: 'Press' },
  ]

  const serviceLinks = [
    { to: '/services', label: 'Home Automation' },
    { to: '/services', label: 'Smart Security' },
    { to: '/services', label: 'Energy Management' },
    { to: '/services', label: 'Lighting Control' },
    { to: '/services', label: 'Climate Systems' },
  ]

  const socials = [
    { icon: '𝕏',  label: 'Twitter / X',  href: '#' },
    { icon: 'in', label: 'LinkedIn',      href: '#' },
    { icon: '▶',  label: 'YouTube',       href: '#' },
    { icon: '◉',  label: 'Instagram',     href: '#' },
  ]

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">

          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="NovaNest home">
              <div className="footer-logo-icon" aria-hidden="true">⌂</div>
              Nova<span>Nest</span>
            </Link>
            <p className="footer-brand-desc">
              Redefining the way you experience your home. NovaNest brings
              intelligent automation, cutting-edge security, and seamless
              connectivity to every corner of your living space.
            </p>
            <div className="footer-socials" aria-label="Social media links">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-icon"
                  aria-label={s.label}
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <nav className="footer-col" aria-label="Company links">
            <h3 className="footer-col-title">Company</h3>
            <ul role="list">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services links */}
          <nav className="footer-col" aria-label="Services links">
            <h3 className="footer-col-title">Services</h3>
            <ul role="list">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="footer-col footer-newsletter">
            <h3 className="footer-col-title">Stay Updated</h3>
            <p>Get the latest smart home news, tips, and exclusive offers delivered to your inbox.</p>
            <form
              className="newsletter-form"
              onSubmit={e => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} NovaNest. All rights reserved. Crafted with precision.
          </p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
