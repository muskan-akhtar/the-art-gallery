import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-end p-4 mb-8 bg-gradient-to-r from-sky-700  text-black font-serif font-semibold z-10 relative italic">
      <Link href="/" className={`${styles.navLink} mx-4`}>
        Home
      </Link>
      <Link href="/about" className={`${styles.navLink} mx-4`}>
        About
      </Link>
      <Link href="/contact" className={`${styles.navLink} mx-4`}>
        Contact
      </Link>
      <Link href="/services" className={`${styles.navLink} mx-4`}>
        Services
      </Link>
    </nav>
  );
}
