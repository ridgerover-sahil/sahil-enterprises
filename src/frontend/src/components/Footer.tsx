import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "oklch(0.10 0.025 240)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--steel-blue), oklch(0.45 0.14 240))",
                }}
              >
                SE
              </div>
              <div>
                <div className="font-bold text-white text-sm uppercase tracking-widest">
                  Sahil Enterprises
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Industrial Electronics Repair
                </div>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              All Industrial Electronic Repairing – All Make, All Brand, All
              Type.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--steel-blue)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--steel-blue)" }}
            >
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={14} style={{ color: "var(--steel-blue)" }} />
                <a
                  href="tel:+919011360511"
                  className="hover:text-white transition-colors"
                >
                  +91 90113 60511
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={14} style={{ color: "var(--steel-blue)" }} />
                <a
                  href="tel:+919604320271"
                  className="hover:text-white transition-colors"
                >
                  +91 9604320271
                </a>
              </li>
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "var(--steel-blue)" }}
                />
                <span>
                  Sant Dnyaneshwar Nagar, Moi, Pune, Maharashtra 410501
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid var(--border-subtle)",
            color: "var(--text-muted)",
          }}
        >
          <span>© {year} SAHIL ENTERPRISES. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ❤ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
