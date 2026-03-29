import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CASE_STUDIES = [
  {
    id: "hmi",
    title: "HMI Touch Panel",
    brand: "Siemens SIMATIC",
    description:
      "Cracked display, unresponsive touchscreen, and corrupted controller board. Full panel restoration including LCD replacement, touchscreen digitizer re-lamination, and controller board component-level repair.",
    fault: "Cracked LCD + unresponsive touch",
    fix: "Display & controller board replaced",
    before: "/assets/generated/hmi-before.dim_800x600.jpg",
    after: "/assets/generated/hmi-after.dim_800x600.jpg",
  },
  {
    id: "cnc",
    title: "CNC Monitor",
    brand: "Fanuc Series 21i",
    description:
      "No display output, burnt capacitors on the inverter board, and backlight failure. Complete diagnostic, board-level component replacement, and verified CNC interface functionality restored.",
    fault: "No display, inverter board burnt",
    fix: "Capacitor replacement + backlight",
    before: "/assets/generated/cnc-before.dim_800x600.jpg",
    after: "/assets/generated/cnc-after.dim_800x600.jpg",
  },
  {
    id: "psu",
    title: "Industrial Power Supply",
    brand: "Siemens SITOP",
    description:
      "Catastrophic failure from voltage surge, multiple burnt MOSFETs, blown capacitors, and damaged EMI filter. Component-level repair with full load testing before return to service.",
    fault: "Voltage surge damage, no output",
    fix: "MOSFET + capacitor replacement",
    before: "/assets/generated/psu-before.dim_800x600.jpg",
    after: "/assets/generated/psu-after.dim_800x600.jpg",
  },
];

function CaseStudyCard({
  study,
  index,
}: { study: (typeof CASE_STUDIES)[0]; index: number }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      className="rounded-2xl border overflow-hidden"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-ocid={`gallery.item.${index + 1}`}
    >
      {/* Images: side by side on desktop, toggle on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Before */}
        <div className="relative">
          <img
            src={study.before}
            alt={`${study.title} before repair`}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: "oklch(0.15 0.04 25 / 0.85)",
              color: "oklch(0.80 0.12 25)",
              backdropFilter: "blur(8px)",
            }}
          >
            ⚠ Before
          </div>
        </div>
        {/* After */}
        <div className="relative">
          <img
            src={study.after}
            alt={`${study.title} after repair`}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: "oklch(0.15 0.06 150 / 0.85)",
              color: "oklch(0.78 0.15 150)",
              backdropFilter: "blur(8px)",
            }}
          >
            ✓ After
          </div>
          <Badge
            className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wide"
            style={{
              backgroundColor: "var(--amber)",
              color: "oklch(0.1 0.02 55)",
            }}
          >
            Repaired
          </Badge>
        </div>
      </div>

      {/* Mobile toggle view */}
      <div className="md:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={showAfter ? "after" : "before"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={showAfter ? study.after : study.before}
              alt={showAfter ? "After repair" : "Before repair"}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-3 right-3 px-4 py-2 rounded-full text-xs font-bold transition-all"
          style={{
            backgroundColor: showAfter ? "var(--steel-blue)" : "var(--amber)",
            color: showAfter ? "white" : "oklch(0.1 0.02 55)",
          }}
          data-ocid={`gallery.toggle.${index + 1}`}
        >
          {showAfter ? "Show Before" : "Show After"}
        </button>
      </div>

      {/* Info */}
      <div
        className="p-6 border-t"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-lg font-extrabold text-white uppercase tracking-tight">
              {study.title}
            </h3>
            <p className="text-xs" style={{ color: "var(--steel-blue)" }}>
              {study.brand}
            </p>
          </div>
          <Badge
            variant="outline"
            className="text-xs whitespace-nowrap"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--text-muted)",
            }}
          >
            Case Study
          </Badge>
        </div>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "oklch(0.70 0.03 240)" }}
        >
          {study.description}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "oklch(0.15 0.04 25 / 0.3)" }}
          >
            <div
              className="text-xs font-bold uppercase tracking-wide mb-1"
              style={{ color: "oklch(0.70 0.12 25)" }}
            >
              Fault
            </div>
            <div className="text-xs text-white">{study.fault}</div>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "oklch(0.15 0.05 150 / 0.3)" }}
          >
            <div
              className="text-xs font-bold uppercase tracking-wide mb-1"
              style={{ color: "oklch(0.72 0.15 150)" }}
            >
              Fix Applied
            </div>
            <div className="text-xs text-white">{study.fix}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function GalleryPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.14 0.05 250) 0%, oklch(0.10 0.02 240) 100%)",
        }}
        data-ocid="gallery.section"
      >
        <div
          className="absolute left-0 bottom-0 w-3/4 h-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at left bottom, var(--amber), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6 border"
              style={{
                color: "var(--amber)",
                borderColor: "oklch(0.72 0.18 55 / 0.3)",
                background: "oklch(0.72 0.18 55 / 0.08)",
              }}
            >
              Before &amp; After
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
              Repair <span style={{ color: "var(--amber)" }}>Gallery</span>
            </h1>
            <p
              className="text-base md:text-lg max-w-xl"
              style={{ color: "oklch(0.72 0.04 240)" }}
            >
              See the transformation — real case studies from our repair
              workshop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CASE_STUDIES.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section
        className="py-12 border-t text-center"
        style={{
          backgroundColor: "oklch(0.11 0.025 240)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          All repairs are performed by certified technicians with
          component-level expertise.
          <span className="ml-2" style={{ color: "var(--amber)" }}>
            Your equipment is in safe hands.
          </span>
        </p>
      </section>
    </div>
  );
}
