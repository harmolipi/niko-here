import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects, embedded = false }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {embedded && <h2 className={utilStyles.headingLg}>Projects</h2>}
      <ul className={utilStyles.list}>
        {projects.map(({ id, title, status }) => (
          <li
            className={`${utilStyles.listItem} ${styles.projectListItem}`}
            key={id}
          >
            <Link href={`/projects/${id}`} className={styles.projectName}>
              {title}
            </Link>
            <span className={utilStyles.lightText}>
              {status === "complete" && (
                <span className={`${utilStyles.tag} ${utilStyles.completeTag}`}>
                  Complete
                </span>
              )}
              {status === "in-progress" && (
                <span
                  className={`${utilStyles.tag} ${utilStyles.inProgressTag}`}
                >
                  In Progress
                </span>
              )}
              {status === "not-started" && (
                <span
                  className={`${utilStyles.tag} ${utilStyles.notStartedTag}`}
                >
                  Not Started
                </span>
              )}
            </span>
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
}
