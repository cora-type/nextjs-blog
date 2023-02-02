import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Abuse from "/public/images/abuse.svg";

import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="postsLink">
          <Link href={`/blog/`}>
            <div
              className={`${utilStyles.headingMd} ${utilStyles.padding1px} posts`}
            >
              Blog
              {/* <Abuse /> */}
            </div>
          </Link>
        </div>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <div >{title}</div>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/coaless">
              <div target="_blank" className={utilStyles.listItem}>
                coaless
              </div>
            </Link>
            <br />
            <div className={utilStyles.lightText}>
              coalesce reddit posts from one google search
            </div>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Training Wheels</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/calculator">
              <div className={utilStyles.listItem}>To-Do</div>
            </Link>
            <br />
            <div className={utilStyles.lightText}>self explanatory</div>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/calculator">
              <div className={utilStyles.listItem}>Calculator</div>
            </Link>
            <div className={utilStyles.lightText}>self explanatory</div>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/etch-a-sketch">
              <div className={utilStyles.listItem}>Etch-a-Sketch</div>
            </Link>
            <div className={utilStyles.lightText}>self explanatory</div>
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
