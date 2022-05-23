import Head from "next/head";
import Main from "../components/Main";

export default function Home({ userData, todoeData }) {
  return (
    <>
      <Head>
        <title>Sample Table</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4">
        <Main todo={todoeData} user={userData} />
      </div>
    </>
  );
}
Home.getInitialProps = async function (context) {
  const [userData, todoeData] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users`).then((r) => r.json()),
    fetch(`https://jsonplaceholder.typicode.com/todos`).then((r) => r.json()),
  ]);

  return { userData, todoeData };
};
