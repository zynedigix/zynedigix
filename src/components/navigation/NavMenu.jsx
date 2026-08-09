export default function NavMenu({ links, active, onLinkClick, className = "", theme = "dark" }) {
  return (
    <nav
      className={className}
      aria-label="Primary Navigation"
    >
      <ul className="flex items-center justify-center gap-12 whitespace-nowrap">
        {links.map((link) => {
          const isActive = active === link.href;
          return (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onLinkClick}
                aria-current={isActive ? "page" : undefined}
                className={`text-[18px] font-medium transition-colors duration-[250ms] ease-in-out ${
                  isActive
                    ? "text-[var(--color-ocean-teal)] font-medium"
                    : "text-white hover:text-[var(--color-ocean-teal)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
