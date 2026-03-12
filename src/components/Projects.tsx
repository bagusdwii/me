import { motion } from "framer-motion";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const projects = [
  {
    title: "ZetaChain Labs",
    description:
      "Contribute to ZetaChain blockchain development by testing omnichain dApps built on the ZetaChain Testnet.",
    tags: ["HTML", "Web3", "Blockchain"],
    href: "https://github.com/bagusdwii/labs.zetachain",
  },
  {
    title: "Kakarot Smart Contracts",
    description:
      "Experiment with deploying smart contracts on Kakarot and test zkEVM technology.",
    tags: ["Solidity", "Smart Contracts", "zkEVM"],
    href: "https://github.com/bagusdwii/Kakarot_SmartContracts",
  },
  {
    title: "PokeMin CLI",
    description:
      "A simple Pokemon CLI application built with JavaScript for interacting with Pokemon data.",
    tags: ["JavaScript", "CLI", "Node.js"],
    href: "https://github.com/bagusdwii/Pokemin-CLI",
  },
  {
    title: "Flappy Zeta",
    description:
      "A Web3-inspired Flappy Bird game built with CSS and interactive web technologies.",
    tags: ["CSS", "Game", "Web3"],
    href: "https://github.com/bagusdwii/Flappy-Zeta",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={spring}
      >
        <span className="text-label text-muted-foreground mb-4 block">
          Selected Work
        </span>
        <h2 className="text-display-lg text-foreground mb-16">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group block bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-card-foreground mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-background text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              View on GitHub →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
