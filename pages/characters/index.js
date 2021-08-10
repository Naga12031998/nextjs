import Link from "next/link";
import styles from "../../styles/Characters.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { characters: data },
  };
};

const Characters = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Char List | Listing</title>
        <meta name="keywords" content="characters" />
      </Head>
      <h1>Character List</h1>
      {characters.map((char) => (
        <Link key={char.id} href={`/characters/${char.id}`}>
          <a className={styles.single}>
            <h3>{char.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Characters;
