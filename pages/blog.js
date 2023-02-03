import Layout from "../components/layout";
import styles from "../styles/blog.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

import React from "react";

// Blog page
export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.title}>blog</div>
        <div className={styles.titleAbout}>for the man in the attic</div>
      </section>
      <section className={styles.section}>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <div className={styles.heading}>{title}</div>
              </Link>
              {<small className={styles.subHeading}>{date}</small>}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
