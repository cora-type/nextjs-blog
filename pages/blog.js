import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

import React from "react";

// Blog page
export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="">
          <h2 className={utilStyles.headingLg}>noise</h2>
        </div>
        <div className={utilStyles.lightText}>'blog'</div>
        <ul className={`${utilStyles.list} ${utilStyles.spacing}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <div className={utilStyles.blogTitle}>{title}</div>
              </Link>
              <small className={utilStyles.lightText}>"date"</small>
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
