import { motion } from "framer-motion";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const skills = [
  "React",
  "React Native",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "Solidity",
  "HTML/CSS",
  "Sass",
  "Bootstrap",
  "Git",
  "MySQL",
  "Web3",
];

const About = () => {
  return (
    <section id="about" className="py-[20vh] px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
        className="max-w-3xl"
      >
        <span className="text-label text-muted-foreground mb-4 block">
          About
        </span>
        <h2 className="text-display-lg text-foreground mb-10">
          Engineering with Intent
        </h2>

        <div className="max-w-[65ch] space-y-6 text-muted-foreground">
          <p>
            A passionate frontend developer and Web3 enthusiast with expertise
            spanning the full stack. I build products that bridge clean design
            with robust engineering — from responsive web applications to
            blockchain-powered decentralized platforms.
          </p>
          <p>
            My approach centers on crafting interfaces that feel both intuitive
            and performant, backed by well-architected systems. Whether it's
            deploying smart contracts on zkEVM or building interactive CLI
            tools, I care deeply about the details that make software feel
            polished.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="mt-12"
        >
          <span className="text-label text-muted-foreground mb-4 block">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-background text-muted-foreground border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
