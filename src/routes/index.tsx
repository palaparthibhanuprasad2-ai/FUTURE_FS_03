import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Clock,
  Star,
  Utensils,
  Leaf,
  Sparkles,
  Users,
  Wallet,
  Timer,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import heroThali from "@/assets/hero-thali.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishMutton from "@/assets/dish-mutton.jpg";
import dishPrawn from "@/assets/dish-prawn.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishThali from "@/assets/dish-thali.jpg";
import dishMeals from "@/assets/dish-meals.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Appalaraju Gari Bhojana Hotel — Authentic Andhra Cuisine in Eluru" },
      {
        name: "description",
        content:
          "Traditional Andhra meals, biryani, mutton curry and fresh seafood in Powerpet, Eluru. Reserve your family table today at Appalaraju Gari Bhojana Hotel.",
      },
      { property: "og:title", content: "Appalaraju Gari Bhojana Hotel — Authentic Andhra Cuisine" },
      {
        property: "og:description",
        content: "Authentic Andhra flavors served with love since generations.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const PHONE = "+916302159936";
const WHATSAPP = "916302159936";

const dishes = [
  { name: "Andhra Meals", desc: "Unlimited traditional meals on banana leaf with curries, sambar & pickle.", img: dishMeals, tag: "Bestseller" },
  { name: "Chicken Biryani", desc: "Aromatic basmati layered with spiced chicken, slow-cooked dum style.", img: dishBiryani, tag: "Signature" },
  { name: "Mutton Curry", desc: "Fiery Andhra-style mutton simmered with hand-ground masalas.", img: dishMutton, tag: "Spicy" },
  { name: "Prawn Fry", desc: "Coastal prawns tossed with curry leaves, ginger & red chilli.", img: dishPrawn, tag: "Coastal" },
  { name: "Fish Pulusu", desc: "Tangy tamarind fish curry slow-cooked in traditional clay pot.", img: dishFish, tag: "Traditional" },
  { name: "Special Thali", desc: "Festive thali with rice, ghee, three curries, dal, papad & sweet.", img: dishThali, tag: "Family Pick" },
];

const features = [
  { icon: Utensils, title: "Authentic Andhra Taste", desc: "Recipes passed down through three generations." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Local, seasonal produce sourced every morning." },
  { icon: Sparkles, title: "Hygienic Kitchen", desc: "FSSAI-certified preparation with daily audits." },
  { icon: Users, title: "Family Dining", desc: "Spacious seating designed for families & groups." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Generous portions at honest, everyday prices." },
  { icon: Timer, title: "Quick Service", desc: "Hot meals at your table within 10 minutes." },
];

const reviews = [
  { name: "Ravi Kumar", text: "The Andhra meals here remind me of my grandmother's kitchen. Pure nostalgia on a banana leaf.", rating: 5 },
  { name: "Lakshmi Priya", text: "Best biryani in Eluru, no exaggeration. The mutton curry is a must-try for spice lovers.", rating: 5 },
  { name: "Suresh Babu", text: "Clean, friendly and incredibly affordable. We've been coming as a family for years.", rating: 5 },
  { name: "Anitha Reddy", text: "The fish pulusu is exactly how it's made back in the village. Absolutely authentic.", rating: 5 },
];

const galleryImages = [dishThali, gallery1, dishBiryani, gallery2, dishPrawn, gallery3, dishMeals, gallery4];

function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello! I'd like to reserve a table.%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0ATime: ${form.time}%0AGuests: ${form.guests}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#dishes", label: "Menu" },
    { href: "#why", label: "Why Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#reserve", label: "Reserve" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-3 md:py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full grid place-items-center" style={{ background: "var(--gradient-warm)" }}>
              <Utensils className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold" style={{ color: scrolled ? "var(--maroon)" : "var(--cream)" }}>Appalaraju Gari</div>
              <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: scrolled ? "var(--primary)" : "var(--gold)" }}>Bhojana Hotel</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition hover:text-primary ${scrolled ? "text-foreground" : "text-cream"}`}
                style={{ color: scrolled ? undefined : "var(--cream)" }}
              >
                {l.label}
              </a>
            ))}
            <a href="#reserve" className="btn-hero text-sm" style={{ padding: "0.6rem 1.3rem" }}>
              Reserve Table
            </a>
          </nav>

          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "var(--maroon)" : "var(--cream)" }}
          >
            {navOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {navOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container-x py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setNavOpen(false)}
                  className="text-foreground py-2 border-b border-border/60"
                >
                  {l.label}
                </a>
              ))}
              <a href="#reserve" onClick={() => setNavOpen(false)} className="btn-hero mt-2">Reserve Table</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroThali}
          alt="Traditional Andhra thali on banana leaf"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="container-x relative z-10 text-center py-32 animate-float-up" style={{ color: "var(--cream)" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--gold)] text-xs tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
            <Sparkles className="w-3.5 h-3.5" /> Eluru's Beloved Andhra Kitchen
          </span>
          <h1 className="mt-6 font-display font-bold leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            Authentic Andhra Flavors
            <br />
            <span style={{ background: "var(--gradient-warm)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              Since Generations
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg" style={{ color: "oklch(0.95 0.02 80 / 0.85)" }}>
            Experience the taste of traditional Andhra cuisine in Eluru — banana-leaf meals, fiery curries
            and coastal seafood served the way grandmothers intended.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setMenuOpen(true)} className="btn-hero">
              View Menu <ChevronRight className="w-4 h-4" />
            </button>
            <a href="#reserve" className="btn-outline-hero">Reserve Table</a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { v: "30+", l: "Years of Legacy" },
              { v: "50+", l: "Signature Dishes" },
              { v: "10k+", l: "Happy Families" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold" style={{ color: "var(--gold)" }}>{s.v}</div>
                <div className="text-xs md:text-sm mt-1 uppercase tracking-wider" style={{ color: "oklch(0.95 0.02 80 / 0.75)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img src={gallery1} alt="Restaurant interior" width={900} height={700} loading="lazy" className="rounded-3xl shadow-[var(--shadow-warm)] w-full h-auto" />
          </div>
          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}>
              A taste of <span className="text-gradient">home-cooked Andhra</span>, right in the heart of Eluru.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For decades, Appalaraju Gari Bhojana Hotel has been the favourite gathering spot for families
              who crave the genuine flavors of coastal Andhra Pradesh. Every dish is prepared from scratch,
              using stone-ground masalas, cold-pressed oils and produce sourced fresh each morning.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether it's a quick lunch on a banana leaf or a grand family thali, our kitchen treats every
              meal as a celebration of tradition, taste and togetherness.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { t: "Generational Recipes", d: "Three generations of culinary craft." },
                { t: "Banana Leaf Meals", d: "Served the traditional Andhra way." },
                { t: "Coastal Seafood", d: "Daily fresh catches from the coast." },
                { t: "Pure Ghee Cooking", d: "Rich aromas, honest ingredients." },
              ].map((i) => (
                <div key={i.t} className="p-4 rounded-xl bg-muted">
                  <div className="font-semibold text-secondary">{i.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{i.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISHES */}
      <section id="dishes" className="py-24" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow">Signature Dishes</span>
            <h2 className="section-title">Crafted with <span className="text-gradient">spice & soul</span></h2>
            <p className="text-muted-foreground">Our most-loved dishes — each one a recipe perfected over generations.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {dishes.map((d) => (
              <article key={d.name} className="dish-card group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider" style={{ background: "var(--gold)", color: "var(--maroon)" }}>
                    {d.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-secondary">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  <button onClick={() => setMenuOpen(true)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    View on menu <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-spice)", color: "var(--cream)" }}>
        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow" style={{ color: "var(--gold)" }}>Why Choose Us</span>
            <h2 className="section-title" style={{ color: "var(--cream)" }}>Six reasons families return, again and again</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-7 rounded-2xl border border-[color:var(--gold)]/30 backdrop-blur-sm transition hover:-translate-y-1" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                <div className="w-12 h-12 rounded-xl grid place-items-center mb-4" style={{ background: "var(--gradient-warm)" }}>
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "oklch(0.95 0.02 80 / 0.8)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-title">A feast for the <span className="text-gradient">eyes</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                <img
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-eyebrow">Reviews</span>
            <h2 className="section-title">Loved by <span className="text-gradient">families across Eluru</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="p-6 bg-card rounded-2xl shadow-[var(--shadow-soft)] border border-border">
                <div className="flex gap-0.5 mb-3" style={{ color: "var(--gold)" }}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">"{r.text}"</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="font-semibold text-secondary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Diner</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow">Reservation</span>
            <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}>
              Book your <span className="text-gradient">family table</span> today
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Reserve in seconds. We'll confirm via WhatsApp and have your favourite spot ready when you arrive.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3 items-start"><Phone className="w-5 h-5 text-primary mt-1" /><div><div className="font-semibold">Call us directly</div><a href={`tel:${PHONE}`} className="text-muted-foreground hover:text-primary">+91 63021 59936</a></div></div>
              <div className="flex gap-3 items-start"><Clock className="w-5 h-5 text-primary mt-1" /><div><div className="font-semibold">Open daily</div><div className="text-muted-foreground">11:00 AM – 11:00 PM</div></div></div>
              <div className="flex gap-3 items-start"><MapPin className="w-5 h-5 text-primary mt-1" /><div><div className="font-semibold">Find us</div><div className="text-muted-foreground">Near Old Bus Stand, GNT Road, Powerpet, Eluru</div></div></div>
            </div>
          </div>

          <form onSubmit={handleReserve} className="p-7 md:p-9 rounded-3xl bg-card shadow-[var(--shadow-warm)] border border-border">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full mx-auto grid place-items-center mb-4" style={{ background: "var(--gradient-warm)" }}>
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary">Reservation Sent!</h3>
                <p className="mt-2 text-muted-foreground">We've opened WhatsApp to confirm. See you soon!</p>
                <button type="button" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", time: "", guests: "2" }); }} className="mt-6 text-primary font-semibold">Make another reservation</button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-secondary mb-6">Reserve Your Table</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-medium">Full Name</span>
                    <input required maxLength={80} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-medium">Phone Number</span>
                    <input required type="tel" maxLength={15} pattern="[0-9 +\-]{7,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+91" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Date</span>
                    <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Time</span>
                    <input required type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-medium">Number of Guests</span>
                    <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="mt-1 w-full px-4 py-3 rounded-xl bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary">
                      {[1,2,3,4,5,6,7,8,10,12,"15+"].map((n) => <option key={n} value={n}>{n} {Number(n) === 1 ? "Guest" : "Guests"}</option>)}
                    </select>
                  </label>
                </div>
                <button type="submit" className="btn-hero w-full mt-6">Confirm Reservation</button>
                <p className="text-[11px] text-muted-foreground mt-3 text-center">By submitting, you'll be redirected to WhatsApp to confirm.</p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="contact" className="py-24" style={{ background: "var(--cream)" }}>
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Visit Us</span>
            <h2 className="section-title">Come dine <span className="text-gradient">with us</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/3] lg:aspect-auto">
              <iframe
                title="Restaurant location"
                src="https://www.google.com/maps?q=Powerpet,Eluru,Andhra+Pradesh&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-[var(--shadow-soft)] border border-border">
              <h3 className="font-display text-2xl font-bold text-secondary">Appalaraju Gari Bhojana Hotel</h3>
              <p className="mt-2 text-muted-foreground">Authentic Andhra meals served with love.</p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4"><div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-warm)" }}><MapPin className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Address</div><div className="text-muted-foreground text-sm">Near Old Bus Stand, GNT Road,<br />Powerpet, Eluru, Andhra Pradesh</div></div></div>
                <div className="flex gap-4"><div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-warm)" }}><Phone className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Phone</div><a href={`tel:${PHONE}`} className="text-muted-foreground text-sm hover:text-primary">+91 63021 59936</a></div></div>
                <div className="flex gap-4"><div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-warm)" }}><Clock className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Hours</div><div className="text-muted-foreground text-sm">Open daily, 11:00 AM – 11:00 PM</div></div></div>
              </div>
              <div className="mt-8 flex gap-3">
                <a href={`tel:${PHONE}`} className="btn-hero flex-1">Call Now</a>
                <a href="#reserve" className="btn-outline-hero flex-1" style={{ color: "var(--maroon)", borderColor: "var(--maroon)" }}>Reserve</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8" style={{ background: "var(--maroon)", color: "var(--cream)" }}>
        <div className="container-x grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full grid place-items-center" style={{ background: "var(--gradient-warm)" }}>
                <Utensils className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="font-display text-xl font-bold">Appalaraju Gari Bhojana Hotel</div>
            </div>
            <p className="mt-4 text-sm max-w-md" style={{ color: "oklch(0.95 0.02 80 / 0.75)" }}>
              Serving authentic Andhra flavors in Powerpet, Eluru for generations. Every meal is a celebration
              of tradition, family and pure home-cooked taste.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full grid place-items-center border border-[color:var(--gold)]/40 hover:bg-[color:var(--gold)] hover:text-[color:var(--maroon)] transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display text-lg font-bold mb-4" style={{ color: "var(--gold)" }}>Quick Links</div>
            <ul className="space-y-2 text-sm" style={{ color: "oklch(0.95 0.02 80 / 0.8)" }}>
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-[color:var(--gold)] transition">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-lg font-bold mb-4" style={{ color: "var(--gold)" }}>Contact</div>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.95 0.02 80 / 0.8)" }}>
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Near Old Bus Stand, GNT Road, Powerpet, Eluru</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-[color:var(--gold)]">+91 63021 59936</a></li>
              <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" />11:00 AM – 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="container-x mt-12 pt-6 border-t border-[color:var(--gold)]/20 text-center text-xs" style={{ color: "oklch(0.95 0.02 80 / 0.6)" }}>
          © {new Date().getFullYear()} Appalaraju Gari Bhojana Hotel. All rights reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi!%20I'd%20like%20to%20order%20from%20Appalaraju%20Gari%20Bhojana%20Hotel.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full grid place-items-center shadow-[var(--shadow-warm)] transition hover:scale-110"
        style={{ background: "#25D366", color: "white" }}
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-shimmer" style={{ background: "var(--gold)" }} />
      </a>

      {/* MENU MODAL */}
      {menuOpen && <MenuModal onClose={() => setMenuOpen(false)} />}
    </div>
  );
}

function MenuModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const menuSections = [
    {
      title: "Andhra Meals",
      items: [
        { n: "Veg Meals (Unlimited)", p: "₹150" },
        { n: "Non-Veg Meals", p: "₹220" },
        { n: "Special Andhra Thali", p: "₹280" },
        { n: "Banana Leaf Festive Meals", p: "₹320" },
      ],
    },
    {
      title: "Biryani & Rice",
      items: [
        { n: "Chicken Dum Biryani", p: "₹240" },
        { n: "Mutton Biryani", p: "₹320" },
        { n: "Prawn Biryani", p: "₹280" },
        { n: "Veg Biryani", p: "₹180" },
      ],
    },
    {
      title: "Curries & Specials",
      items: [
        { n: "Andhra Mutton Curry", p: "₹340" },
        { n: "Chicken Curry", p: "₹260" },
        { n: "Fish Pulusu", p: "₹290" },
        { n: "Prawn Fry", p: "₹310" },
        { n: "Gongura Mutton", p: "₹360" },
      ],
    },
    {
      title: "Beverages & Desserts",
      items: [
        { n: "South Indian Filter Coffee", p: "₹40" },
        { n: "Masala Chai", p: "₹30" },
        { n: "Buttermilk", p: "₹35" },
        { n: "Double Ka Meetha", p: "₹90" },
        { n: "Bobbatlu", p: "₹80" },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 animate-float-up" style={{ background: "oklch(0.15 0.05 30 / 0.7)", backdropFilter: "blur(6px)" }}>
      <div className="w-full max-w-3xl max-h-[90vh] overflow-auto bg-background rounded-3xl shadow-[var(--shadow-warm)] border border-border">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur">
          <div>
            <div className="section-eyebrow !mb-0">Our Menu</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary mt-1">Andhra Specialties</h3>
          </div>
          <button onClick={onClose} aria-label="Close menu" className="w-10 h-10 rounded-full grid place-items-center hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {menuSections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} /> {s.title}
              </h4>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item.n} className="flex justify-between items-baseline gap-4 pb-3 border-b border-dashed border-border">
                    <span className="text-foreground">{item.n}</span>
                    <span className="font-display font-bold text-secondary">{item.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-border bg-muted/40 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-sm text-muted-foreground">Prices inclusive of all taxes. Menu may vary daily.</p>
          <a href={`tel:${PHONE}`} className="btn-hero">Call to Order</a>
        </div>
      </div>
    </div>
  );
}
