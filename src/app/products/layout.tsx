import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요.",
};

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
