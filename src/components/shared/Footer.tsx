import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Our Products</h6>
        <Link href="/laptop" className="link link-hover">
          Laptop
        </Link>
        <Link href="/flash-sale" className="link link-hover">
          Flash Sale
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about-us" className="link link-hover">
          About us
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Customer Care</h6>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
