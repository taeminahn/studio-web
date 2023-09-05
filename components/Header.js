import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@styles/Header.module.css";
import headerLogo from "@images/navi_logo.png";

const Header = () => {
  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerBox}>
        <Link className={styles.headerLogo} href="/">
          <Image src={headerLogo} alt="header logo" />
        </Link>
        <nav className={styles.headerMenuWrap}>
          <Link className={styles.headerMenu} href="/">
            HOME
          </Link>
          <Link className={styles.headerMenu} href="/about">
            ABOUT
          </Link>
          <Link className={styles.headerMenu} href="/works">
            WORKS
          </Link>
          <Link className={styles.headerMenu} href="/contact">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;