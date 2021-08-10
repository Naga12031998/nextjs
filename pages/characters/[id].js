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
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Char List | {ninja.name}</title>
        <meta name="keywords" content="characters" />
      </Head>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </>
  );
};

export default Details;
