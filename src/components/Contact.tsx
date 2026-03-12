import { motion } from "framer-motion";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
        className="max-w-2xl"
      >
        <h2 className="text-display-lg text-foreground mb-6">
          Let's build together.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          I'm open to new opportunities and collaborations. Feel free to reach
          out if you'd like to work together or just want to say hello.
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="https://github.com/bagusdwii"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm"
          >
            GitHub Profile
          </motion.a>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bagus Dwi. Built with precision.
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
