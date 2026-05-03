// Secciones de la home: Hero, Filosofía, Servicios, Aerotermia, Proyectos, Proceso, Testimonios, Zona, FAQ, Contacto

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-meta">
          {t.hero.meta.map((m, i) => (
            <div className="hero-meta-item" key={i}>
              <span className="hero-meta-key">[{String(i+1).padStart(2,'0')}] {m.k}</span>
              <span className="hero-meta-val" style={{ whiteSpace: 'pre-line' }}>{m.v}</span>
            </div>
          ))}
          <div className="hero-meta-item" style={{ marginLeft: 'auto' }}>
            <span className="hero-meta-key">[ref] briefing</span>
            <span className="hero-meta-val">REF-EK · 2026 / 01</span>
          </div>
        </div>
        <div className="eyebrow" style={{ marginBottom: 24 }}>{t.hero.eyebrow}</div>
        <h1 className="hero-title">
          {t.hero.title.map((l, i) => (
            <span key={i} style={{ display: 'block' }}>
              {l.includes(t.hero.titleEm)
                ? <>{l.replace(t.hero.titleEm, '')}<em>{t.hero.titleEm}</em></>
                : l}
            </span>
          ))}
        </h1>
        <div className="hero-bottom">
          <p className="hero-lede">{t.hero.lede}</p>
          <div></div>
          <div className="hero-cta-group">
            <div className="hero-cta-row">
              <a href="https://wa.me/34651693689" className="btn">
                <WhatsAppIcon size={14}/> {t.cta.whatsapp}
              </a>
              <a href="#contacto" className="btn btn-ghost">{t.cta.brief}</a>
            </div>
            <span className="eyebrow" style={{ fontSize: 10 }}>Visita técnica gratuita · respuesta en 48 h</span>
          </div>
        </div>
        <div className="hero-image-strip">
          <Placeholder src={window.IMG.hero1} label="Salón" />
          <Placeholder src={window.IMG.detail} label="Detalle" />
          <Placeholder src={window.IMG.facade} label="Fachada" />
        </div>
      </div>
    </section>
  );
}

function Philosophy({ t }) {
  return (
    <section className="philosophy" id="filosofia">
      <div className="container">
        <div className="section-intro">
          <div className="section-intro-label">
            <span className="section-num">[ {t.philosophy.num} / 08 ]</span>
            <span className="eyebrow">Filosofía</span>
          </div>
          <h2 className="section-title">
            {t.philosophy.title.map((l, i) => (
              <span key={i} style={{ display: 'block' }}>
                {l.includes(t.philosophy.titleEm)
                  ? <>{l.replace(t.philosophy.titleEm, '')}<em>{t.philosophy.titleEm}</em>{l.endsWith('.') ? '.' : ''}</>
                  : l}
              </span>
            ))}
          </h2>
        </div>
        <div className="philosophy-grid">
          {t.philosophy.pillars.map((p, i) => (
            <div className="pillar" key={i}>
              <div className="pillar-num">PILAR · {p.n}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="section-intro">
          <div className="section-intro-label">
            <span className="section-num">[ {t.services.num} / 08 ]</span>
            <span className="eyebrow">Servicios</span>
          </div>
          <h2 className="section-title">
            {t.services.title.map((l, i) => (
              <span key={i} style={{ display: 'block' }}>
                {l.includes(t.services.titleEm)
                  ? <>{l.replace(t.services.titleEm, '')}<em>{t.services.titleEm}</em>{l.endsWith('.') ? '.' : ''}</>
                  : l}
              </span>
            ))}
          </h2>
        </div>
        <div className="services-list">
          {t.services.list.map((s, i) => (
            <div
              key={i}
              className="service-row"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="service-num">{s.n}</span>
              <span className="service-name">{s.name}</span>
              <span className="service-desc">{s.desc}</span>
              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Aerotermia({ t }) {
  return (
    <section className="aerotermia" id="aerotermia">
      <div className="container">
        <div className="aero-grid">
          <div className="aero-text-block">
            <div className="section-intro-label" style={{ marginBottom: 24 }}>
              <span className="section-num">[ {t.aero.num} / 08 ]</span>
              <span className="eyebrow">{t.aero.eyebrow}</span>
            </div>
            <h2 className="aero-headline">
              {t.aero.headline.map((l, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {l.includes(t.aero.headlineEm)
                    ? <>{l.replace(t.aero.headlineEm, '')}<em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{t.aero.headlineEm}</em>{l.endsWith('.') ? '.' : ''}</>
                    : l}
                </span>
              ))}
            </h2>
            <p className="aero-body">{t.aero.body}</p>
            <div className="aero-stats">
              {t.aero.stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-num">{s.num}<sub>{s.unit}</sub></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aero-visual">
            <Placeholder src={window.IMG.aero} label="Aerotermia" />
            <span className="aero-tag" style={{ top: 24, left: 24 }}>UNIDAD EXTERIOR · COP 4.7</span>
            <span className="aero-tag" style={{ bottom: 200, right: 24 }}>SUELO RADIANTE · 35 °C</span>
            <span className="aero-tag" style={{ bottom: 100, left: 24 }}>ACS · 60 °C</span>
            <span className="aero-tag" style={{ bottom: 24, right: 24 }}>−70 % CO₂</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ t, lang }) {
  const [filter, setFilter] = React.useState(0);
  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <div className="section-intro" style={{ paddingTop: 0 }}>
          <div className="section-intro-label">
            <span className="section-num" style={{ color: 'rgba(245,241,234,0.5)' }}>[ {t.projects.num} / 08 ]</span>
            <span className="eyebrow" style={{ color: 'rgba(245,241,234,0.7)' }}>Portafolio</span>
          </div>
          <h2 className="section-title">
            {t.projects.title.map((l, i) => (
              <span key={i} style={{ display: 'block' }}>
                {l.includes(t.projects.titleEm)
                  ? <>{l.replace(t.projects.titleEm, '')}<em>{t.projects.titleEm}</em>{l.endsWith('.') ? '.' : ''}</>
                  : l}
              </span>
            ))}
          </h2>
        </div>
        <div className="projects-filter">
          {t.projects.filters.map((f, i) => (
            <button key={i} className={"filter-chip" + (filter === i ? ' active' : '')} onClick={() => setFilter(i)}>{f}</button>
          ))}
        </div>
        <div className="projects-grid">
          {t.projects.list.map((p, i) => (
            <a key={i} className="project-card" href={`proyecto-${i+1}.html`}>
              <div className="project-image">
                <Placeholder src={[window.IMG.proj1, window.IMG.proj2, window.IMG.proj3, window.IMG.proj4][i]} label={p.name} />
                <span className="project-tag">{p.tag}</span>
              </div>
              <div className="project-meta">
                <span>{p.neighbourhood} · {p.year}</span>
                <span>0{i+1}</span>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-info">{p.m2} · {p.duration} · {p.material}</p>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <a href="proyecto-1.html" className="btn-link" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }}>
            Ver caso de estudio detallado <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section className="process" id="proceso">
      <div className="container">
        <div className="section-intro">
          <div className="section-intro-label">
            <span className="section-num">[ {t.process.num} / 08 ]</span>
            <span className="eyebrow">Metodología</span>
          </div>
          <h2 className="section-title">{t.process.title[0]}</h2>
        </div>
        <div className="process-track">
          {t.process.steps.map((s, i) => (
            <div key={i} className={"process-step" + (i === 0 ? ' done' : '')}>
              <span className="process-num">FASE {s.num}</span>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  return (
    <section className="team" id="testimonios">
      <div className="container">
        <div className="section-intro">
          <div className="section-intro-label">
            <span className="section-num">[ {t.testimonials.num} / 08 ]</span>
            <span className="eyebrow">Testimonios</span>
          </div>
          <h2 className="section-title">
            {t.testimonials.title.map((l, i) => (
              <span key={i} style={{ display: 'block' }}>
                {l.includes(t.testimonials.titleEm)
                  ? <>{l.replace(t.testimonials.titleEm, '')}<em>{t.testimonials.titleEm}</em>{l.endsWith('.') ? '.' : ''}</>
                  : l}
              </span>
            ))}
          </h2>
        </div>
        <div className="testimonials-grid">
          {t.testimonials.list.map((q, i) => (
            <div key={i} className="testimonial">
              <div className="testimonial-stars">{'★'.repeat(q.stars)}</div>
              <blockquote className="testimonial-quote">"{q.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="team-avatar"></div>
                <div>
                  <div className="team-author-name">{q.author}</div>
                  <div className="team-author-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Zone({ t }) {
  return (
    <section className="zone" id="zona">
      <div className="container">
        <div className="section-intro">
          <div className="section-intro-label">
            <span className="section-num">[ {t.zone.num} / 08 ]</span>
            <span className="eyebrow">Zona de actuación</span>
          </div>
          <h2 className="section-title">{t.zone.title.join(' ')}</h2>
        </div>
        <div className="zone-grid">
          <div className="zone-map">
            <Placeholder src={window.IMG.zone} label="Mapa" />
            <span className="zone-pin" style={{ top: '46%', left: '52%' }}>
              <span className="zone-pin-dot"></span>
              <span className="zone-pin-label">Elkano 1</span>
            </span>
            <span className="zone-radius"></span>
          </div>
          <div className="zone-content">
            <p className="zone-lede">{t.zone.lede}</p>
            <div className="zone-areas">
              {t.zone.areas.map((a, i) => (
                <div key={i} className="zone-area">
                  <div className="zone-area-name">{a.n}</div>
                  <div className="zone-area-desc">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ t }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-intro">
          <div className="section-intro-label">
            <span className="section-num">[ {t.faq.num} / 08 ]</span>
            <span className="eyebrow">Dudas frecuentes</span>
          </div>
          <h2 className="section-title">{t.faq.title.join(' ')}</h2>
        </div>
        <div className="faq-list">
          {t.faq.list.map((item, i) => (
            <div key={i} className={"faq-item" + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-num">{String(i+1).padStart(2,'0')}</span>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-toggle">{open === i ? '–' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }) {
  const fc = window.formCopy[lang];
  const [type, setType] = React.useState(0);
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="section-intro" style={{ paddingTop: 0, gridTemplateColumns: '1fr', gap: 8, marginBottom: 40 }}>
          <div className="section-intro-label">
            <span className="section-num">[ 09 / 08 ]</span>
            <span className="eyebrow">Contacto</span>
          </div>
        </div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-headline">
              {t.contact.headline.map((l, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {l.includes(t.contact.headlineEm)
                    ? <>{l.replace(t.contact.headlineEm, '')}<em>{t.contact.headlineEm}</em>{l.endsWith('.') ? '.' : ''}</>
                    : l}
                </span>
              ))}
            </h2>
            <a href="https://wa.me/34651693689" className="btn" style={{ marginTop: 8 }}>
              <WhatsAppIcon size={14}/> {t.cta.whatsapp} · 651 693 689
            </a>
            <div className="contact-info">
              {t.contact.info.map((info, i) => (
                <div key={i} className="contact-info-block">
                  <div className="eyebrow">{info.k}</div>
                  <div className="val" style={{ whiteSpace: 'pre-line' }}>
                    {info.link ? <a href={info.link}>{info.v}</a> : info.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Demo: solicitud enviada'); }}>
            <div className="field-row">
              <div className="field">
                <label>{fc.name}</label>
                <input type="text" placeholder="Nerea Etxeberria" required />
              </div>
              <div className="field">
                <label>{fc.phone}</label>
                <input type="tel" placeholder="6XX XXX XXX" required />
              </div>
            </div>
            <div className="field">
              <label>{fc.email}</label>
              <input type="email" placeholder="nombre@correo.com" required />
            </div>
            <div className="field">
              <label>{fc.typeLabel}</label>
              <div className="chips">
                {fc.typeOptions.map((o, i) => (
                  <button key={i} type="button" className={"chip" + (type === i ? ' active' : '')} onClick={() => setType(i)}>{o}</button>
                ))}
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label>{fc.neighLabel}</label>
                <input type="text" placeholder={fc.neighPh} />
              </div>
              <div className="field">
                <label>{fc.sizeLabel}</label>
                <input type="text" placeholder={fc.sizePh} />
              </div>
            </div>
            <div className="field">
              <label>{fc.msg}</label>
              <textarea rows={3} placeholder={fc.msgPh}></textarea>
            </div>
            <div className="form-submit">
              <span className="form-meta">↳ {fc.meta}</span>
              <button type="submit" className="btn">{fc.submit} <ArrowRight /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Philosophy, Services, Aerotermia, Projects, Process, Testimonials, Zone, FAQ, Contact });
