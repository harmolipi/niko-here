import Layout, { siteTitle } from "../../components/layout";
import BlogList from "../../components/BlogList";
import Head from "next/head";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Blog</title>
      </Head>
      <h1>Blog</h1>
      <BlogList posts={allPostsData} embedded={false} />
    </Layout>
  );
}
