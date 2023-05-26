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
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
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
