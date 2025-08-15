
import React from 'react';
import Head from 'next/head';
import { CheckCircle2, Leaf, Trees, Cattle, Phone, Mail, MapPin } from 'lucide-react';

function BrandMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border" />
        <div className="absolute inset-0 flex items-center justify-center text-xs">C</div>
        <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full border" />
      </div>
      <span className="font-semibold tracking-wide">Crescent C Ranch</span>
    </div>
  );
}

function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#grazing', label: 'Grazing' },
    { href: '#cattle', label: 'Cattle' },
    { href: '#hunting', label: 'Hunting' },
    { href: '#carbon', label: 'Carbon' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <div className="container py-3 flex items-center justify-between">
        <BrandMark />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gray-700">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent" />
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Stewarding South Texas grasslands with <span className="underline decoration-wavy">AMP grazing</span>
          </h1>
          <p className="mt-5 text-gray-700 max-w-xl">
            Crescent C Ranch is a working livestock ranch in La Salle County, Texas. We manage cattle with Adaptive Multi‑Paddock grazing to restore native grasslands, improve water cycles, and build enduring productivity.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="btn btn-primary">Contact</a>
            <a href="#grazing" className="btn btn-outline">Our approach</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535242208474-9a2793260ca9?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode; }) {
  return (
    <div className="flex items-start gap-4">
      <div className="badge"><Icon className="h-5 w-5" /></div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-700">{children}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A family operation with a regeneration mandate</h2>
          <p className="mt-4 text-gray-700">
            We run a practical, profitable ranch that puts ecology to work. Rotational grazing, water distribution, and rest periods help us grow more grass and produce resilient cattle while improving wildlife habitat.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <Feature icon={CheckCircle2} title="10,000+ acres">Managed with planned grazing and water infrastructure.</Feature>
            <Feature icon={Trees} title="Grassland restoration">Focused on native mid‑grasses, brush management, and soil health.</Feature>
            <Feature icon={Leaf} title="Adaptive by default">Flexible plans that respond to rainfall and forage recovery.</Feature>
            <Feature icon={Cattle} title="Productive cattle">Low‑input cows selected for forage efficiency and temperament.</Feature>
          </div>
        </div>
        <div className="card">
          <div className="card-body space-y-4 text-sm text-gray-700">
            <p><strong>Grazing:</strong> Adaptive multi‑paddock rotations to match stock density with forage supply, protecting plants from second‑bite overgrazing and building drought reserves.</p>
            <p><strong>Wildlife & habitat:</strong> Planned rest and water improve cover and diversity for deer, quail, and pollinators.</p>
            <p><strong>People:</strong> We invest in stockmanship, water systems, and fencing so good management is easier to do every day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Grazing() {
  const bullets = [
    { title: "Planned rotations", body: "Short graze periods, long recovery. We move cattle frequently to let plants rebuild leaf and root reserves." },
    { title: "Stocking to conditions", body: "We match cattle numbers to rainfall and forage, creating runway in dry spells and capturing abundance after rain." },
    { title: "Water everywhere", body: "Distributed water points reduce trailing, improve manure/urine distribution, and keep cattle content." },
  ];
  return (
    <section id="grazing" className="bg-gradient-to-b from-white to-green-50/50 border-y">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our grazing philosophy</h2>
            <p className="mt-4 text-gray-700">
              Overgrazing is about time, not just numbers. We manage for quality graze and full recovery, which typically means more animal days per acre, steadier performance, and lower feed costs.
            </p>
            <div className="mt-6 space-y-5">
              {bullets.map((b) => (<Feature key={b.title} icon={CheckCircle2} title={b.title}>{b.body}</Feature>))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Reliable water infrastructure","Temporary + permanent fencing","Rested grass reserves","Low‑stress stockmanship"].map((item) => (
              <div key={item} className="card"><div className="card-body"><p className="font-medium">{item}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CattleSales() {
  return (
    <section id="cattle" className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Cattle & custom grazing</h2>
          <p className="mt-4 text-gray-700">
            We market practical, forage‑efficient cattle and consider custom grazing partnerships that align with our ecology‑first management. Reach out for availability and terms.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="btn btn-primary">Inquire</a>
            <a href="#hunting" className="btn btn-outline">Hunting</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Hunting() {
  return (
    <section id="hunting" className="bg-gradient-to-b from-white to-amber-50/40 border-y">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Hunting & habitat</h2>
            <p className="mt-4 text-gray-700">
              Planned grazing and brush work support healthy wildlife. We maintain a limited hunting program with an emphasis on safety, habitat stewardship, and fair‑chase ethics.
            </p>
          </div>
          <div className="card">
            <div className="card-body space-y-3 text-sm text-gray-700">
              <p>• Access by prior arrangement only.</p>
              <p>• Safety first—respect stock, gates, and water.</p>
              <p>• Pack it in, pack it out.</p>
              <p>• Follow all Texas Parks & Wildlife regulations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Carbon() {
  return (
    <section id="carbon" className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Carbon impact</h2>
          <p className="mt-4 text-gray-700">
            Our grazing builds root depth and soil cover, increasing the land’s capacity to store carbon and water. Through reputable standards and monitoring, our management contributes measurable <em>carbon impact reduction</em> while improving biodiversity.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <li className="card"><div className="card-body"><strong>Soil health:</strong> Ground cover, litter, aggregation.</div></li>
            <li className="card"><div className="card-body"><strong>Water:</strong> Infiltration, distribution, drought reserves.</div></li>
            <li className="card"><div className="card-body"><strong>Wildlife:</strong> Habitat structure and diversity.</div></li>
            <li className="card"><div className="card-body"><strong>People:</strong> Profitable, resilient ranching.</div></li>
          </ul>
        </div>
        <div className="card">
          <div className="card-body space-y-3 text-sm text-gray-700">
            <p>• Adaptive Multi‑Paddock (AMP) grazing planning.</p>
            <p>• Third‑party measurement & verification as applicable.</p>
            <p>• Transparent contracts and rancher‑first terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50 border-t">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-4 text-gray-700">Have a question about cattle, custom grazing, or partnerships? Send a note—we’ll get back to you soon.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (###) ###‑####</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@crescentcranch.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> La Salle County, Texas</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form className="space-y-3" action="https://formspree.io/f/your-endpoint" method="POST">
                <input name="name" placeholder="Your name" className="w-full rounded-xl border px-3 py-2" required />
                <input name="email" type="email" placeholder="Email" className="w-full rounded-xl border px-3 py-2" required />
                <textarea name="message" placeholder="How can we help?" rows={5} className="w-full rounded-xl border px-3 py-2" required />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">We respect gates—digital and real. No spam.</p>
                  <button className="btn btn-primary" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <BrandMark />
        <p>© {new Date().getFullYear()} Crescent C Ranch. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Crescent C Ranch</title>
        <meta name="description" content="Crescent C Ranch — Adaptive Multi‑Paddock grazing in South Texas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-sans">
        <Nav />
        <Hero />
        <About />
        <Grazing />
        <CattleSales />
        <Hunting />
        <Carbon />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
