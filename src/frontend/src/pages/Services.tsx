import {
  BarChart2,
  CircuitBoard,
  Cpu,
  GitMerge,
  Keyboard,
  Layers,
  LayoutDashboard,
  Monitor,
  Sliders,
  TouchpadIcon,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const FEATURED_SERVICES = [
  {
    icon: Monitor,
    title: "Industrial HMI Display Repair",
    desc: "Expert repair of all HMI display panels used in industrial automation and control systems. We diagnose touchscreen failures, backlight issues, controller board faults, and display degradation. Our technicians have hands-on experience with Siemens, Mitsubishi, Allen Bradley, and Fanuc HMI panels.",
    image: "/assets/generated/hmi-before.dim_800x600.jpg",
    badge: "Most Requested",
  },
  {
    icon: LayoutDashboard,
    title: "CNC Display Monitor Repair",
    desc: "Precision repair for CNC machine display monitors across all major manufacturers. We handle LCD panel replacement, driver board repair, power supply faults, and interface restoration. Compatible with FANUC, Siemens SINUMERIK, Mitsubishi, and Bosch controllers.",
    image: "/assets/generated/cnc-after.dim_800x600.jpg",
    badge: "Specialist Service",
  },
  {
    icon: Zap,
    title: "Industrial Power Supply Repair",
    desc: "Diagnosis and repair of industrial-grade power supply units for continuous operation. We handle capacitor replacements, transformer faults, voltage regulation issues, and short circuit damage. Saves up to 80% compared to OEM replacement costs.",
    image: "/assets/generated/psu-after.dim_800x600.jpg",
    badge: "High Value Savings",
  },
];

const OTHER_SERVICES = [
  {
    icon: Layers,
    title: "LCD / LED Panel Repair",
    desc: "Full-spectrum repair for industrial-grade LCD and LED display panels.",
  },
  {
    icon: BarChart2,
    title: "DRO Display Repair",
    desc: "Digital Readout display repair for lathes, mills, and precision machinery.",
  },
  {
    icon: Sliders,
    title: "Operator Panel Repair",
    desc: "Comprehensive repair of operator interface panels for industrial control.",
  },
  {
    icon: TouchpadIcon,
    title: "Touch Screen Repair",
    desc: "Professional touch screen panel repair for HMI interfaces.",
  },
  {
    icon: Keyboard,
    title: "Industrial Keyboard Repair",
    desc: "Repair and restoration of rugged industrial keyboards.",
  },
  {
    icon: GitMerge,
    title: "I/O Card Repair",
    desc: "Expert I/O card repair to restore full communication and signal processing.",
  },
  {
    icon: CircuitBoard,
    title: "Control Card Repair",
    desc: "Advanced repair of electronic control boards and PCBs.",
  },
  {
    icon: Cpu,
    title: "System Display Repair",
    desc: "End-to-end system display troubleshooting for complex setups.",
  },
];

const PRODUCTS = [
  { icon: Monitor, title: "Industrial Display Monitors" },
  { icon: TouchpadIcon, title: "HMI Touch Panels" },
  { icon: BarChart2, title: "DRO Systems" },
  { icon: Layers, title: "LCD / LED Screens" },
  { icon: Sliders, title: "Operator Panels" },
  { icon: Keyboard, title: "Industrial Keyboards" },
  { icon: Zap, title: "Power Supply Units" },
  { icon: GitMerge, title: "I/O Cards" },
  { icon: CircuitBoard, title: "Control Cards" },
];

export function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.16 0.06 240) 0%, oklch(0.11 0.03 240) 60%, oklch(0.14 0.05 250) 100%)",
        }}
        data-ocid="services.section"
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at right top, oklch(0.58 0.15 240), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 border"
              style={{
                color: "var(--steel-blue)",
                borderColor: "oklch(0.58 0.15 240 / 0.3)",
                background: "oklch(0.58 0.15 240 / 0.08)",
              }}
            >
              <Wrench size={14} /> What We Do
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
              Our <span style={{ color: "var(--steel-blue)" }}>Services</span>
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{ color: "oklch(0.75 0.03 240)" }}
            >
              Comprehensive industrial electronics repair covering HMI displays,
              CNC monitors, power supplies, I/O cards, and more — all makes, all
              brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services - alternating rows */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--amber)" }}
            >
              Featured
            </div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Core Repair Services
            </h2>
          </div>
          <div className="space-y-20">
            {FEATURED_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div
                    className="rounded-2xl overflow-hidden border"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-3 -right-3 px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "var(--amber)",
                      color: "oklch(0.1 0.02 55)",
                    }}
                  >
                    {service.badge}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "oklch(0.58 0.15 240 / 0.15)" }}
                  >
                    <service.icon
                      size={28}
                      style={{ color: "var(--steel-blue)" }}
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.72 0.03 240)" }}
                  >
                    {service.desc}
                  </p>
                  <div
                    className="mt-6 flex items-center gap-2 text-xs"
                    style={{ color: "var(--steel-blue)" }}
                  >
                    <span
                      className="w-8 h-px"
                      style={{ backgroundColor: "var(--steel-blue)" }}
                    />
                    All makes & brands supported
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of remaining services */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: "oklch(0.11 0.025 240)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--steel-blue)" }}
            >
              More Services
            </div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Additional Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OTHER_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                className="steel-card rounded-xl p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`services.item.${i + 4}`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "oklch(0.58 0.15 240 / 0.12)" }}
                >
                  <service.icon
                    size={22}
                    style={{ color: "var(--steel-blue)" }}
                  />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">
                  {service.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products horizontal scroll */}
      <section
        className="py-16 border-t"
        style={{
          backgroundColor: "var(--bg-mid)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "var(--amber)" }}
            >
              What We Supply
            </div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white">
              Products & Components
            </h2>
          </div>
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "var(--border-subtle) transparent",
            }}
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.title}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 p-5 rounded-xl border text-center min-w-[160px] transition-colors hover:border-[var(--steel-blue)]"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <p.icon size={28} style={{ color: "var(--steel-blue)" }} />
                <span className="text-xs font-semibold text-white leading-tight">
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
