import styles from '../styles/contactstyle.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <section>
        <p>
          Welcome to our "Contact Us" page, which provides you an opportunity to send us any feedback you may have.
          We value your input and aim to continuously improve our products and services. Please fill out the form below
          and let us know how we can assist you.
        </p>
        <div className={styles.container}>
          <form action="action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="peru">Peru</option>
              <option value="japan">Japan</option>
              <option value="usa">USA</option>
              <option value="emirates">Emirates</option>
              <option value="france">France</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </main>
  );
}
