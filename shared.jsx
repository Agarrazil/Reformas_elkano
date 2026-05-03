// Componentes compartidos: Header, Footer, FAB, util

const Logomark = ({ size = 22, color = 'currentColor' }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="1.4">
    <path d="M4 18 L16 6 L28 18" />
    <path d="M8 18 L8 27 L24 27 L24 18" />
    <path d="M14 27 L14 21 L18 21 L18 27" strokeWidth="1" />
  </svg>
);

const WhatsAppIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.34 0-7.86 3.52-7.87 7.85a7.83 7.83 0 0 0 1.05 3.93L4 20l4.34-1.14a7.84 7.84 0 0 0 3.71.94h.01c4.34 0 7.86-3.53 7.87-7.86a7.81 7.81 0 0 0-2.32-5.62Zm-5.55 12.07h-.01a6.5 6.5 0 0 1-3.31-.91l-.24-.14-2.58.68.69-2.51-.16-.26a6.49 6.49 0 0 1-1-3.46c0-3.6 2.93-6.53 6.54-6.53a6.5 6.5 0 0 1 4.62 1.92 6.49 6.49 0 0 1 1.91 4.62c0 3.6-2.94 6.53-6.46 6.59Zm3.59-4.89c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.51.64-.62.77-.11.13-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.37a.71.71 0 0 0-.51.24 2.16 2.16 0 0 0-.67 1.6 3.74 3.74 0 0 0 .79 2.01 8.6 8.6 0 0 0 3.3 2.91c.46.2.82.32 1.1.41.46.15.88.13 1.21.08.37-.05 1.14-.46 1.3-.91.16-.45.16-.84.11-.92-.05-.07-.18-.12-.38-.22Z"/>
  </svg>
);

const ArrowRight = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const Placeholder = ({ label, height, aspectRatio, style, src }) => (
  <div className="ph" style={{ height, aspectRatio, ...style, backgroundImage: src ? `url(${src})` : undefined, backgroundSize: src ? 'cover' : undefined, backgroundPosition: src ? 'center' : undefined }}>
    {!src && <span className="ph-label">{label}</span>}
  </div>
);

function Header({ lang, setLang, t, onTweaksReady, palette, onPaletteToggle }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={"header" + (scrolled ? ' scrolled' : '')}>
      <div className="header-inner">
        <a href="#top" className="brand">
          <Logomark size={22} />
          <span className="brand-name">Reformas Elkano</span>
        </a>
        <nav className="nav">
          <a href="#filosofia">{t.nav.philosophy}</a>
          <a href="#servicios">{t.nav.services}</a>
          <a href="#aerotermia">{t.nav.aerotermia}</a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#proceso">{t.nav.process}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        <div className="header-right">
          <div className="lang-toggle">
            <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
            <span>·</span>
            <button className={lang === 'eu' ? 'active' : ''} onClick={() => setLang('eu')}>EU</button>
          </div>
          <a href="tel:+34651693689" className="phone-link">651 693 689</a>
          <a href="#contacto" className="btn">{t.cta.brief} <ArrowRight size={14}/></a>
        </div>
      </div>
    </header>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <a href="#top" className="brand" style={{ marginBottom: 16 }}>
              <Logomark size={20} />
              <span className="brand-name" style={{ fontSize: 16 }}>Reformas Elkano</span>
            </a>
            <p style={{ maxWidth: '34ch', marginTop: 12 }}>
              Arquitectos técnicos y aparejadores especializados en reforma integral premium en el centro de Donostia.
            </p>
          </div>
          <div className="footer-col">
            <h4>Estudio</h4>
            <p>Elkano Kalea 1</p>
            <p>20004 Donostia</p>
            <p>Gipuzkoa</p>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="tel:+34651693689">651 693 689</a>
            <a href="mailto:info@reformaselkano.es">info@reformaselkano.es</a>
            <a href="https://wa.me/34651693689">WhatsApp</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            {t.footer.legal.map((l, i) => <a key={i} href="#">{l}</a>)}
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.copy}</span>
          <span>San Sebastián Shops · Member</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/34651693689?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20presupuesto%20para%20una%20reforma."
      target="_blank"
      rel="noopener"
      className="fab"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}

function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((it, i) => <span key={i} className="marquee-item">{it}</span>)}
      </div>
    </div>
  );
}

Object.assign(window, { Logomark, WhatsAppIcon, ArrowRight, Placeholder, Header, Footer, WhatsAppFab, Marquee });
