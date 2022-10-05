import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>the stars, like dust.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/redview">
              <a className={utilStyles.listItem}>coalesce</a>
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
              <a className={utilStyles.listItem}>To-Do</a>
            </Link>
            <br />
            <div className={utilStyles.lightText}>self explanatory</div>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/calculator">
              <a className={utilStyles.listItem}>Calculator</a>
            </Link>
            <div className={utilStyles.lightText}>self explanatory</div>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://github.com/verloxs/etch-a-sketch">
              <a className={utilStyles.listItem}>Etch-a-Sketch</a>
            </Link>
            <div className={utilStyles.lightText}>self explanatory</div>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();

  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}
