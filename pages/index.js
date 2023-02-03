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
        <div className={styles.blogContainer}>
          <div className={styles.padding1px}>
            <Link href={`/blog/`}>
              <div className={styles.blogButton}>blog</div>
            </Link>
            <Image
              className={styles.absurd}
              priority
              src="/images/absurd.png"
              height={96}
              width={96}
              alt={"absurd"}
            />
          </div>
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
      <section className={styles.section}>
        <h2 className={styles.heading}>projects</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.subHeadingContainer}>
              <Link href="https://github.com/cora-type/rhapsody">
                <div target="_blank" className={styles.subHeading}>
                  rhapsody
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
