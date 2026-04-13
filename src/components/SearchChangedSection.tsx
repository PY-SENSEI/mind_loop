import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function SearchChangedSection() {
  return (
    <section className="w-full px-8 md:px-28 pt-52 md:pt-64 pb-6 md:pb-9 text-center">
      <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-1px] mb-6">
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24">
        The way we find information is evolving. Are you keeping up with the platforms defining the future of discovery?
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-6xl mx-auto">
        <motion.div {...fadeUp(0.3)} className="flex flex-col items-center">
          <div className="w-[200px] h-[200px] mb-6 rounded-2xl overflow-hidden bg-card flex items-center justify-center">
            <img src="https://picsum.photos/seed/chatgpt/400/400" alt="ChatGPT" className="w-full h-full object-cover opacity-80" />
          </div>
          <h3 className="font-semibold text-base mb-2">ChatGPT</h3>
          <p className="text-muted-foreground text-sm max-w-xs">Conversational AI that understands context and delivers synthesized answers instantly.</p>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex flex-col items-center">
          <div className="w-[200px] h-[200px] mb-6 rounded-2xl overflow-hidden bg-card flex items-center justify-center">
            <img src="https://picsum.photos/seed/perplexity/400/400" alt="Perplexity" className="w-full h-full object-cover opacity-80" />
          </div>
          <h3 className="font-semibold text-base mb-2">Perplexity</h3>
          <p className="text-muted-foreground text-sm max-w-xs">An AI-powered search engine that provides cited, real-time answers to your questions.</p>
        </motion.div>

        <motion.div {...fadeUp(0.5)} className="flex flex-col items-center">
          <div className="w-[200px] h-[200px] mb-6 rounded-2xl overflow-hidden bg-card flex items-center justify-center">
            <img src="https://picsum.photos/seed/googleai/400/400" alt="Google AI" className="w-full h-full object-cover opacity-80" />
          </div>
          <h3 className="font-semibold text-base mb-2">Google AI</h3>
          <p className="text-muted-foreground text-sm max-w-xs">The evolution of traditional search, blending generative AI with the world's information.</p>
        </motion.div>
      </div>

      <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-sm text-center">
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
}
