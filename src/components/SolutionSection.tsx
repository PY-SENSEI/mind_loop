import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function SolutionSection() {
  return (
    <section className="w-full px-8 md:px-28 py-32 md:py-44 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="mb-12">
          <span className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-6">SOLUTION</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-1px]">
            The platform for <span className="font-serif italic font-normal">meaningful</span> content
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="w-full aspect-[3/1] rounded-2xl overflow-hidden mb-16 relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
          />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div {...fadeUp(0.3)}>
            <h3 className="font-semibold text-base mb-3">Curated Feed</h3>
            <p className="text-muted-foreground text-sm">Discover content that matters, tailored to your interests without the noise of traditional social media.</p>
          </motion.div>
          <motion.div {...fadeUp(0.4)}>
            <h3 className="font-semibold text-base mb-3">Writer Tools</h3>
            <p className="text-muted-foreground text-sm">Everything you need to craft compelling narratives, from powerful editors to audience insights.</p>
          </motion.div>
          <motion.div {...fadeUp(0.5)}>
            <h3 className="font-semibold text-base mb-3">Community</h3>
            <p className="text-muted-foreground text-sm">Engage with readers and other writers in a space designed for thoughtful discussion.</p>
          </motion.div>
          <motion.div {...fadeUp(0.6)}>
            <h3 className="font-semibold text-base mb-3">Distribution</h3>
            <p className="text-muted-foreground text-sm">Reach the right audience with built-in discovery mechanisms and cross-platform sharing.</p>
          </motion.div>
        </div>

        {/* Recent Articles Preview */}
        <motion.div {...fadeUp(0.7)} className="mt-32 pt-16 border-t border-border/30">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
              Recent <span className="font-serif italic font-normal">Articles</span>
            </h3>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View all &rarr;
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "The Future of Digital Minimalism",
                excerpt: "Exploring how intentional technology use can lead to a more fulfilling and focused life in an age of constant distraction.",
                seed: "minimalism"
              },
              {
                id: 2,
                title: "Designing for Depth",
                excerpt: "Why modern interfaces need to move beyond engagement metrics and start optimizing for meaningful user experiences.",
                seed: "design"
              },
              {
                id: 3,
                title: "The Architecture of Thought",
                excerpt: "How the tools we use to write and organize our ideas fundamentally shape the way we think and create.",
                seed: "architecture"
              }
            ].map((article, index) => (
              <motion.div key={article.id} {...fadeUp(0.8 + index * 0.1)} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-5">
                  <img 
                    src={`https://picsum.photos/seed/${article.seed}/600/400`} 
                    alt={article.title} 
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-semibold text-xl mb-2 group-hover:text-muted-foreground transition-colors">{article.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
