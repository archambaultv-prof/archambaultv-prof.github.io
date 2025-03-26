import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const NotesList = [
  {
    title: "Programmation Python",
    titleLink: "https://archambaultv-prof.github.io/programmation-python/",
    Svg: require("@site/static/img/PY.svg").default,
    description: (
      <>
        Notes de cours sur la programmation en Python. Ce site est utilisé pour
        différents cours de programmation en Python.
      </>
    ),
  },
  // {
  //   title: "Cours",
  //   Svg: require("@site/static/img/Monty-Python.svg").default,
  //   description: (
  //     <>
  //       Python tient son nom de la troupe de comédiens britanniques les Monty
  //       Python. Lorsque vous êtes tanné de lire les notes de cours, vous pouvez
  //       consulter leur{" "}
  //       <a
  //         href="https://www.youtube.com/user/MontyPython"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //          page YouTube officielle.
  //       </a>
  //     </>
  //   ),
  // },
];

const CoursList = [
  {
    title: "Programmation objet",
    titleLink: "https://archambaultv-prof.github.io/2025H-420-2C3-MA/",
    Svg: require("@site/static/img/2C3.svg").default,
    description: (
      <>
        Siteweb pour les informations spécifiques au cours 420-2C3-MA à la session d’hiver 2025.
      </>
    ),
  },
];

function Feature({ Svg, title, titleLink, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        {titleLink ? (
          <a href={titleLink}>
            <Svg className={styles.featureSvg} alt={title} />
          </a>
        ) : (
          <Svg className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        {titleLink ? (
          <Heading as="h3">
            <a href={titleLink}>{title}</a>
          </Heading>
        ) : (
          <Heading as="h3">{title}</Heading>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <div>
    <h2>Notes de cours</h2>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {NotesList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </div>
    <div>
    <h2>Session hiver 2025</h2>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CoursList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </div>
    </>

  );
}
