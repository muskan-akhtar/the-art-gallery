import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-end p-4 bg-gradient-to-r from-sky-700  text-black font-serif font-semibold z-10 relative italic">
      <Link
        href="/"
        className="mx-4"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="mx-4"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="mx-4"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
      >
        Contact
      </Link>
      <Link
        href="/services"
        className="mx-4"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
      >
        Services
      </Link>
    </nav>
  );
}
