import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "oklch(0.11 0.025 240 / 0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--border-subtle)",
      }}
      data-ocid="nav.panel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-wider"
              style={{
                background:
                  "linear-gradient(135deg, var(--steel-blue), oklch(0.45 0.14 240))",
                boxShadow: "0 0 16px oklch(0.58 0.15 240 / 0.4)",
              }}
            >
              SE
            </div>
            <div>
              <div className="font-bold text-white text-sm tracking-widest uppercase leading-tight">
                Sahil Enterprises
              </div>
              <div
                className="text-xs leading-tight"
                style={{ color: "var(--text-muted)" }}
              >
                Industrial Electronics Repair
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium transition-colors rounded-md"
                style={{
                  color: isActive(link.to) ? "white" : "var(--text-muted)",
                }}
                data-ocid="nav.link"
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--steel-blue)" }}
                  />
                )}
              </Link>
            ))}
            <Link to="/contact" data-ocid="nav.primary_button">
              <button
                type="button"
                className="ml-3 px-5 py-2 text-sm font-bold rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--amber)",
                  color: "oklch(0.1 0.02 55)",
                  boxShadow: "0 0 16px oklch(0.72 0.18 55 / 0.25)",
                }}
              >
                Get Quote
              </button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: "oklch(0.11 0.025 240)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-medium rounded-lg"
                  style={{
                    color: isActive(link.to) ? "white" : "var(--text-muted)",
                    backgroundColor: isActive(link.to)
                      ? "var(--bg-card)"
                      : "transparent",
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 text-sm font-bold rounded-lg"
                style={{
                  backgroundColor: "var(--amber)",
                  color: "oklch(0.1 0.02 55)",
                }}
                data-ocid="nav.primary_button"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
