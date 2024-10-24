import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-end p-4 bg-gradient-to-r from-sky-700  text-black font-serif font-semibold z-10 relative italic">
      <Link href="/" className="mx-4">
        Home
      </Link>
      <Link href="/about" className="mx-4">
        About
      </Link>
      <Link href="/contact" className="mx-4">
        Contact
      </Link>
      <Link href="/services" className="mx-4">
        Services
      </Link>
    </nav>
  );
}
