import { Search, Palette, Code, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Search,
    title: 'Technical SEO',
    desc: 'Site audits, Core Web Vitals, crawl optimization, schema, and indexing best practices.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Palette,
    title: 'Brand-first Design',
    desc: 'Playful, modern visuals with accessible color, type, and motion that convert.',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Lightning-fast Dev',
    desc: 'Clean, component-driven frontends with robust, scalable architectures.',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    icon: LineChart,
    title: 'Content & Growth',
    desc: 'Keyword research, content strategy, and analytics to fuel sustainable growth.',
    accent: 'from-amber-400 to-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-white/70">A seamless blend of strategy, creativity, and engineering — built for performance and delight.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-black shadow-lg`}> 
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
