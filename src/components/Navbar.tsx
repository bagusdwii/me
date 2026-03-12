import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md"
    >
      <a href="#" className="text-foreground font-bold text-lg tracking-tight">
        BD
      </a>

      <div className="flex items-center gap-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === link.href && (
              <motion.div
                layoutId="nav-underline"
                className="absolute inset-0 rounded-lg bg-secondary"
                transition={spring}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        ))}
        <a
          href="https://github.com/bagusdwii"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
