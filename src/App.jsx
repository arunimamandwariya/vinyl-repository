import { useState, useEffect, useRef } from 'react'
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
  const [activeIdx, setActiveIdx] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [shelfOffset, setShelfOffset] = useState(0)
  const shelfRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768)
  check()
  window.addEventListener('resize', check)
  return () => window.removeEventListener('resize', check)
}, [])
  const recordSize = isMobile ? 110 : 200

  const activeRecord = activeIdx !== null ? records[activeIdx] : null
  const ContentComponent = activeRecord ? contentMap[activeRecord.id] : null

  function handleVinylClick(idx) {
    if (activeIdx === idx) {
      // Close
      setActiveIdx(null)
      setIsPlaying(false)
    } else {
      setActiveIdx(idx)
      setIsPlaying(true)
    }
  }

  function nextRecord() {
    if (activeIdx === null) {
      setActiveIdx(0)
      setIsPlaying(true)
    } else {
      const next = (activeIdx + 1) % records.length
      setActiveIdx(next)
    }
  }

  function prevRecord() {
    if (activeIdx === null) {
      setActiveIdx(records.length - 1)
      setIsPlaying(true)
    } else {
      const prev = (activeIdx - 1 + records.length) % records.length
      setActiveIdx(prev)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fbfbf8' }}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ textAlign: 'center', padding: '3.5rem 1rem 1.5rem' }}
      >
        <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8B7355', marginBottom: '0.6rem' }}>
          Record Crate · Portfolio
        </p>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#1C1410', lineHeight: 1.1, marginBottom: '0.4rem' }}>
          Arunima Mandwariya
        </h1>
      </motion.header>

      {/* Instruction bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '1.2rem' }}
      >
        <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B09070' }}>
          {isMobile ? '← swipe shelf to browse · tap to open →' : '↑ hover to browse · click to open · use arrows to navigate'}
        </p>
      </motion.div>

      {/* === SHELF SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.10px', position: 'relative', maxWidth: 1200, margin: '0 auto', overflow: 'visible' }}
      >
        {/* Left arrow */}
        <motion.button
          onClick={prevRecord}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'none', border: '1px solid rgba(196,120,58,0.3)',
            borderRadius: 3, color: '#C4783A', cursor: 'pointer',
            width: 44, height: 44, display: isMobile ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem', flexShrink: 0,
            transition: 'all 0.2s',
            marginRight: '1rem',
          }}
        >
          ‹
        </motion.button>

        {/* Shelf */}
        <div style={{ flex: 1, position: 'relative' }}>
          {/* Shelf board */}
          <div
            ref={shelfRef}
            className="wood-shelf"
            style={{
              borderRadius: '6px 6px 0 0',
              padding: isMobile ? '12px 10px 0' : '24px 28px 0',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: isMobile ? 'flex-start' : 'center',
              overflowX: isMobile ? 'auto' : 'visible',
              overflowY: 'visible',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              paddingBottom: isMobile ? 8 : 0,
              gap: 0,
              minHeight: isMobile ? 180 : 300,
              position: 'relative',
              borderTop: '2px solid #6B4423',
              borderLeft: '2px solid #4A2E18',
              borderRight: '2px solid #4A2E18',
            }}
          >
            {records.map((record, idx) => {
              const isActive = activeIdx === idx
              const offset = isActive ? -20 : 0
              const zIdx = isActive ? 20 : records.length - idx

              return (
                <motion.div
                  key={record.id}
                  style={{
                    position: 'relative',
                    zIndex: zIdx,
                    marginRight: isMobile ? 8 : -20,
                    flexShrink: 0,
                    cursor: 'pointer',
                    transformOrigin: 'bottom center',
                  }}
                  animate={{
                    y: offset,
                    rotate: isActive ? -2 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  onClick={() => handleVinylClick(idx)}
                  whileHover={{ y: -18, zIndex: 30 }}
                >
                  <VinylRecord
                    record={record}
                    size={recordSize}
                    isActive={isActive}
                    isPlaying={isActive && isPlaying}
                  />
                  {/* Label tab below vinyl */}
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

          {/* Shelf ledge */}
          <div
            className="wood-ledge"
            style={{ height: 20, borderRadius: '0 0 4px 4px', borderLeft: '2px solid #4A2E18', borderRight: '2px solid #4A2E18', borderBottom: '3px solid #1A0E05', position: 'relative', zIndex: 5 }}
          />

          {/* Record names below shelf */}
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 4px 0' }}>
            {records.map((r, i) => (
              <div
                key={r.id}
                onClick={() => handleVinylClick(i)}
                style={{
                  width: `${100 / records.length}%`,
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '0 4px',
                }}
              >
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
        </div>

        {/* Right arrow — prominent */}
        <motion.button
          onClick={nextRecord}
          whileHover={{ scale: 1.12, x: 3, boxShadow: '0 0 20px rgba(196,120,58,0.3)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'rgba(196,120,58,0.1)',
            border: '1px solid rgba(196,120,58,0.5)',
            borderRadius: 3, color: '#C4783A', cursor: 'pointer',
            width: 52, height: 52, display: isMobile ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', flexShrink: 0,
            transition: 'all 0.2s',
            marginLeft: '1rem',
          }}
        >
          ›
        </motion.button>
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
            style={{
              maxWidth: 720,
              margin: '1.5rem auto 4rem',
              padding: '0 1rem',
            }}
          >
            {/* Turntable header decoration */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.2rem',
              marginBottom: '1.2rem',
              padding: '14px 20px',
              background: '#1C1410',
              borderRadius: '6px 6px 0 0',
            }}>
              {/* Mini spinning vinyl */}
              <motion.div
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'radial-gradient(circle, #1e1e1e, #0a0a0a)',
                  flexShrink: 0, position: 'relative',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 14, height: 14, borderRadius: '50%',
                  background: activeRecord.labelBg,
                }} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 4, height: 4, borderRadius: '50%', background: '#111',
                }} />
              </motion.div>
              <div>
                <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(240,230,215,0.5)', textTransform: 'uppercase', marginBottom: 2 }}>Now Playing</p>
                <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1rem', color: '#F5ECD7' }}>{activeRecord.label}</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px', alignItems: 'center' }}>
                {/* Equalizer bars */}
                {[1,2,3,4].map(i => (
                  <motion.div
                    key={i}
                    style={{ width: 3, background: activeRecord.color, borderRadius: 2, opacity: 0.8 }}
                    animate={{ height: [8, 16 + i * 3, 8, 20, 10] }}
                    transition={{ duration: 0.8 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </div>

            {/* Content body */}
            <div
              className="content-panel"
              style={{ padding: '2rem 1.5rem', borderRadius: '0 0 6px 6px', maxHeight: 'none', overflowY: 'auto' }}
            >
              <ContentComponent />
            </div>

            {/* Close */}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button
                onClick={() => { setActiveIdx(null); setIsPlaying(false); }}
                style={{
                  fontFamily: '"DM Mono", monospace', fontSize: '9px',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#8B7355', background: 'none', border: 'none',
                  cursor: 'pointer', padding: '6px 12px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#C4783A'}
                onMouseLeave={e => e.target.style.color = '#8B7355'}
              >
                ↑ Return to shelf
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 1rem 3rem' }}>
        <p style={{ fontFamily: '"DM Mono", monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(139,115,85,0.4)' }}>
          Arunima Mandwariya · Ashoka University · 2027
        </p>
      </footer>
    </div>
  )
}
