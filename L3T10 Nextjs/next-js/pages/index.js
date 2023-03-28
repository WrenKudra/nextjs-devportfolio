import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tracey Turner | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <img
          align="right"
          alt="Coding"
          width="400"
          src="https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2021/m02/how-technology-empowers-women-in-stem/_jcr_content/root/hero.coreimg.gif/1639580970719/netacad-camille-stephanie-feature-800x450-thumb-021121-animated-gif-2140879-1-0.gif"
        ></img>
        <p className={styles.text}>
          Hi! My name is Tracey Turner. Welcome to my Developer portfolio.{" "}
          <br />
          Here you can find more information about me and the work that I do.
        </p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See my projects</a>
        </Link>
      </div>
    </>
  );
}

//REFERENCES
// Getting started with Next.js https://netninja.dev/courses/enrolled/1341524
// https://stackoverflow.com/questions/71798018/how-to-install-next-js-with-react-17
