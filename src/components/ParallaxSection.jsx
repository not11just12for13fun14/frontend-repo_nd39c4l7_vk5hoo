import { motion, useScroll, useTransform } from 'framer-motion'
import { Mountains, Sun, Camera } from 'lucide-react'
import { useRef } from 'react'

function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const yClouds = useTransform(scrollYProgress, [0, 1], ['-10%', '20%'])
  const yPeaks = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const yForeground = useTransform(scrollYProgress, [0, 1], ['10%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 1])

  return (
    <section ref={ref} id="destinations" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      {/* Parallax layers */}
      <motion.div style={{ y: yClouds, opacity }} className="absolute -top-10 left-1/2 -translate-x-1/2 h-64 w-[120%] rounded-[50%] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />
      <motion.div style={{ y: yPeaks }} className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-72 w-[120%] rounded-[50%] bg-gradient-to-r from-blue-600/20 to-emerald-500/20 blur-3xl" />
      <motion.div style={{ y: yForeground }} className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            title: 'Vast Mountain Ranges',
            icon: Mountains,
            text: 'Chase sunrise across ridgelines and breathe the thinnest, freshest air.'
          }, {
            title: 'Golden Light',
            icon: Sun,
            text: 'Plan shoots around magic hours and watch landscapes glow.'
          }, {
            title: 'Capture Stories',
            icon: Camera,
            text: 'From alleyways to ancient ruins, frame the moments that matter.'
          }].map(({ title, icon: Icon, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white shadow-lg shadow-blue-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
