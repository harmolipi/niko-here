import Head from "next/head";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import Navbar from "./Navbar";
import { Cormorant } from "next/font/google";
import styles from "./layout.module.css";

const name = "Niko Here";
export const siteTitle = "Niko Here";

const cormorant = Cormorant({
  subsets: ["latin"],
});

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
];

export default function Layout({ children, home }) {
  return (
    <div className={`${styles.container} ${cormorant.className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Niko is a developer based in Jacksonville, Florida."
        />
        <meta property="og:image" content="/niko-here/images/logo.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Navbar pages={pages} />
        <SiteHeader home={home} name={name} />
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
