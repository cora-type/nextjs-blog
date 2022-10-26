import Layout from "../components/layout";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

import React from "react";

let today = () => {
  console.log(new Date());
  return formatRelative(subDays(new Date(), 5), new Date());
};

// Blog page
export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.lightText}>just noise</div>
        <ul className={`${utilStyles.list} ${utilStyles.spacing}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{today()}</small>
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
