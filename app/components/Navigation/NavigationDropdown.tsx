
import Link from "next/link";
import { MenuItem } from "./Navigation";
import styles from "./Navigation.module.css";

interface NavigationDropdownProps {
  items: MenuItem[];
  onNavigate: () => void;
}

export default function NavigationDropdown({
  items,
  onNavigate,
}: NavigationDropdownProps) {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={styles.dropdownLink}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
