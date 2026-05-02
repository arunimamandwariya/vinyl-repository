import { motion } from 'framer-motion'

export default function VinylRecord({ record, size = 160, isActive, isPlaying, onClick, style }) {
  const labelSize = size * 0.42

  return (
    <motion.div
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, #1e1e1e 0%, #0a0a0a 100%)',
        position: 'relative',
        cursor: 'pointer',
        flexShrink: 0,
        ...style,
      }}
      whileHover={{ scale: 1.04, y: -8 }}
      animate={isPlaying ? { rotate: 360 } : {}}
      transition={
        isPlaying
          ? { rotate: { duration: 6, repeat: Infinity, ease: 'linear' } }
          : { duration: 0.25 }
      }
    >
      {/* Groove rings */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(255,255,255,0.022) 2.4px, transparent 2.8px)',
      }} />

      {/* Shine */}
      <div style={{
        position: 'absolute', top: '10%', left: '12%',
        width: '28%', height: '28%', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, transparent 70%)',
        transform: 'rotate(-40deg)',
      }} />

      {/* Label */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: labelSize, height: labelSize,
        borderRadius: '50%',
        background: record.labelBg,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: 6,
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
      }}>
        {/* Center hole */}
        <div style={{
          position: 'absolute',
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#111',
          border: '1.5px solid rgba(255,255,255,0.2)',
          zIndex: 3,
        }} />

        <div style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: Math.max(7, size * 0.055),
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: record.textColor,
          lineHeight: 1.3,
          fontWeight: 400,
          position: 'relative',
          zIndex: 2,
          marginBottom: 10,
        }}>
          {record.shortLabel}
        </div>

        <div style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: Math.max(6, size * 0.04),
          color: record.textColor,
          opacity: 0.65,
          position: 'relative', zIndex: 2,
          marginTop: 8,
        }}>
          {record.rpm} RPM
        </div>
      </div>

      {/* Active glow ring */}
      {isActive && (
        <motion.div
          style={{
            position: 'absolute', inset: -3, borderRadius: '50%',
            border: `2px solid ${record.color}`,
            opacity: 0.6,
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}
