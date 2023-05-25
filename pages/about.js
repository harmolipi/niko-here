import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>
      <h1>About</h1>
      <section className={utilStyles.headingMd}>
        <p>
          My name&apos;s Niko. I recently took the plunge, learned web
          development, and fell in love with it. Follow my journey here.
        </p>
        <p>
          Some of my interests include music,{" "}
          <a href="https://urbit.org" target="_blank" rel="noreferrer">
            Urbit
          </a>
          , WordPress, and my wonderful family.
        </p>
      </section>
    </Layout>
  );
}
