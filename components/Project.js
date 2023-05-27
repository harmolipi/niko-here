import utilStyles from "../styles/utils.module.css";

export default function Project({ projectData }) {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
      <div className={utilStyles.lightText}>
        <a href={projectData.link} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
      <div className={utilStyles.lightText}>
        {projectData.status === "complete" && (
          <span className={`${utilStyles.tag} ${utilStyles.completeTag}`}>
            Complete
          </span>
        )}
        {projectData.status === "in-progress" && (
          <span className={`${utilStyles.tag} ${utilStyles.inProgressTag}`}>
            In Progress
          </span>
        )}
        {projectData.status === "not-started" && (
          <span className={`${utilStyles.tag} ${utilStyles.notStartedTag}`}>
            Not Started
          </span>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}></div>
    </article>
  );
}
