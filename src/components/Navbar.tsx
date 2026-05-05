import { Instagram, Linkedin, Twitter, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Philosophy", href: "#" },
    { name: "Use Cases", href: "#" },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full px-6 py-4 md:px-28 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
              <div className="w-3 h-3 rounded-full border border-foreground/60" />
            </div>
            <span className="font-bold text-lg">Mindloop</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link, i) => (
              <div key={link.name} className="flex items-center gap-6">
                <a href={link.href} className="hover:text-foreground transition-colors">{link.name}</a>
                {i < navLinks.length - 1 && <span>•</span>}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
              <Instagram className="w-4 h-4" />
            </button>
            <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
          </div>

          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-medium mt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-muted-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-auto pb-12 flex flex-col gap-6">
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex items-center gap-6">
                <Instagram className="w-6 h-6 text-muted-foreground" />
                <Linkedin className="w-6 h-6 text-muted-foreground" />
                <Twitter className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">© 2026 Mindloop</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
