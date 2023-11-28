import Link from "next/link";
import styles from "./layout.module.css";
import { getProducts } from "@/service/products";

import MeowArticle from "@/components/MeowArticle";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <nav className={styles.nav}>
        <ul>
          {products.map(({ id, name }, index) => (
            <li key={index}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MeowArticle />
    </>
  );
}
