import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import {
  Axe,
  AtSign,
  ChevronRight,
  Clock3,
  Crosshair,
  Gem,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Shield,
  Sparkles,
  Sword,
  X,
  type LucideIcon,
} from 'lucide-react'

type Icon = LucideIcon

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=King+Barber+Shop%2C+Gran+Av.+Jose+Miguel+Carrera+7998%2C+La+Cisterna'
const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'barberos', label: 'Barberos' },
  { id: 'ubicacion', label: 'Ubicación' },
]

const services: { name: string; detail: string; time: string; price: string; icon: Icon }[] = [
  { name: 'Corte del Jarl', detail: 'Tijera, máquina y terminación precisa para un estilo que impone presencia.', time: '45 min', price: '$9.000', icon: Scissors },
  { name: 'Ritual de Odín', detail: 'Corte completo y perfilado de barba con toalla caliente y aceites de madera.', time: '70 min', price: '$13.000', icon: Crosshair },
  { name: 'Barba del Berserker', detail: 'Diseño a navaja, contornos definidos y tratamiento para una barba indomable.', time: '30 min', price: '$6.000', icon: Axe },
  { name: 'Afeitado de la Forja', detail: 'Afeitado tradicional, vapor y cuidado calmante para una piel renovada.', time: '35 min', price: '$8.500', icon: Shield },
  { name: 'Heredero del Clan', detail: 'Corte rápido, cómodo y prolijo para los pequeños guerreros de la casa.', time: '30 min', price: '$7.000', icon: Sword },
  { name: 'Color de Valhalla', detail: 'Color, mechas y textura con una propuesta personal antes de cada aplicación.', time: '75 min', price: '$15.000', icon: Gem },
]

const barbers = [
  { initials: 'J', name: 'Jesús “El Rey”', craft: 'Fades y diseños', skills: ['Fade', 'Diseños', 'Degradados'], image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85' },
  { initials: 'C', name: 'Cristóbal “Gladiador”', craft: 'Barba clásica', skills: ['Navaja', 'Barba', 'Clásico'], image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85' },
  { initials: 'M', name: 'Matías “Motoquero”', craft: 'Cortes modernos', skills: ['Moderno', 'Color', 'Texturizado'], image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting)
        if (current) setActiveSection(current.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const navigate = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <nav className="navbar shell" aria-label="Navegación principal">
          <button className="brand" onClick={() => navigate('inicio')} aria-label="King Barber Shop, volver al inicio">
            <span className="brand-mark"><span>ᚴ</span></span>
            <span className="brand-copy"><strong>KING</strong><small>BARBER SHOP</small></span>
          </button>
          <div className="nav-links">
            {sections.map(({ id, label }) => <button className={activeSection === id ? 'active' : ''} key={id} onClick={() => navigate(id)}>{label}</button>)}
          </div>
          <a className="nav-contact" href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar <ChevronRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && <div className="mobile-menu">
          {sections.map(({ id, label }) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
          <a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar</a>
        </div>}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-texture" aria-hidden="true"><span>ᛉ</span><span>ᛟ</span><span>ᚦ</span></div>
          <div className="shell hero-grid">
            <div className="hero-copy fade-up">
              <p className="eyebrow"><span></span> La Cisterna · Santiago</p>
              <h1>Forja un estilo<br /><em>que deje huella.</em></h1>
              <p className="hero-description">Una barbería de barrio con alma nórdica. Cortes honestos, barbas afiladas y el ritual que tu estilo merece.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => navigate('servicios')}>Explorar servicios <ChevronRight size={18} /></button>
                <a className="text-link" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={18} /> Visítanos</a>
              </div>
              <div className="hero-note"><Sparkles size={17} /> Revisa las opiniones y horarios actualizados en nuestra ficha de Google.</div>
            </div>
            <div className="hero-visual fade-up">
              <div className="hero-image"></div>
              <div className="hero-stamp"><span>ᛁ</span><small>EST. LA CISTERNA</small><b>KBS</b></div>
              <div className="hero-caption"><span></span> Precisión, carácter y oficio</div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section services-section">
          <div className="shell">
            <SectionHeading eyebrow="El ritual del salón" title={<>No es solo un corte.<br /><em>Es tu armadura.</em></>} text="Cada servicio está pensado como una pausa para ti: técnica, buen trato y una terminación a la altura." />
            <div className="service-grid">
              {services.map(({ name, detail, time, price, icon: ServiceIcon }, index) => (
                <article className="service-card" key={name} style={{ '--delay': `${index * 55}ms` } as CSSProperties}>
                  <div className="service-icon"><ServiceIcon size={23} strokeWidth={1.5} /></div>
                  <div className="service-number">0{index + 1}</div>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                  <div className="service-meta"><span><Clock3 size={14} /> {time}</span><strong>{price}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="barberos" className="section barbers-section">
          <div className="shell">
            <div className="split-heading">
              <SectionHeading eyebrow="El clan" title={<>Manos de oficio.<br /><em>Estilo con leyenda.</em></>} text="Conoce a quienes dan forma a cada corte en King Barber Shop." />
              <p className="heading-side-note">No seguimos modas a ciegas. Escuchamos, recomendamos y trabajamos el detalle.</p>
            </div>
            <div className="barber-grid">
              {barbers.map((barber) => (
                <article className="barber-card" key={barber.name}>
                  <div className="barber-photo" style={{ backgroundImage: `url(${barber.image})` }}><span>{barber.initials}</span></div>
                  <div className="barber-info"><p className="barber-craft">{barber.craft}</p><h3>{barber.name}</h3><div className="skills">{barber.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label="Opiniones">
          <div className="shell quote-content">
            <span className="quote-rune">ᛝ</span>
            <div><p className="eyebrow"><span></span> La voz del clan</p><h2>Lo mejor se cuenta<br />de persona a persona.</h2></div>
            <a className="button button-light" href={mapUrl} target="_blank" rel="noreferrer">Ver opiniones en Google <ChevronRight size={18} /></a>
          </div>
        </section>

        <section id="ubicacion" className="section location-section">
          <div className="shell location-grid">
            <div className="location-copy">
              <SectionHeading eyebrow="Encuéntranos" title={<>Tu silla te espera<br /><em>en La Cisterna.</em></>} text="Ven por el corte, quédate por la conversación. Estamos cerca de ti." />
              <div className="contact-list">
                <a href={mapUrl} target="_blank" rel="noreferrer"><span className="contact-icon"><MapPin size={20} /></span><span><b>Dirección</b><small>Gran Av. José Miguel Carrera 7998<br />La Cisterna, Región Metropolitana</small></span><ChevronRight size={18} /></a>
                <a href="tel:+56912345678"><span className="contact-icon"><Phone size={19} /></span><span><b>Teléfono</b><small>+56 9 1234 5678</small></span><ChevronRight size={18} /></a>
                <a href="https://instagram.com/kingbarbershop" target="_blank" rel="noreferrer"><span className="contact-icon"><AtSign size={19} /></span><span><b>Instagram</b><small>@kingbarbershop</small></span><ChevronRight size={18} /></a>
              </div>
            </div>
            <div className="map-column">
              <div className="map-frame"><iframe title="Ubicación de King Barber Shop" src="https://www.google.com/maps?q=Gran+Av.+Jos%C3%A9+Miguel+Carrera+7998,+La+Cisterna,+Chile&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
              <div className="hours-card"><div className="hours-heading"><Clock3 size={19} /><b>Horario de atención</b></div><div className="hours"><span>Lunes a jueves</span><strong>10:00 — 20:00</strong><span>Viernes</span><strong>10:00 — 21:00</strong><span>Sábado</span><strong>10:00 — 19:00</strong><span>Domingo</span><strong className="closed">Cerrado</strong></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-main"><button className="brand" onClick={() => navigate('inicio')}><span className="brand-mark"><span>ᚴ</span></span><span className="brand-copy"><strong>KING</strong><small>BARBER SHOP</small></span></button><p>Barbería de inspiración nórdica en el corazón de La Cisterna.</p><div className="footer-links"><a href="tel:+56912345678">+56 9 1234 5678</a><a href={mapUrl} target="_blank" rel="noreferrer">Cómo llegar</a><a href="https://instagram.com/kingbarbershop" target="_blank" rel="noreferrer">Instagram</a></div></div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} King Barber Shop</span><span>Hecho con oficio en La Cisterna</span></div>
      </footer>
    </>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return <div className="section-heading"><p className="eyebrow"><span></span>{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
}
