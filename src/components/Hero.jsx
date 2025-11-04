import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh] lg:min-h-[80vh]">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Modern SEO & Web Design for Ambitious Brands
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-white/70 text-lg"
            >
              We craft playful, high-performance websites and search strategies that turn visitors into loyal customers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium shadow-sm hover:bg-white/90 transition"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:border-white/40 transition"
              >
                Our Services
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-white/60">
              <Stat label="Avg. SEO Lift" value="+142%" />
              <Stat label="Projects" value="120+" />
              <Stat label="Avg. CLS" value="0.05" />
            </div>
          </div>

          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-transparent blur-3xl" />
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-sm uppercase tracking-widest text-white/40">{label}</div>
      <div className="text-2xl font-semibold text-white">{value}</div>
    </div>
  );
}
