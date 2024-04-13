import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-contents"]}>
        <Link href="/" className={styles["logo-link"]}>
          <Image
            src="/images/logo.svg"
            alt="Go to Krikey homepage"
            width={48}
            height={48}
          />
        </Link>
        <nav className={styles.navbar__links}>
          <Link href="/" className={styles.navbar__link}>
            How to Animate
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Business
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Education
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Social Media
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Pricing
          </Link>
          <Link href="/" className={styles.navbar__link}>
            About Us
          </Link>
        </nav>
        <Link href="/" className={styles["get-started"]}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
