// This line imports the CSS styles from a separate file called storestyle.module.css
import styles from "../styles/storestyle.module.css";

// This function component represents the Stores component
export default function Stores() {
  return (
    // The main tag represents the main content of the page and has a class name assigned to it
    <main className={styles.main}>
      {/* The following line displays the store's hours of operation */}
      <p>Hours Of Operation (6:00AM-7:00PM)</p>
      
      {/* The section tag groups related content together */}
      <section className={styles.storelocations}>
        {/* The following line displays a heading for the store locations */}
        <p>Store Locations:</p>
        
        {/* The following lines display individual store locations */}
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
  
      {/* The following line displays an image of salmon */}
      <img src="../images/salmon (Lab08B).png" alt="Salmon Image" />
    </main>
  );
}
