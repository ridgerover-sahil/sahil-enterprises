import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitMessage } from "../hooks/useQueries";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submitMutation = useSubmitMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await submitMutation.mutateAsync(form);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send. Please call us directly.");
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.16 0.055 240) 0%, oklch(0.11 0.025 240) 100%)",
        }}
        data-ocid="contact.section"
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
              Contact <span style={{ color: "var(--steel-blue)" }}>Us</span>
            </h1>
            <p className="text-base" style={{ color: "oklch(0.70 0.03 240)" }}>
              Reach out for fast diagnosis and affordable repair of your
              industrial equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split contact */}
      <section className="py-0" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left panel — info */}
            <motion.div
              className="p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r"
              style={{
                backgroundColor: "oklch(0.16 0.04 240)",
                borderColor: "var(--border-subtle)",
              }}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--steel-blue)" }}
              >
                Reach Out
              </div>
              <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight mb-6">
                Get In Touch
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "oklch(0.70 0.03 240)" }}
              >
                Have a faulty industrial display, CNC monitor, or control card?
                Contact us now for fast diagnosis and cost-effective repair
                across all makes and brands.
              </p>

              {/* Phone */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.58 0.15 240 / 0.15)" }}
                  >
                    <Phone size={20} style={{ color: "var(--steel-blue)" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Phone
                    </div>
                    <a
                      href="tel:+919011360511"
                      className="block text-lg font-bold text-white hover:text-[var(--steel-blue)] transition-colors"
                      data-ocid="contact.link"
                    >
                      +91 90113 60511
                    </a>
                    <a
                      href="tel:+919604320271"
                      className="block text-lg font-bold text-white hover:text-[var(--steel-blue)] transition-colors mt-1"
                      data-ocid="contact.link"
                    >
                      +91 9604320271
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.58 0.15 240 / 0.15)" }}
                  >
                    <MapPin size={20} style={{ color: "var(--steel-blue)" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Address
                    </div>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      Sant Dnyaneshwar Nagar,
                      <br />
                      Moi Nighoje Road,
                      <br />
                      Near H.P. Petrol Pump,
                      <br />
                      Moi, Pune, Maharashtra 410501
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.45 0.15 150 / 0.2)" }}
                  >
                    <MessageCircle
                      size={20}
                      style={{ color: "oklch(0.72 0.18 150)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919011360511"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold hover:underline"
                      style={{ color: "oklch(0.72 0.18 150)" }}
                      data-ocid="contact.link"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919011360511"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--amber)",
                    color: "oklch(0.1 0.02 55)",
                  }}
                  data-ocid="contact.primary_button"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://wa.me/919011360511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border transition-all hover:scale-105"
                  style={{
                    borderColor: "oklch(0.72 0.18 150 / 0.5)",
                    color: "oklch(0.72 0.18 150)",
                  }}
                  data-ocid="contact.secondary_button"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right panel — form */}
            <motion.div
              className="p-10 lg:p-16 flex flex-col justify-center"
              style={{ backgroundColor: "var(--bg-base)" }}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--amber)" }}
              >
                Send Inquiry
              </div>
              <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight mb-6">
                Send a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.panel"
              >
                <div>
                  <label
                    htmlFor="c-name"
                    className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Your Name
                  </label>
                  <Input
                    id="c-name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="bg-transparent border-[var(--border-subtle)] text-white placeholder:text-[oklch(0.40_0.03_240)] focus:border-[var(--steel-blue)] h-12"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-phone"
                    className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Phone Number
                  </label>
                  <Input
                    id="c-phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="bg-transparent border-[var(--border-subtle)] text-white placeholder:text-[oklch(0.40_0.03_240)] focus:border-[var(--steel-blue)] h-12"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-message"
                    className="block text-xs font-semibold mb-2 uppercase tracking-wide"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="c-message"
                    placeholder="Describe your equipment and the issue..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={4}
                    className="bg-transparent border-[var(--border-subtle)] text-white placeholder:text-[oklch(0.40_0.03_240)] focus:border-[var(--steel-blue)] resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 font-bold text-sm tracking-wide transition-all hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--steel-blue)",
                    color: "white",
                  }}
                  disabled={submitMutation.isPending}
                  data-ocid="contact.submit_button"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {submitMutation.isSuccess && (
                  <p
                    className="text-xs text-center"
                    style={{ color: "oklch(0.72 0.18 150)" }}
                    data-ocid="contact.success_state"
                  >
                    ✓ Message sent! We'll call you back soon.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section
        className="border-t"
        style={{ borderColor: "var(--border-subtle)" }}
        data-ocid="contact.map_marker"
      >
        <div
          className="px-0 overflow-hidden"
          style={{ filter: "grayscale(20%) contrast(1.1) brightness(0.85)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.08!2d73.8187068!3d18.7103355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7eb9d37e6f9%3A0xfd2c2f8c0d7ad079!2sSAHIL%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sahil Enterprises Location"
          />
        </div>
      </section>
    </div>
  );
}
