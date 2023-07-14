import styles from '../styles/homestyle.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Salmon Bam Cookies</h1>
      <div className={styles.bodyimgtext}>
        <p>
          Welcome to the Salmon Bam Cookies page. We would like to introduce you to this amazing concept we have to offer.
          Our products are not only delicious cookies but also environmentally safe, designed with both the customer and the
          environment in mind. Our journey began when we witnessed the impact of pollution on marine life. We strive to make
          eco-friendly products and offer zero-waste packaging.
        </p>
        <img className={styles.family} src="../images/family (Lab08B).jpeg" alt="Family Photo" />
      </div>
    </main>
  );
}
