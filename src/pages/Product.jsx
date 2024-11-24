import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat <br />
            architecto sapiente eius non soluta, molestiae nihil laborum,
            placeat debitis,
            <br /> laboriosam at fuga perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt
            <br /> expedita ratione iusto, magni, id sapiente sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
