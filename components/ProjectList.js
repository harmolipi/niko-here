import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function ProjectList({ projects, embedded = false }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {embedded && <h2 className={utilStyles.headingLg}>Projects</h2>}
      <ul className={utilStyles.list}>
        {projects.map(({ id, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/projects/${id}`}>{title}</Link>
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
}
