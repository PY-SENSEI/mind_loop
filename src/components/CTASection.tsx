import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative w-full py-32 md:py-44 border-t border-border/30 overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60">
            <div className="w-5 h-5 rounded-full border border-foreground/60" />
          </div>
        </motion.div>

        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-serif italic font-normal mb-6">
          Start Your Journey
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-lg mb-10">
          Join thousands of readers and writers who have already discovered a better way to connect through content.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-foreground text-background rounded-lg px-8 py-3.5 font-medium hover:bg-foreground/90 transition-colors w-full sm:w-auto">
            Subscribe Now
          </button>
          <button className="liquid-glass rounded-lg px-8 py-3.5 font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
            Start Writing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
