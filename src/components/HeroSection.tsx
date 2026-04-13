import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
      />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-28 md:pt-32 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            <img src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar 1" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            <img src="https://picsum.photos/seed/avatar2/100/100" alt="Avatar 2" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
            <img src="https://picsum.photos/seed/avatar3/100/100" alt="Avatar 3" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
          </div>
          <span className="text-muted-foreground text-sm">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-lg text-hero-subtitle max-w-2xl mb-12">
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="w-full max-w-lg">
          <div className="liquid-glass rounded-full p-2 flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-1 bg-transparent border-none outline-none px-6 text-foreground placeholder:text-muted-foreground"
            />
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background rounded-full px-8 py-3 font-medium text-sm"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
