import styles from "../../styles/Ninjas.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths, //* render from the API
    fallback: false,
  };
};

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
    <div>
      <h1 className={styles.head}>{ninja.name}</h1>
      <div className={styles.wrap}>
        <p>
          <span className={styles.details}>Email:</span> {ninja.email}
        </p>
        <p>
          <span className={styles.details}>Website:</span> {ninja.website}
        </p>
        <p>
          <span className={styles.details}>Address:</span>{" "}
          {ninja.address.street}, {ninja.address.suite}, {ninja.address.city}{" "}
          {ninja.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default Details;
