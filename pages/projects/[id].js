import Head from "next/head";
import Layout from "../../components/layout";
import Project from "../../components/Project";
import { getAllProjectIds, getProjectData } from "../../lib/projects";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <Project projectData={projectData} />
    </Layout>
  );
}
