import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.div}>
        <nav className={styles.nav}>
          <Link href="/products/woman">여성옷</Link>
          <Link href="/products/man">남성옷</Link>
        </nav>
      </div>
      <section>{children}</section>
    </>
  );
}
