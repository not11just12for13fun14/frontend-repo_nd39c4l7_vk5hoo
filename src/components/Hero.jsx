import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90svh] grid place-items-center overflow-clip">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95" />

      {/* Hero copy */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
        >
          Design your next unforgettable journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-lg text-blue-100/90"
        >
          Immersive destinations, curated routes, and cinematic visuals. Scroll to explore with smooth parallax and motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#destinations" className="inline-flex items-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-95 transition">
            Start Exploring
          </a>
          <a href="#gallery" className="inline-flex items-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white/90 backdrop-blur hover:bg-white/15 transition">
            View Gallery
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
