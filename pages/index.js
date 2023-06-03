import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BlogList from "../components/BlogList";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My name&apos;s Niko. I recently took the plunge, learned web
          development, and fell in love with it. Follow my journey here.
        </p>
        <p>
          Some of my interests include Eastern Orthodoxy, Neovim, aesthetics,
          architecture, jazz,{" "}
          <a href="https://urbit.org" target="_blank" rel="noreferrer">
            Urbit
          </a>
          , WordPress, and my wonderful family.
        </p>
      </section>
      <BlogList posts={allPostsData} embedded={true} />
    </Layout>
  );
}
