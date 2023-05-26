import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./SiteHeader.module.css";

export default function SiteHeader({ home, name }) {
  return home ? (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <Image
            priority
            src="/niko-here/images/home-hero.webp"
            fill={true}
            alt="Garden of Versailles by John Vanderlyn"
            title="Garden of Versailles by John Vanderlyn"
            className={styles.heroImage}
          />
        </div>
        <Image
          priority
          src="/niko-here/images/profile.jpeg"
          className={`${utilStyles.borderCircle} ${styles.heroProfile}`}
          height={144}
          width={144}
          alt=""
        />
      </div>
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </>
  ) : (
    <>
      <Link href="/">
        <Image
          priority
          src="/niko-here/images/profile.jpeg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt=""
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {name}
        </Link>
      </h2>
    </>
  );
}
