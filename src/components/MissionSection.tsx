import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const paragraph1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const paragraph2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

  const words1 = paragraph1.split(" ");
  const words2 = paragraph2.split(" ");

  const highlightWords = ["curiosity", "meets", "clarity"];

  return (
    <section ref={containerRef} className="w-full px-8 md:px-28 pt-0 pb-32 md:pb-44 flex flex-col items-center">
      <div className="w-full max-w-[800px] aspect-square rounded-full overflow-hidden mb-24 relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] flex flex-wrap justify-center gap-x-2 gap-y-2">
          {words1.map((word, i) => {
            const start = i / (words1.length + words2.length);
            const end = start + (1 / (words1.length + words2.length));
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            const cleanWord = word.replace(/[^\w]/g, "");
            const isHighlight = highlightWords.includes(cleanWord.toLowerCase());
            
            return (
              <motion.span 
                key={i} 
                style={{ opacity }}
                className={isHighlight ? "text-foreground" : "text-hero-subtitle"}
              >
                {word}
              </motion.span>
            );
          })}
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 flex flex-wrap justify-center gap-x-2 gap-y-2">
          {words2.map((word, i) => {
            const start = (words1.length + i) / (words1.length + words2.length);
            const end = start + (1 / (words1.length + words2.length));
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            
            return (
              <motion.span 
                key={i} 
                style={{ opacity }}
                className="text-hero-subtitle"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
