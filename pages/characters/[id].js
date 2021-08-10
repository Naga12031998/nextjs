import Head from "next/head";

// getting all the user list from the API
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((e) => {
    return {
      params: { id: e.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// getting specific id
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { char: data },
  };
};

const Details = ({ char }) => {
  return (
    <>
      <Head>
        <title>Char List | {char.name}</title>
        <meta name="keywords" content="characters" />
      </Head>
      <h1>{char.name}</h1>
      <p>{char.email}</p>
      <p>{char.website}</p>
      <p>{char.address.city}</p>
    </>
  );
};

export default Details;
