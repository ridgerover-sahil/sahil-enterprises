import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  ChevronRight,
  Clock,
  Cog,
  DollarSign,
  Factory,
  Package,
  Phone,
  Server,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const BRANDS = [
  "ABB",
  "Bosch",
  "Rexroth",
  "Fanuc",
  "Siemens",
  "Mitsubishi",
  "Hitachi",
  "Philips",
  "Sony",
  "Honeywell",
  "Allen Bradley",
  "Lenze",
  "Delta",
  "Omron",
  "Toshiba",
  "Fagor",
  "Fuji",
  "Zeiss",
  "Artech",
  "Kuka",
  "Comau",
  "Motan",
  "Bystronic",
];

const INDUSTRIES = [
  { icon: Cog, label: "CNC Machines" },
  { icon: Factory, label: "Injection Molding Machines" },
  { icon: Server, label: "Industrial Automation" },
  { icon: Wrench, label: "Manufacturing Equipment" },
  { icon: Package, label: "Factory Control Systems" },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Deep Expertise",
    desc: "Specialists in industrial electronics with years of hands-on repair experience across all segments.",
  },
  {
    icon: Wrench,
    title: "Multi-brand Support",
    desc: "We service 23+ major brands — ABB, Siemens, Fanuc, Mitsubishi, and many more.",
  },
  {
    icon: Clock,
    title: "Fast Diagnosis",
    desc: "Quick fault identification and transparent turnaround to minimize your downtime.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    desc: "Affordable repair vs. replacement — saving you significant capital expenditure.",
  },
  {
    icon: UserCheck,
    title: "Skilled Team",
    desc: "Certified technicians with deep expertise in industrial electronic systems.",
  },
];

const STATS = [
  { value: "23+", label: "Brands Supported" },
  { value: "11+", label: "Service Types" },
  { value: "5+", label: "Industries Served" },
  { value: "100%", label: "Commitment" },
];

export function HomePage() {
  const marqueeItems = [
    ...BRANDS.map((b, i) => ({ brand: b, key: `a-${i}` })),
    ...BRANDS.map((b, i) => ({ brand: b, key: `b-${i}` })),
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/workshop-hero.dim_1400x700.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.08 0.03 240 / 0.92) 0%, oklch(0.12 0.04 240 / 0.85) 50%, oklch(0.10 0.05 250 / 0.90) 100%)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: "oklch(0.58 0.15 240 / 0.08)" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8 border"
              style={{
                color: "oklch(0.75 0.14 240)",
                borderColor: "oklch(0.58 0.15 240 / 0.4)",
                background: "oklch(0.58 0.15 240 / 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Industrial Electronics Repair Specialists
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-4 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-white">SAHIL</span>{" "}
            <span style={{ color: "var(--steel-blue)" }}>ENTERPRISES</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.82 0.02 240)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            All Industrial Electronic Repairing –{" "}
            <em style={{ color: "var(--amber)" }}>
              All Make, All Brand, All Type.
            </em>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link to="/services" data-ocid="hero.primary_button">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-xl transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--steel-blue)",
                  color: "white",
                  boxShadow: "0 0 24px oklch(0.58 0.15 240 / 0.4)",
                }}
              >
                Our Services <ChevronRight size={16} />
              </button>
            </Link>
            <Link to="/contact" data-ocid="hero.secondary_button">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-xl border transition-all hover:scale-105"
                style={{
                  borderColor: "oklch(0.72 0.18 55 / 0.6)",
                  color: "var(--amber)",
                  background: "oklch(0.72 0.18 55 / 0.08)",
                }}
              >
                <Phone size={15} /> Get Quote
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Scroll
          </span>
          <div
            className="w-5 h-9 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ backgroundColor: "var(--steel-blue)" }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section
        className="py-8 border-y"
        style={{
          backgroundColor: "oklch(0.16 0.035 240)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="text-3xl font-extrabold"
                  style={{ color: "var(--steel-blue)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div
          className="absolute inset-0 dot-grid opacity-30"
          style={{ backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--steel-blue)" }}
            >
              Our Edge
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
              Why Choose Us
            </h2>
            <div
              className="mx-auto mt-4 h-1 w-16 rounded-full"
              style={{ backgroundColor: "var(--amber)" }}
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                className="steel-card p-6 rounded-xl text-center group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "oklch(0.58 0.15 240 / 0.15)" }}
                >
                  <item.icon size={24} style={{ color: "var(--steel-blue)" }} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section
        className="py-16 overflow-hidden border-y"
        style={{
          backgroundColor: "oklch(0.11 0.025 240)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
            style={{ color: "var(--steel-blue)" }}
          >
            Trusted Partners
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            Brands We Support
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-marquee"
            style={{ width: "max-content" }}
          >
            {marqueeItems.map((item) => (
              <div
                key={item.key}
                className="px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap border transition-colors hover:border-[var(--steel-blue)] cursor-default"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  color: "oklch(0.80 0.03 240)",
                }}
              >
                {item.brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-mid)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--steel-blue)" }}
            >
              Sectors
            </div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Industries We Serve
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.label}
                className="flex items-center gap-3 px-6 py-4 rounded-xl border steel-card min-w-[210px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ind.icon size={20} style={{ color: "var(--amber)" }} />
                <span className="font-semibold text-sm text-white">
                  {ind.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.07 240), oklch(0.15 0.06 250))",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BarChart2
              size={40}
              className="mx-auto mb-4"
              style={{ color: "var(--amber)" }}
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
              Ready to Repair Your Equipment?
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "oklch(0.75 0.04 240)" }}
            >
              Fast diagnosis. Cost-effective solutions. All brands supported.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+919011360511"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--amber)",
                  color: "oklch(0.1 0.02 55)",
                }}
                data-ocid="cta.primary_button"
              >
                <Phone size={16} /> +91 90113 60511
              </a>
              <a
                href="tel:+919604320271"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm border transition-all hover:scale-105"
                style={{
                  borderColor: "oklch(0.58 0.15 240 / 0.5)",
                  color: "white",
                }}
                data-ocid="cta.secondary_button"
              >
                <Phone size={16} /> +91 9604320271
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
