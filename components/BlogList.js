import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

export default function BlogList({ posts, embedded = false }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      {embedded && <h2 className={utilStyles.headingLg}>Blog</h2>}
      <ul className={utilStyles.list}>
        {posts.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
