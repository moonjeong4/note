import Link from "next/link";
import styles from "./layout.module.css";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductsIndex() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <nav className={styles.nav}>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <Link href={`/products/${product}`}>{product}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
