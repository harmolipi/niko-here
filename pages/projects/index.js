import Layout, { siteTitle } from "../../components/layout";
import ProjectList from "../../components/ProjectList";
import Head from "next/head";
import { getSortedProjectsData } from "../../lib/projects";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Blog({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Projects</title>
      </Head>
      <h1>Projects</h1>
      <ProjectList projects={allProjectsData} embedded={false} />
    </Layout>
  );
}
