import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-8 py-4 md:px-28 bg-transparent">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
            <div className="w-3 h-3 rounded-full border border-foreground/60" />
          </div>
          <span className="font-bold text-lg">Mindloop</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">How It Works</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Philosophy</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Use Cases</a>
        </div>

        <div className="flex items-center gap-3">
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
      </div>
    </nav>
  );
}
