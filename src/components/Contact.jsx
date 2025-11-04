import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Project Inquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@flames.studio?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s build something amazing</h2>
          <p className="mt-3 text-white/70">Tell us about your goals. We’ll come back with a concise plan and transparent pricing.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-2">Project details</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Timeline, budget range, and goals…"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4">
                <div className="text-white/60 text-sm inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@flames.studio</div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition"
                >
                  <Send className="h-4 w-4" /> Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-semibold">Why choose us</h3>
            <ul className="mt-4 space-y-3 text-white/70 text-sm">
              <li>• SEO-first approach from day one</li>
              <li>• Accessible, responsive, and fast by default</li>
              <li>• Analytics-driven iteration and growth</li>
              <li>• Friendly collaboration, clear communication</li>
            </ul>
            <div className="mt-6 text-xs text-white/50">Typical project timelines: 2–6 weeks</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-t from-transparent to-black" />
    </section>
  );
}
