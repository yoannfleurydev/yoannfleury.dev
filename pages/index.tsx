import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

type HomeProps = {
  hours: number;
};

const Home: NextPage<HomeProps> = ({ hours }) => {
  const containerStyles = {
    sunrise: {
      hours: [5, 11],
      style: styles.containerSunset,
    },
    day: {
      hours: [11, 17],
      style: styles.containerDay,
    },
    sunset: {
      hours: [17, 22],
      style: styles.containerSunset,
    },
    night: {
      hours: [22, 5],
      style: styles.containerNight,
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
    <div className={getContainerStyle()?.style}>
      <Head>
        <title>Yoann Fleury - Web Developer</title>
        <meta
          name="description"
          content="Yoann Fleury, frontend web developer at BearStudio and volunteer at Codeurs en Seine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          ,{" "}
          <a
            href="https://www.linkedin.com/in/yoannfleurydev/"
            title="Yoann Fleury's LinkedIn profile"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          or add me on Discord with the username <em>YoannFleuryDev#0001</em>
        </p>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { hours: new Date().getHours() } };
}

export default Home;
