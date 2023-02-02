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
      <section>
        <div className={styles.blogContainer}>
          <Link href={`/blog/`}>
            <div className={styles.padding1px}>
              noise
              <Image
                priority
                src="/images/absurd.png"
                height={96}
                width={96}
                alt={"abuse"}
              />
            </div>
          </Link>
        </div>
      </section>
      {/* <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.homeHeading}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <div >{title}</div>
              </Link>
              <br />
              <small className={styles.about}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <section className={styles.homeSection}>
        <h2 className={styles.homeHeading}>projects</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="https://github.com/verloxs/coaless">
              <div target="_blank" className={styles.homeSubHeading}>
                coaless
              </div>
            </Link>
            <div className={styles.about}>
              coalesce reddit posts from one google search
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.homeSection}>
        <h2 className={styles.homeHeading}>training wheels</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="https://github.com/verloxs/calculator">
              <div className={styles.homeSubHeading}>to do</div>
            </Link>
            <div className={styles.about}>self explanatory</div>
          </li>
          <li className={styles.listItem}>
            <Link href="https://github.com/verloxs/calculator">
              <div className={styles.homeSubHeading}>calculator</div>
            </Link>
            <div className={styles.about}>self explanatory</div>
          </li>
          <li className={styles.homeSubHeading}>
            <Link href="https://github.com/verloxs/etch-a-sketch">
              <div className={styles.homeSubHeading}>etch a sketch</div>
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
