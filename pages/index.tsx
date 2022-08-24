import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

type HomeProps = {
  hours: number;
};

const Home: NextPage<HomeProps> = ({ hours }) => {
  const containerStyles = {
    sunrise: {
      hours: [5, 11],
      src: "/sunset.png",
    },
    day: {
      hours: [11, 17],
      src: "/day.png",
    },
    sunset: {
      hours: [17, 22],
      src: "/sunset.png",
    },
    night: {
      hours: [22, 5],
      src: "/night.png",
    },
  };

  const getContainerStyle = () => {
    // This rule works for 3 of 4 cases, so we return night by default to
    // cover the last case.
    return (
      Object.values(containerStyles).find(
        (dayQuarter) =>
          dayQuarter.hours[0] <= hours && hours < dayQuarter.hours[1]
      ) ?? containerStyles.night
    );
  };

  return (
    <main>
      <Head>
        <title>Yoann Fleury - Web Developer</title>
        <meta
          name="description"
          content="Yoann Fleury, frontend web developer at BearStudio and volunteer at Codeurs en Seine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.image}>
        <Image
          src={getContainerStyle().src}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt=""
        />
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <p>Hello! Bonjour !</p>
          <p>
            My name is <strong>Yoann Fleury</strong>, I am a frontend web
            developer at{" "}
            <a
              href="https://www.bearstudio.fr"
              title="BearStudio's main page"
              target="_blank"
              rel="noreferrer"
            >
              BearStudio
            </a>{" "}
            and a volunteer at{" "}
            <a
              href="https://www.codeursenseine.com"
              title="Codeurs en Seine website, a french association"
              target="_blank"
              rel="noreferrer"
            >
              Codeurs en Seine
            </a>
          </p>
          <p>
            Follow me on{" "}
            <a
              href="https://twitter.com/yoannfleurydev"
              title="Yoann Fleury's Twitter profile"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/yoannfleurydev"
              title="Yoann Fleury's Instagram profile"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://github.com/yoannfleurydev"
              title="Yoann Fleury's GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://changelog.yoannfleury.dev"
              title="Yoann Fleury's Polywork page"
              target="_blank"
              rel="noreferrer"
            >
              Polywork
            </a>
            , or add me on Discord with the username{" "}
            <em>YoannFleuryDev#0001</em>
          </p>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  return { props: { hours: new Date().getHours() } };
}

export default Home;
