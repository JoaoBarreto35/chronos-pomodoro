import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { RouterLink } from "../RouterLink";

type AvailabelThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailabelThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailabelThemes) || "dark";
    return storageTheme;
  });
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevState) => {
      const nextTheme = prevState === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </RouterLink>
      <Link
        className={styles.menuLink}
        to="/settings"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </Link>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
