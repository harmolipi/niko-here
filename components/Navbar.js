import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar({ pages }) {
  return (
    <nav className={styles.navbar}>
      {pages.map((page, index) => (
        <span key={page.name}>
          <Link href={page.path} key={page.name}>
            {page.name}
          </Link>
          {index < pages.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
