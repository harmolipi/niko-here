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
          {
            "My name is Deacon Niko Birbilis. I've always been a tinkerer, and after brushing elbows with programming often enough, I finally started studying full-stack web development in earnest back in 2019. I started by learning Ruby on Rails through "
          }
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            The Odin Project
          </a>
          , and then just kept on learning from there.
        </p>
        <p>
          I received a Master of Divinity at Holy Cross Greek Orthodox School of
          Theology. My studies in theology guide my life and my work as I seek
          to pursue the True, the Good, and the Beautiful in all that I do.
        </p>
        <p>
          I use Neovim as my editor, with{" "}
          <a href="https://astronvim.com/" target="_blank" rel="noreferrer">
            AstroNvim
          </a>{" "}
          as my base configuration, and build my settings from there.{" "}
          <a
            href="https://github.com/harmolipi/dotfiles"
            target="_blank"
            rel="noreferrer"
          >
            Click here to see my dotfiles.
          </a>
        </p>
        <p>My languages and frameworks:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>JS</li>
          <li>SQL</li>
          <li>Ruby (and Ruby on Rails)</li>
          <li>
            PHP (vanilla and in the context of WordPress plugins and themes)
          </li>
          <li>Python</li>
        </ul>
      </section>
    </Layout>
  );
}
