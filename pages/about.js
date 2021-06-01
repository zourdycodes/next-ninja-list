import Head from "next/head";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          fuga rem ex cupiditate ut asperiores optio facilis repellendus.
          Voluptas dolorum sed modi illo ut, quidem debitis officia esse vero
          placeat minima! Praesentium odit pariatur ratione eos dolorum deserunt
          fugiat nostrum, sed quibusdam modi hic voluptatibus laborum voluptatum
          consectetur illo, nam eius maxime, beatae facere. Excepturi tempora
          cumque recusandae, laudantium aperiam ad minus nemo debitis deleniti,
          beatae, doloremque vel cupiditate qui?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          quisquam doloribus aliquam consectetur, repudiandae, iste quia culpa,
          facere modi voluptatibus accusantium! Quasi, quidem repudiandae
          doloribus illum quibusdam ipsa neque dolores quisquam dicta inventore
          animi, repellendus nisi quos officia excepturi soluta explicabo totam?
          Non, ipsam rerum.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
      </div>
    </>
  );
};

export default about;
