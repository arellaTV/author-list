import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-contents"]}>
        <div className={styles["spacer"]}></div>
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
            <Image
              className={styles.chevron}
              src="/icons/chevron_down.svg"
              width={24}
              height={23}
              alt="Expand How to Animate"
            />
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Business
            <Image
              className={styles.chevron}
              src="/icons/chevron_down.svg"
              width={24}
              height={23}
              alt="Expand Business"
            />
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Education
            <Image
              className={styles.chevron}
              src="/icons/chevron_down.svg"
              width={24}
              height={23}
              alt="Expand Education"
            />
          </Link>
          <Link href="/" className={styles.navbar__link}>
            Social Media
            <Image
              className={styles.chevron}
              src="/icons/chevron_down.svg"
              width={24}
              height={23}
              alt="Expand Social Media"
            />
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
        <button className={styles.menu}>
          <Image src="/icons/menu.svg" width={24} height={24} alt="Open menu" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
