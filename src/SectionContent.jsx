export function IntroContent() {
  return (
    <div className="fade-up">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 400, color: '#1C1410', lineHeight: 1.2, marginBottom: '0.4rem' }}>
        Arunima Mandwariya
      </h2>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {['Political Science', 'China Studies', 'Political Sociology'].map(t => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(196,120,58,0.15)', paddingTop: '1.2rem', marginBottom: '1.2rem' }}>
        {[
          `I'm Arunima Mandwariya, a Political Science student interested in migration, political economy, and political sociology, with a growing focus on China studies and state-society relations.`,
          `I am particularly curious about how states regulate movement, labour, identity, and everyday life through internal migration systems like China's Hukou framework.`,
          `Beyond academics, I'm a naturally curious person who enjoys asking questions, thinking through possible solutions or interventions, and often turning those ideas into projects. I enjoy working through logistics (spreadsheets are a personal favourite) and I tend to work best in structured settings.`,
          `Over the years, I have worked across student leadership, publications, social media, research, and event management roles. `,
          `Outside work, I'm also interested in stories of textiles, languages, and food.`,
        ].map((p, i) => (
          <p key={i} style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#4A3428', fontWeight: 300, marginBottom: '0.9rem' }}>{p}</p>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(196,120,58,0.15)', paddingTop: '1.2rem' }}>
        <p className="section-eyebrow mb-3">Technical Skills</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['R', 'Python', 'Excel', 'DaVinci Resolve', 'Canva'].map(s => (
            <span key={s} className="tag-pill">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PublicationsContent() {
  return (
    <div className="fade-up">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 400, fontStyle: 'italic', color: '#1C1410', marginBottom: '1.8rem' }}>
        The Archive
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        {/* Pub 1 */}
        <div className="pub-card" style={{ padding: '1.2rem 1.4rem', borderRadius: '0 4px 4px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="tag-pill">PARI</span>
            <span className="tag-pill">Photo-Essay</span>
            <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', color: '#8B7355', letterSpacing: '0.1em' }}>June 2025</span>
          </div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: '#1C1410', marginBottom: '0.5rem' }}>
            In Indore: Printing on Thin Margins
          </h3>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#5A4030', fontWeight: 300, marginBottom: '0.8rem' }}>
            I spent time learning about Indian textile traditions. While interning at People's Archive of Rural India, I had the opportunity to report a story that brought those interests together. This photo-essay follows a family of hand block printers who migrated from Chanderi to Indore, tracing how their craft survives through intergenerational knowledge, gendered labour, and quiet resilience in the face of economic uncertainty.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="https://ruralindiaonline.org/article/in-indore-printing-on-thin-margins" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4783A', textDecoration: 'none', borderBottom: '1px solid rgba(196,120,58,0.4)', paddingBottom: '1px' }}>Read Article →</a>          </div>
        </div>

        {/* Pub 2 */}
        <div className="pub-card" style={{ padding: '1.2rem 1.4rem', borderRadius: '0 4px 4px 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="tag-pill">PARI Library</span>
            <span className="tag-pill">Data Analysis</span>
            <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', color: '#8B7355', letterSpacing: '0.1em' }}>June 2024</span>
          </div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: '#1C1410', marginBottom: '0.5rem' }}>
            Analysis of Survey on Household Consumption Expenditure: 2022–23
          </h3>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#5A4030', fontWeight: 300, marginBottom: '0.8rem' }}>
            A deep dive into India's 2022–23 household consumption survey. I unpacked what the numbers say (and don't say) about inequality, rising non-food expenditure, and regional divides. I also looked at how the survey may have overlooked the realities of the poorest households, raising questions about the validity of data overall.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="https://ruralindiaonline.org/en/library/resource/survey-on-household-consumption-expenditure-2022-23/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4783A', textDecoration: 'none', borderBottom: '1px solid rgba(196,120,58,0.4)', paddingBottom: '1px' }}>Read Analysis →</a>
            <span style={{ color: '#C4783A', opacity: 0.3 }}>|</span>
            <a href="https://ruralindiaonline.org/en/library/search?q=arunima+Mandwariya&type=resource" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B7355', textDecoration: 'none', borderBottom: '1px solid rgba(139,115,85,0.3)', paddingBottom: '1px' }}>Other Publications at PARI →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsContent() {
  return (
    <div className="fade-up">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 400, fontStyle: 'italic', color: '#1C1410', marginBottom: '1.8rem' }}>
        What I Built
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        {/* Project 1 */}
        <div style={{ background: 'rgba(240,235,227,0.7)', border: '1px solid rgba(196,120,58,0.15)', borderRadius: 4, padding: '1.4rem', transition: 'all 0.2s' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="tag-pill">Passion Project</span>
            </div>
          </div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', color: '#1C1410', marginBottom: '0.6rem' }}>
            #WhisperOutLoud
          </h3>
          <p style={{ fontSize: '0.87rem', lineHeight: 1.78, color: '#5A4030', fontWeight: 300, marginBottom: '1rem' }}>
            I found myself thinking about the irony of a menstrual hygiene brand being called Whisper in the 21st century. That thought became the starting point. What began as a reflection on language and social attitudes evolved into a market strategy and awareness campaign for Procter &amp; Gamble, addressing gaps in menstrual health awareness among first-time menstruators in India.
            <br /><br />
            Through market sizing, consumer segmentation, and behavioural analysis, I identified barriers to early product adoption and designed a scalable multi-channel outreach strategy combining schools, CSR partnerships, and digital engagement. At its core, #WhisperOutLoud sits at the intersection of gender, consumer behaviour, and strategy.
          </p>
          <a href="https://www.canva.com/design/DAGqzQV3gNY/AAip03D6cVkw8fMwphumcg/edit" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4783A', textDecoration: 'none', borderBottom: '1px solid rgba(196,120,58,0.4)', paddingBottom: '1px' }}>View Full Deck →</a>
        </div>

        {/* Project 2 */}
        <div style={{ background: 'rgba(240,235,227,0.7)', border: '1px solid rgba(196,120,58,0.15)', borderRadius: 4, padding: '1.4rem' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
            <span className="tag-pill">Research</span>
          </div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', color: '#1C1410', marginBottom: '0.6rem' }}>
            Impact of Female Human Capital on Child Learning Outcomes
          </h3>
          <p style={{ fontSize: '0.87rem', lineHeight: 1.78, color: '#5A4030', fontWeight: 300, marginBottom: '1rem' }}>
            For Data Science for Social Sciences, a friend and I examined how women's education and workforce participation shape foundational learning outcomes for children across Indian districts. A data-driven look at the downstream effects of female human capital investment.
          </p>
          <a href="https://drive.google.com/file/d/1e3AQlxY8m2Mwrjq5edGK0Eu_jQ5vTSo5/view" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4783A', textDecoration: 'none', borderBottom: '1px solid rgba(196,120,58,0.4)', paddingBottom: '1px' }}>Read Full Report →</a>
        </div>
      </div>
    </div>
  )
}

export function WritingContent() {
  return (
    <div className="fade-up">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 400, fontStyle: 'italic', color: '#1C1410', marginBottom: '0.5rem' }}>
        Essays & Notes
      </h2>
      <p style={{ fontSize: '0.88rem', color: '#8B7355', fontStyle: 'italic', marginBottom: '1.8rem', fontWeight: 300 }}>Late-night thinking, research reflections, and longer reads.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Essay 1 */}
        <div style={{ borderBottom: '1px solid rgba(196,120,58,0.12)', paddingBottom: '1.2rem' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="tag-pill">Substack</span>
            <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', color: '#8B7355' }}>12 min read</span>
          </div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.05rem', color: '#1C1410', marginBottom: '0.5rem', lineHeight: 1.4 }}>
            The Company That Runs China's Digital Life: Tencent, the State, and What It Means for Everyone Using Its Services
          </h3>
          <a href="https://arunimamandwariya.substack.com/p/the-company-that-runs-chinas-digital" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4783A', textDecoration: 'none', borderBottom: '1px solid rgba(196,120,58,0.4)', paddingBottom: '1px' }}>Read on Substack →</a>
        </div>

        {/* Essay 2 — coming soon */}
        <div style={{ borderBottom: '1px solid rgba(196,120,58,0.12)', paddingBottom: '1.2rem', opacity: 0.65 }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="tag-pill" style={{ opacity: 0.6 }}>Coming Soon</span>
            <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', color: '#8B7355' }}>Draft</span>
          </div>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.05rem', color: '#5A4030', lineHeight: 1.4 }}>
            What if Rahul and Bilawal were friends?
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#8B7355', fontStyle: 'italic', marginTop: '0.4rem' }}>work in progress</p>
        </div>
      </div>
    </div>
  )
}

export function ResumeContent() {
  return (
    <div className="fade-up">
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 400, fontStyle: 'italic', color: '#1C1410', marginBottom: '1.8rem' }}>
        Résumé
      </h2>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {[
          { label: 'Consulting Resume', href: 'https://drive.google.com/file/d/1MK8jQq_ns7F9pqCdEBb3itFRMV_qppSe/view?usp=sharing' },
          { label: 'Academic Resume', href: 'https://drive.google.com/file/d/13iD0yohwS0SgKoW6kHuSmmf9WBz7O0Da/view?usp=share_link' },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#F5ECD7',
            background: '#C4783A', padding: '12px 22px', borderRadius: 2,
            textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#A05F28'}
          onMouseLeave={e => e.currentTarget.style.background = '#C4783A'}
          >
            ↓ {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export function ContactContent() {
  return (
    <div className="fade-up">
      <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 400, fontStyle: 'italic', color: '#1C1410', marginBottom: '0.6rem' }}>
        Say Hello
      </h2>
      <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#5A4030', fontWeight: 300, fontStyle: 'italic', marginBottom: '2rem' }}>
        I'm always open to conversations about research, collaboration, or just a good exchange of ideas. Feel free to reach out.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {[
          { platform: 'Email', value: 'arunima.mandwariya_ug2023@ashoka.edu.in', href: 'mailto:arunima.mandwariya_ug2023@ashoka.edu.in' },
          { platform: 'LinkedIn', value: 'linkedin.com/in/arunima-mandwariya', href: 'https://www.linkedin.com/in/arunima-mandwariya/' },
          { platform: 'Substack', value: 'arunimamandwariya.substack.com', href: 'https://arunimamandwariya.substack.com/' },
        ].map(({ platform, value, href }) => (
          <a key={platform} href={href} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 18px',
            border: '1px solid rgba(196,120,58,0.2)',
            borderRadius: 3,
            textDecoration: 'none',
            background: 'rgba(248,245,240,0.8)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(196,120,58,0.07)'; e.currentTarget.style.borderColor = 'rgba(196,120,58,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(248,245,240,0.8)'; e.currentTarget.style.borderColor = 'rgba(196,120,58,0.2)'; }}
          >
            <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4783A', flexShrink: 0 }}>{platform}</span>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.9rem', color: '#2C1A0E', fontWeight: 300, textAlign: 'right', marginLeft: '1rem', wordBreak: 'break-all' }}>{value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}