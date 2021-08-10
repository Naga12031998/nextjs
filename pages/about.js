import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Char List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          A task for my learning. allows a visitor see 10 random people
          information which is fetched from{" "}
          <span>
            <a
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              rel="noreferrer"
            >
              API.
            </a>
          </span>
        </p>
        <p>
          You can find the list of characters name in the char listing section
          which you can see in the navbar.
        </p>
        <p>
          When a character name is clicked users can see details for a
          particular character
        </p>
        <h3>References:</h3>
        <ol>
          <li>
            <a
              href="https://github.com/iamshaunjp/nextjs-tutorial"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default About;
