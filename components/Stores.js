import styles from "../styles/storestyle.module.css";

export default function Stores() {
  return (
    <main className={styles.main}>
      <p>Hours Of Operation (6:00AM-7:00PM)</p>
      <section className={styles.storelocations}>
        <p>Store Locations:</p>
        <p className={styles.location}>
          Seattle - 10321 W McDowell Rd Seattle, WA 98451 (Main Office)
        </p>
        <p className={styles.location}>
          Tokyo - サンセットパームライン (Motomachi 1-Chrome) Tokyo, Japan 179-0074
        </p>
        <p className={styles.location}>
          Dubai - P.O Box 88152 Dubai, Emirates 88152
        </p>
        <p className={styles.location}>
          Paris - 9-13 Pl. du Colonel Fabien, 75010 Paris, France
        </p>
        <p className={styles.location}>
          Lima - MAL DE LA RESERVA 610 INT 149 MIRAFLORE Lima, Peru
        </p>
      </section>
      <img src="public/images/salmon.png" alt="Salmon Image" />
    </main>
  );
}
