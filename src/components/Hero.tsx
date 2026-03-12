import { motion } from "framer-motion";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: spring },
};

const Hero = () => {
  return (
    <section className="min-h-svh flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-4xl"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="text-label text-muted-foreground inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-display-xl text-foreground mb-6"
        >
          Bagus Dwi
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Senior Full-stack Developer & UI/UX Designer. I build and design
          high-quality digital products from concept to production.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm transition-shadow"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 rounded-lg shadow-border hover:shadow-border-accent font-medium text-sm text-foreground transition-shadow"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex gap-12 text-sm text-muted-foreground"
        >
          <div>
            <span className="block text-2xl font-bold text-foreground tabular-nums">5+</span>
            Repositories
          </div>
          <div>
            <span className="block text-2xl font-bold text-foreground tabular-nums">35</span>
            Contributions
          </div>
          <div>
            <span className="block text-2xl font-bold text-foreground tabular-nums">7</span>
            Followers
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
