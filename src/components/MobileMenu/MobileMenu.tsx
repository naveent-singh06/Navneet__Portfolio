import { navItems } from '../../data/navigation';
import { personal } from '../../data/personal';

interface MobileMenuProps {
  open: boolean;
}

/** Full-screen mobile navigation overlay (shown under 900px). */
export default function MobileMenu({ open }: MobileMenuProps) {
  return (
    <div id="mobile-menu" className={open ? 'open' : ''}>
      {navItems.map((item) => (
        <a key={item.href} href={item.href} data-mm>
          {item.label}
        </a>
      ))}
      <div className="mm-meta">{personal.email}</div>
    </div>
  );
}
