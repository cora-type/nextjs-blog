import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/home.module.css";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <h2 className={styles.heading}>projects</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.subHeadingContainer}>
              <Link href="https://github.com/cora-type/rhapsody">
                <div target="_blank" className={styles.subHeading}>
                  delia (github private, work in progress)
                </div>
              </Link>
              <div className={styles.subHeadingStatus}>
                <Image
                  priority
                  src="/images/alert.svg"
                  height={15}
                  width={15}
                  alt={"absurd"}
                />
              </div>
            </div>

            <div className={styles.about}>sound by words.</div>
          </li>
          <li className={styles.listItem}>
            <Link href="https://github.com/cora-type/coaless">
              <div target="_blank" className={styles.subHeading}>
                coaless
              </div>
            </Link>
            <div className={styles.about}>
              coalesce reddit posts from one google search
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>training wheels</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="https://github.com/cora-type/to-do">
              <div className={styles.subHeading}>to do</div>
            </Link>
            <div className={styles.about}>self explanatory</div>
          </li>
          <li className={styles.listItem}>
            <Link href="https://github.com/cora-type/calculator">
              <div className={styles.subHeading}>calculator</div>
            </Link>
            <div className={styles.about}>self explanatory</div>
          </li>
          <li className={styles.subHeading}>
            <Link href="https://github.com/cora-type/etch-a-sketch">
              <div className={styles.subHeading}>etch a sketch</div>
            </Link>
            <div className={styles.about}>self explanatory</div>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();

//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
