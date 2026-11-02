
"use client";

import Link from "next/link";
import { NavigationMenu } from "./Navigation";
import NavigationDropdown from "./NavigationDropdown";
import styles from "./Navigation.module.css";

interface NavigationItemProps {
  menu: NavigationMenu;
  active: boolean;
  onActivate: () => void;
  onClose: () => void;
}

export default function NavigationItem({
  menu,
  active,
  onActivate,
  onClose,
}: NavigationItemProps) {
  const hasDropdown = menu.items.length > 0;

  return (
    <li
      className={styles.navItem}
      onMouseEnter={hasDropdown ? onActivate : undefined}
      onFocus={hasDropdown ? onActivate : undefined}
    >
      <Link
        href={menu.href}
        className={`${styles.navLink} ${
          active && hasDropdown ? styles.activeLink : ""
        }`}
        aria-haspopup={hasDropdown ? "true" : undefined}
        aria-expanded={hasDropdown ? active : undefined}
        onClick={onClose}
      >
        {menu.title}

        {hasDropdown && (
          <span
            className={`${styles.chevron} ${
              active ? styles.chevronActive : ""
            }`}
            aria-hidden="true"
          >
            ▾
          </span>
        )}
      </Link>

      {hasDropdown && active && (
        <NavigationDropdown
          items={menu.items}
          onNavigate={onClose}
        />
      )}
    </li>
  );
}
