import { useState, type FormEvent } from 'react'
import './App.css'

const contactEmail = 'unitedenergypro@gmail.com'
const currentYear = new Date().getFullYear()
const initialInterest =
  new URLSearchParams(window.location.search).get('interest') === 'effigy'
    ? 'Effigy'
    : 'Home energy audit'

function Logo() {
  return (
    <a className="brand" href="/" aria-label="United Energy Professionals home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 42 42" fill="none">
          <path d="M21 3.5 36 9v10.8c0 9.1-6.4 15.3-15 18.7C12.4 35.1 6 28.9 6 19.8V9l15-5.5Z" />
          <path d="M22.8 9.5 14 22h6l-1 10.5L28 19.8h-6.1l.9-10.3Z" />
        </svg>
      </span>
      <span className="brand-name">
        <strong>UNITED ENERGY</strong>
        <span>PROFESSIONALS</span>
      </span>
    </a>
  )
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function IntroVideo() {
  const [videoUnavailable, setVideoUnavailable] = useState(false)

  return (
    <div className="hero-video">
      <video
        aria-label="Kyle O’ Watts, The Energy Guy: 30-second introduction"
        controls
        onError={() => setVideoUnavailable(true)}
        playsInline
        preload="metadata"
        src="/video/kyle-effigy-intro.mp4"
      />
      {videoUnavailable && (
        <div className="hero-video-placeholder">
          <span className="hero-video-label">Kyle O’ Watts · The Energy Guy</span>
          <span className="hero-video-duration">
            The introduction video is unavailable.
          </span>
        </div>
      )}
    </div>
  )
}

function Header({ isContactPage = false }: { isContactPage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const prefix = isContactPage ? '/' : ''
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href={`${prefix}#about`} onClick={closeMenu}>
            About UEP
          </a>
          <a href={`${prefix}#services`} onClick={closeMenu}>
            Services
          </a>
          <a href={`${prefix}#kyle`} onClick={closeMenu}>
            Meet Kyle
          </a>
          <a href={`${prefix}#effigy`} onClick={closeMenu}>
            Effigy
          </a>
          <a
            className={`nav-contact${isContactPage ? ' active' : ''}`}
            href="/contact"
            onClick={closeMenu}
          >
            Contact <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Better home performance starts with understanding your home.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          <a href="/#services">Energy auditing</a>
          <a href="/#kyle">Meet Kyle O’ Watts</a>
          <a href="/#about">About UEP</a>
          <a href="/#effigy">Effigy</a>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Get in touch</span>
          <a href="/contact">Contact UEP <ArrowIcon diagonal /></a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <span>Maryland</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} United Energy Professionals LLC</span>
        <span>Helping Maryland homes work better.</span>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              Maryland home energy &amp; performance
            </div>
            <h1>
              Make your home
              <br />
              <span>work better.</span>
            </h1>
            <p className="hero-description">
              Know where your home is losing energy. A more comfortable, safer,
              more efficient home starts with understanding how it works. UEP
              helps you find the right next step.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/contact">
                Request an Energy Audit <ArrowIcon />
              </a>
              <a className="text-link light-link" href="#services">
                Explore our services
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              Thoughtful home energy guidance, rooted in Maryland.
            </div>
          </div>
          <div className="hero-visual">
            <svg className="hero-artwork" viewBox="0 0 760 625" aria-hidden="true">
              <defs>
                <linearGradient id="room-wall" x1="380" y1="0" x2="380" y2="625">
                  <stop stopColor="#e9eadc" />
                  <stop offset="1" stopColor="#d1d9c8" />
                </linearGradient>
                <linearGradient id="window-view" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#c1d9c7" />
                  <stop offset="1" stopColor="#75917b" />
                </linearGradient>
              </defs>
              <rect width="760" height="625" fill="url(#room-wall)" />
              <path d="M0 437 760 402v223H0V437Z" fill="#b9a98c" />
              <path d="m0 468 760-37M0 530l760-35M0 590l760-30" stroke="#a69679" strokeOpacity=".38" />
              <rect x="72" y="58" width="326" height="276" fill="#f2f1e8" />
              <rect x="84" y="70" width="302" height="252" fill="url(#window-view)" />
              <path d="M84 237c45-52 90-43 134-4 53-61 111-52 168 1v88H84v-85Z" fill="#8cae8c" />
              <path d="M84 274c59-35 104-17 153 13 54-41 106-39 149-1v36H84v-48Z" fill="#66816a" />
              <path d="M234 70v252M84 196h302" stroke="#f3f1e5" strokeWidth="13" />
              <path d="M59 55h351M59 338h351" stroke="#f7f5eb" strokeWidth="15" />
              <path d="M448 122h214v14H448zM448 122v261h14V136M648 136v247h14V136" fill="#c9b99c" />
              <path d="M475 145h158v225H475z" fill="#e1d7c6" />
              <path d="M489 159h131v199H489z" fill="#f2efe4" />
              <rect x="508" y="270" width="94" height="84" rx="3" fill="#a5ad8f" />
              <path d="M496 286c0-22 18-40 40-40h36c22 0 40 18 40 40v50H496v-50Z" fill="#7b8b6b" />
              <path d="M486 330h146v43H486z" fill="#687a5f" />
              <path d="M467 371h190v16H467zM490 372v26m140-26v26" stroke="#675f4b" strokeWidth="9" />
              <path d="M625 390c-9-67 3-112 28-139m-22 82c-20-23-32-37-35-57m40 28c17-17 28-34 34-51m-43 10c-14-19-20-35-19-52" stroke="#52684d" strokeWidth="7" strokeLinecap="round" />
              <path d="M635 389h54l-9 37h-35l-10-37Z" fill="#b37c55" />
              <path d="M544 430h144" stroke="#806f57" strokeWidth="5" strokeLinecap="round" />
              <path d="M509 431v94m137-94v94" stroke="#806f57" strokeWidth="8" />
              <path d="M484 427h187l-17 28H498l-14-28Z" fill="#c2b08e" />
              <path d="M18 399h64v172H18z" fill="#52674d" />
              <path d="M14 400c-1-45 38-79 67-98 9 44-5 80-31 98m-29 25c-2-42-34-72-60-87 0 43 15 72 43 87" fill="#718868" />
              <path d="M7 567h88l-9 48H17l-10-48Z" fill="#b37c55" />
              <path d="M0 625h760" stroke="#8c7c61" strokeWidth="5" />
            </svg>
            <div className="hero-image-shade" />
            <IntroVideo />
          </div>
          <span className="hero-orbit orbit-one" aria-hidden="true" />
          <span className="hero-orbit orbit-two" aria-hidden="true" />
        </section>

        <section className="intro-band" aria-label="Our approach">
          <p>
            Your home has a story.
            <strong> Let’s understand it before we make a plan.</strong>
          </p>
          <a className="text-link" href="#how-we-work">
            How we work <ArrowIcon />
          </a>
        </section>

        <section className="section kyle-section" id="kyle">
          <div className="section-kicker">
            <span>01</span> A personal introduction
          </div>
          <div className="kyle-grid">
            <div className="kyle-profile-card">
              <span className="profile-label">UNITED ENERGY PROFESSIONALS</span>
              <span className="profile-monogram" aria-hidden="true">
                K
              </span>
              <div className="profile-name">
                <strong>Kyle O’ Watts</strong>
                <span>The Energy Guy</span>
              </div>
              <span className="profile-location">MARYLAND · U.S.A.</span>
            </div>
            <div className="kyle-copy">
              <span className="eyebrow">Meet Kyle O’ Watts</span>
              <h2>
                A good audit
                <br />
                starts with a
                <br />
                <em>good conversation.</em>
              </h2>
              <p>
                As The Energy Guy, Kyle introduces UEP’s home energy assessment
                approach: start with your concerns, look at the whole home, and
                make the findings easier to act on.
              </p>
              <a className="text-link" href="/contact">
                Request an Energy Audit <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section about-grid">
            <div className="about-copy">
              <div className="section-kicker">
                <span>02</span> About UEP
              </div>
              <span className="eyebrow">Local knowledge. Meaningful experience.</span>
              <h2>
                Home performance,
                <br />
                grounded in experience.
              </h2>
              <p>
                United Energy Professionals is a Maryland-based home
                performance company with more than a decade of experience
                helping homeowners understand how their homes use energy.
              </p>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <strong>10<span>+</span></strong>
                <span>years of home performance experience</span>
              </div>
              <div className="about-stat">
                <strong>3,000<span>+</span></strong>
                <span>home energy assessments completed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section section-inner">
            <div className="section-kicker">
              <span>03</span> Home Energy Audits
            </div>
            <div className="services-heading">
              <div>
                <span className="eyebrow">Start with the whole picture</span>
                <h2>
                  Understand your home.
                  <br />
                  Choose your next step.
                </h2>
              </div>
              <p>
                Residential energy assessments help you make sense of energy
                use, comfort, safety, and efficiency—and where improvements may
                matter most.
              </p>
            </div>
            <div className="service-cards">
              <article className="service-card">
                <span className="service-number">01</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="m5 18 15-12 15 12v16H5V18Z" />
                    <path d="M15 34V22h10v12M11 18h.01M29 18h.01" />
                    <path d="M20 6V3" />
                  </svg>
                </div>
                <h3>Whole-home energy assessment</h3>
                <p>
                  Learn how your home’s spaces and systems work together to
                  shape energy use and day-to-day comfort.
                </p>
                <a href="/contact" aria-label="Request a home energy audit">
                  <ArrowIcon />
                </a>
              </article>
              <article className="service-card">
                <span className="service-number">02</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none">
                    <circle cx="18" cy="18" r="11" />
                    <path d="m26 26 9 9M18 11v14m-7-7h14" />
                  </svg>
                </div>
                <h3>Comfort and safety</h3>
                <p>
                  Bring your concerns. An audit helps identify areas to explore
                  for a more comfortable, safer home.
                </p>
                <a href="/contact" aria-label="Request an energy assessment">
                  <ArrowIcon />
                </a>
              </article>
              <article className="service-card">
                <span className="service-number">03</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M7 33V14l13-8 13 8v19H7Z" />
                    <path d="M14 33V21h12v12M13 15h.01M20 15h.01M27 15h.01" />
                    <path d="m17 10 3-4 3 4" />
                  </svg>
                </div>
                <h3>Efficiency next steps</h3>
                <p>
                  Understand potential opportunities and decide which
                  efficiency improvements fit your priorities.
                </p>
                <a href="/contact" aria-label="Plan your next home improvement">
                  <ArrowIcon />
                </a>
              </article>
            </div>
            <div className="services-footnote">
              <span className="footnote-star">✳</span>
              <p>
                Every home is different. We’ll start by listening to what
                matters to you.
              </p>
              <a className="button button-dark" href="/contact">
                Request an Energy Audit <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="process-section section" id="how-we-work">
          <div className="section-kicker">
            <span>04</span> A better way forward
          </div>
          <div className="process-heading">
            <span className="eyebrow">Simple, thoughtful, homeowner-first</span>
            <h2>
              From questions
              <br />
              to a clearer picture.
            </h2>
          </div>
          <div className="process-steps">
            <article>
              <span className="step-count">01</span>
              <div>
                <h3>Tell us what’s on your mind</h3>
                <p>Share what you’ve noticed and what you hope to improve.</p>
              </div>
            </article>
            <article>
              <span className="step-count">02</span>
              <div>
                <h3>Understand your home</h3>
                <p>
                  Explore the questions that can help explain comfort and
                  energy use.
                </p>
              </div>
            </article>
            <article>
              <span className="step-count">03</span>
              <div>
                <h3>Choose your next step</h3>
                <p>
                  Use what you learn to decide what makes sense for your home.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="effigy-section" id="effigy">
          <div className="effigy-art" aria-hidden="true">
            <span className="effigy-ring ring-large" />
            <span className="effigy-ring ring-small" />
            <span className="effigy-spark spark-one">✳</span>
            <span className="effigy-spark spark-two">✳</span>
            <span className="effigy-wordmark">effigy</span>
            <span className="effigy-caption">
              Pocket Home Performance · In development
            </span>
          </div>
          <div className="effigy-copy">
            <div className="section-kicker">
              <span>05</span> Introducing Effigy
            </div>
            <span className="eyebrow">In development · Pocket Home Performance</span>
            <h2>
              Effigy:
              <br />
              Pocket Home
              <br />
              <em>Performance.</em>
            </h2>
            <p>
              Effigy is a mobile application in development to help homeowners
              and renters understand home energy use. Planned features include
              utility bill analysis and appliance management.
            </p>
            <a className="text-link" href="/contact?interest=effigy">
              Discover Effigy <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="closing-cta">
          <div className="cta-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="cta-content">
            <span className="eyebrow">Your home. Your questions. A clear start.</span>
            <h2>
              Let’s make home
              <br />
              feel better.
            </h2>
            <p>
              Start with a conversation about what you’ve noticed and what
              matters to you.
            </p>
            <a className="button button-primary" href="/contact">
              Request an Energy Audit <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: initialInterest,
    appointmentDate: '',
    message: '',
  })
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `I'm interested in: ${form.service}`,
      `Preferred appointment date: ${form.appointmentDate || 'Not specified'}`,
      '',
      form.message,
    ].join('\n')
    const params = new URLSearchParams({
      subject: `UEP website inquiry: ${form.service}`,
      body,
    })
    window.location.href = `mailto:${contactEmail}?${params.toString()}`
    setMessage('Your email app should open with your message ready to send.')
  }

  return (
    <>
      <Header isContactPage />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Start a conversation
            </div>
            <h1>
              Let’s talk about
              <br />
              <em>your home.</em>
            </h1>
            <p>
              Tell us what you’ve noticed, what you’re curious about, or what
              you’d like to change. Request an energy audit or suggest a
              preferred appointment date to get the conversation started.
            </p>
            <div className="contact-location">
              <span className="location-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
              </span>
              Proudly based in Maryland
            </div>
          </div>
          <div className="contact-hero-art" aria-hidden="true">
            <span className="contact-art-circle" />
            <svg viewBox="0 0 520 440" fill="none">
              <path d="m54 222 205-162 207 162v176H54V222Z" />
              <path d="M102 222h314v176H102V222Z" />
              <path d="M203 398V275h108v123M144 272h25v33h-25zM351 272h25v33h-25z" />
              <path d="M227 153h66v63h-66zM240 167h40v49h-40z" />
              <path d="m30 222 229-181 231 181M23 398h475" />
              <circle cx="259" cy="184" r="8" />
              <path d="M259 176v16M251 184h16" />
            </svg>
            <span className="art-label">A thoughtful first step</span>
          </div>
        </section>
        <section className="contact-content">
          <div className="contact-aside">
            <span className="section-kicker">
              <span>01</span> Get in touch
            </span>
            <h2>Tell us a little about what you need.</h2>
            <p>
              This form opens a draft in your email app; it does not submit
              directly. Review and send the draft to UEP at{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. An
              appointment is not confirmed until UEP responds.
            </p>
            <div className="contact-aside-note">
              <span className="note-line" />
              <p>
                Not sure where to begin? That’s a great place to start the
                conversation.
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  autoComplete="name"
                  name="name"
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  placeholder="Name"
                  required
                  value={form.name}
                />
              </label>
              <label>
                Email address
                <input
                  autoComplete="email"
                  name="email"
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={form.email}
                />
              </label>
            </div>
            <label>
              I’m interested in
              <select
                name="service"
                onChange={(event) =>
                  setForm({ ...form, service: event.target.value })
                }
                value={form.service}
              >
                <option>Home energy audit</option>
                <option>Home comfort and performance</option>
                <option>Effigy</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Preferred appointment date (optional)
              <input
                name="appointmentDate"
                onChange={(event) =>
                  setForm({ ...form, appointmentDate: event.target.value })
                }
                type="date"
                value={form.appointmentDate}
              />
            </label>
            <label>
              What would you like us to know?
              <textarea
                name="message"
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                placeholder="Share a little about your home or your questions..."
                rows={5}
                value={form.message}
              />
            </label>
            <button
              className="button button-dark"
              type="submit"
            >
              Send an inquiry <ArrowIcon />
            </button>
            <p className="form-status" role="status">
              {message}
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

function App() {
  const isContactPage = /^\/contact\/?$/.test(window.location.pathname)
  return isContactPage ? <ContactPage /> : <HomePage />
}

export default App
