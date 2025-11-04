import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Showcase() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Featured work</h2>
          <p className="mt-3 text-white/70">A taste of recent builds focused on speed, clarity, and playful interaction.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <a key={i} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/0" />
              <div className="absolute inset-0 p-4 flex items-end">
                <div>
                  <div className="text-white font-medium">Project {i}</div>
                  <div className="text-white/60 text-sm">Brand site · SEO · Web animations</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
        <div>© {new Date().getFullYear()} Flames Studio — All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
