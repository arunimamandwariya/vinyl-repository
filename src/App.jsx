import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VinylRecord from './VinylRecord'
import { records } from './data'
import {
  IntroContent, PublicationsContent, ProjectsContent,
  WritingContent, ResumeContent, ContactContent
} from './SectionContent'

const contentMap = {
  intro: IntroContent,
  publications: PublicationsContent,
  projects: ProjectsContent,
  writing: WritingContent,
  resume: ResumeContent,
  contact: ContactContent,
}

export default function App() {
  const [centerIdx, setCenterIdx] = useState(0)
  const [activeIdx, setActiveIdx] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [direction, setDirection] = useState(0)
  const dragStartX = useRef(null)

  const activeRecord = activeIdx !== null ? records[activeIdx] : null
  const ContentComponent = activeRecord ? contentMap[activeRecord.id] : null
  const centerRecord = records[centerIdx]

  const vw = typeof window !== 'undefined' ? window.innerWidth : 400
  const isDesktop = vw >= 768

  function goNext() {
    setDirection(1)
    setCenterIdx(i => (i + 1) % records.length)
    setActiveIdx(null)
    setIsPlaying(false)
  }

  function goPrev() {
    setDirection(-1)
    setCenterIdx(i => (i - 1 + records.length) % records.length)
    setActiveIdx(null)
    setIsPlaying(false)
  }

  function handleDesktopClick(idx) {
    if (activeIdx === idx) {
      setActiveIdx(null)
      setIsPlaying(false)
    } else {
      setActiveIdx(idx)
      setIsPlaying(true)
      setCenterIdx(idx)
    }
  }

  function handleCenterClick() {
    if (activeIdx === centerIdx) {
      setActiveIdx(null)
      setIsPlaying(false)
    } else {
      setActiveIdx(centerIdx)
      setIsPlaying(true)
    }
  }

  function handleDragStart(e) {
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  function handleDragEnd(e) {
    if (dragStartX.current === null) return
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diff = dragStartX.current - endX
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev()
    }
    dragStartX.current = null
  }

  // Mobile carousel sizing
  const centerSize = Math.min(vw * 0.62, 240)
  const sideSize = Math.min(vw * 0.36, 160)

  // Swipe animation variants
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 220 : -220, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -220 : 220, opacity: 0 }),
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fbfbf8', overflowX: 'hidden' }}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ textAlign: 'center', padding: 'clamp(1.5rem, 5vw, 3.5rem) 1rem 1rem' }}
      >
        <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8B7355', marginBottom: '0.6rem' }}>
          Record Crate · Portfolio
        </p>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 400, color: '#1C1410', lineHeight: 1.1, marginBottom: '0.4rem' }}>
          Arunima Mandwariya
        </h1>
      </motion.header>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '0.8rem' }}
      >
        <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B09070' }}>
          {isDesktop
            ? '↑ hover to browse · click to open · use arrows to navigate'
            : '← swipe or tap arrows · tap center record to open →'}
        </p>
      </motion.div>

      {/* === SHELF === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}
      >

        {/* =================== DESKTOP SHELF =================== */}
        {isDesktop && (
          <>
            <div
              className="wood-shelf"
              style={{
                borderRadius: '6px 6px 0 0',
                padding: '24px 28px 0',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                minHeight: 300,
                position: 'relative',
                overflow: 'visible',
                borderTop: '2px solid #6B4423',
                borderLeft: '2px solid #4A2E18',
                borderRight: '2px solid #4A2E18',
              }}
            >
              {records.map((record, idx) => {
                const isActive = activeIdx === idx
                return (
                  <motion.div
                    key={record.id}
                    style={{
                      position: 'relative',
                      zIndex: isActive ? 20 : records.length - idx,
                      marginRight: -20,
                      flexShrink: 0,
                      cursor: 'pointer',
                      transformOrigin: 'bottom center',
                    }}
                    animate={{ y: isActive ? -20 : 0, rotate: isActive ? -2 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    onClick={() => handleDesktopClick(idx)}
                    whileHover={{ y: -18, zIndex: 30 }}
                  >
                    <VinylRecord
                      record={record}
                      size={200}
                      isActive={isActive}
                      isPlaying={isActive && isPlaying}
                    />
                    <div style={{ textAlign: 'center', paddingTop: 4, paddingBottom: 8 }}>
                      <span style={{
                        fontFamily: '"DM Mono", monospace',
                        fontSize: '7px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: isActive ? '#C4783A' : 'rgba(240,230,215,0.5)',
                        transition: 'color 0.3s',
                      }}>
                        {record.shortLabel}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Desktop shelf ledge */}
            <div className="wood-ledge" style={{ height: 20, borderRadius: '0 0 4px 4px', borderLeft: '2px solid #4A2E18', borderRight: '2px solid #4A2E18', borderBottom: '3px solid #1A0E05', position: 'relative', zIndex: 5 }} />

            {/* Desktop record labels below */}
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 50px 0' }}>
              {records.map((r, i) => (
                <div key={r.id} onClick={() => handleDesktopClick(i)} style={{ textAlign: 'center', cursor: 'pointer', flex: 1 }}>
                  <span style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '8px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: activeIdx === i ? '#C4783A' : '#8B7355',
                    transition: 'color 0.3s',
                    fontWeight: activeIdx === i ? 400 : 300,
                  }}>
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* =================== MOBILE CAROUSEL =================== */}
        {!isDesktop && (
          <>
            <div
              className="wood-shelf"
              style={{
                borderRadius: '6px 6px 0 0',
                padding: '10px 0 0',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                minHeight: 'clamp(180px, 55vw, 300px)',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '2px solid #6B4423',
                borderLeft: '2px solid #4A2E18',
                borderRight: '2px solid #4A2E18',
                userSelect: 'none',
              }}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              {/* Left arrow */}
              <motion.button
                onClick={goPrev}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 30,
                  background: 'rgba(196,120,58,0.25)', border: '1px solid rgba(196,120,58,0.6)',
                  borderRadius: 4, color: '#F5ECD7', cursor: 'pointer',
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', fontWeight: 300,
                }}
              >
                ‹
              </motion.button>

              {/* Right arrow */}
              <motion.button
                onClick={goNext}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 30,
                  background: 'rgba(196,120,58,0.25)', border: '1px solid rgba(196,120,58,0.6)',
                  borderRadius: 4, color: '#F5ECD7', cursor: 'pointer',
                  width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', fontWeight: 300,
                }}
              >
                ›
              </motion.button>

              {/* Left peeking record */}
              <div style={{ position: 'absolute', left: -sideSize * 0.38, bottom: 16, zIndex: 5, opacity: 0.4, filter: 'brightness(0.5)', cursor: 'pointer' }} onClick={goPrev}>
                <VinylRecord record={records[(centerIdx - 1 + records.length) % records.length]} size={sideSize} isActive={false} isPlaying={false} />
              </div>

              {/* Center record — swipe animation */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={centerIdx}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
                  style={{
                    position: 'relative',
                    zIndex: 20,
                    cursor: 'pointer',
                    flexShrink: 0,
                    filter: activeIdx === centerIdx ? 'drop-shadow(0 0 24px rgba(196,120,58,0.5))' : 'none',
                  }}
                  onClick={handleCenterClick}
                >
                  <VinylRecord
                    record={centerRecord}
                    size={centerSize}
                    isActive={activeIdx === centerIdx}
                    isPlaying={activeIdx === centerIdx && isPlaying}
                  />
                  <div style={{ textAlign: 'center', paddingTop: 6, paddingBottom: 10 }}>
                    <span style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '8px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: activeIdx === centerIdx ? '#C4783A' : 'rgba(240,230,215,0.7)',
                    }}>
                      {centerRecord.shortLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right peeking record */}
              <div style={{ position: 'absolute', right: -sideSize * 0.38, bottom: 16, zIndex: 5, opacity: 0.4, filter: 'brightness(0.5)', cursor: 'pointer' }} onClick={goNext}>
                <VinylRecord record={records[(centerIdx + 1) % records.length]} size={sideSize} isActive={false} isPlaying={false} />
              </div>
            </div>

            {/* Mobile shelf ledge */}
            <div className="wood-ledge" style={{ height: 20, borderRadius: '0 0 4px 4px', borderLeft: '2px solid #4A2E18', borderRight: '2px solid #4A2E18', borderBottom: '3px solid #1A0E05', position: 'relative', zIndex: 5 }} />

            {/* Dot indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '10px 0 4px' }}>
              {records.map((_, i) => (
                <motion.div
                  key={i}
                  onClick={() => { setDirection(i > centerIdx ? 1 : -1); setCenterIdx(i); setActiveIdx(null); setIsPlaying(false); }}
                  animate={{ scale: i === centerIdx ? 1.4 : 1, opacity: i === centerIdx ? 1 : 0.35 }}
                  style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: i === centerIdx ? centerRecord.color : '#8B7355',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            {/* Record name */}
            <div style={{ textAlign: 'center', padding: '4px 0 0' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={centerIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  style={{ fontFamily: '"DM Mono", monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355' }}
                >
                  {centerRecord.label}
                </motion.span>
              </AnimatePresence>
            </div>
          </>
        )}
      </motion.div>

      {/* === ACTIVE RECORD LABEL === */}
      <div style={{ textAlign: 'center', padding: '1rem 1rem 0' }}>
        <AnimatePresence mode="wait">
          {activeRecord && (
            <motion.div
              key={activeRecord.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                background: 'rgba(240,235,227,0.8)',
                border: '1px solid rgba(196,120,58,0.25)',
                borderRadius: 3, padding: '8px 20px',
                maxWidth: '90vw', flexWrap: 'wrap', justifyContent: 'center',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: activeRecord.color, display: 'block', flexShrink: 0 }} />
              <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1rem', color: '#1C1410' }}>{activeRecord.label}</span>
              <span style={{ fontFamily: '"DM Mono", monospace', fontSize: '8px', color: '#8B7355', letterSpacing: '0.1em' }}>NOW PLAYING</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === CONTENT PANEL === */}
      <AnimatePresence mode="wait">
        {activeRecord && ContentComponent && (
          <motion.div
            key={activeRecord.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ maxWidth: 720, margin: '1.5rem auto 4rem', padding: '0 clamp(12px, 4vw, 1rem)' }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginBottom: '1.2rem',
              padding: 'clamp(10px, 3vw, 14px) clamp(14px, 4vw, 20px)',
              background: '#1C1410', borderRadius: '6px 6px 0 0',
            }}>
              <motion.div
                style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, background: 'radial-gradient(circle, #1e1e1e, #0a0a0a)', position: 'relative', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 12, height: 12, borderRadius: '50%', background: activeRecord.labelBg }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 4, height: 4, borderRadius: '50%', background: '#111' }} />
              </motion.div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(240,230,215,0.5)', textTransform: 'uppercase', marginBottom: 2 }}>Now Playing</p>
                <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 'clamp(0.85rem, 3vw, 1rem)', color: '#F5ECD7', margin: 0 }}>{activeRecord.label}</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px', alignItems: 'center', flexShrink: 0 }}>
                {[1,2,3,4].map(i => (
                  <motion.div key={i} style={{ width: 3, background: activeRecord.color, borderRadius: 2, opacity: 0.8 }} animate={{ height: [8, 16 + i * 3, 8, 20, 10] }} transition={{ duration: 0.8 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }} />
                ))}
              </div>
            </div>

            <div className="content-panel" style={{ padding: 'clamp(1rem, 4vw, 2rem) clamp(1rem, 4vw, 1.5rem)', borderRadius: '0 0 6px 6px' }}>
              <ContentComponent />
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button
                onClick={() => { setActiveIdx(null); setIsPlaying(false); }}
                style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 16px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#C4783A'}
                onMouseLeave={e => e.target.style.color = '#8B7355'}
              >
                ↑ Return to shelf
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ textAlign: 'center', padding: '2rem 1rem 3rem' }}>
        <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(139,115,85,0.4)' }}>
          Arunima Mandwariya · Ashoka University · 2027
        </p>
      </footer>
    </div>
  )
}