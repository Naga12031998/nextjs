import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Char List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          This is home page of next js app. This is purely made for my learning
          purpose. I don't own the content like icons and font in this page.
        </p>
        <Link href="/characters/">
          <a className={styles.btn}>See Char Listing</a>
        </Link>
      </div>
    </>
  );
}
