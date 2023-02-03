import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
// import Breadcrumbs from "nextjs-breadcrumbs";
import Footer from "./footer";

const name = "cora";
export const siteTitle = "the stars, like dust.";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.navLeft}>
              <div className={styles.user}>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={styles.borderCircle}
                  height={36}
                  width={36}
                  alt={name}
                />
                <div className={styles.names}>
                  <span className={styles.name}>cora</span>
                  <span className={styles.about}>the stars, like dust.</span>
                </div>
              </div>
            </div>
            {/* <div className={styles.themeToggle}>TOGGLE</div> */}
          </>
        ) : (
          // header styling for links that aren't home
          <>
            <Link href="/">
              <div>
                <div className={styles.navLeft}>
                  <div className={styles.user}>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={styles.borderCircle}
                      height={36}
                      width={36}
                      alt={name}
                    />
                    <div className={styles.names}>
                      <span className={styles.name}>cora</span>
                      <span className={styles.about}>
                        the stars, like dust.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* <div className={styles.themeToggle}>TOGGLE</div> */}
          </>
        )}
      </header>
      <div className="breadcrumbs-container">
        {/* <Breadcrumbs
          containerClassName="bread"
          listClassName="breadcrumbs"
          inactiveItemClassName="bread-inactive"
          activeItemClassName="bread-active"
          rootLabel="home"
        /> */}
      </div>
      <main>{children}</main>
      {/*<Footer />*/}
    </div>
  );
}
