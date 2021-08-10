import Link from "next/link";
import styles from "../../styles/Characters.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { char: data },
  };
};

const Characters = ({ char }) => {
  return (
    <>
      <Head>
        <title>Char List | Listing</title>
        <meta name="keywords" content="characters" />
      </Head>
      <h1>Character Listing</h1>
      {char.map((e) => (
        <Link key={e.id} href={`/characters/${e.id}`}>
          <a className={styles.single}>
            <h3>{e.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Characters;
