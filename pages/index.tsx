import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
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
    const hours = new Date().getHours();

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
        <title>Yoann Fleury</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.card}>
        <p>Hello! Bonjour !</p>
        <p>
          My name is <strong>Yoann Fleury</strong>, I am a front-end web
          developer at{" "}
          <a href="https://www.bearstudio.fr" title="BearStudio's main page">
            BearStudio
          </a>
        </p>
        <p>
          Follow me on{" "}
          <a
            href="https://twitter.com/yoannfleurydev"
            title="Yoann Fleury's Twitter profile"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://github.com/yoannfleurydev"
            title="Yoann Fleury's GitHub profile"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://changelog.yoannfleury.dev"
            title="Yoann Fleury's Polywork page"
          >
            Polywork
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/yoannfleurydev/"
            title="Yoann Fleury's LinkedIn profile"
          >
            LinkedIn
          </a>{" "}
          or add me on Discord with the username <em>YoannFleuryDev#0001</em>
        </p>
      </div>
    </div>
  );
};

export default Home;
