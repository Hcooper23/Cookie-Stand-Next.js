// This code is for a "Contact Us" page that allows users to send feedback to the website owners.

// Importing the CSS styles from a separate file
import styles from '../styles/contactstyle.module.css';

// Defining the Contact component as the default export
export default function Contact() {
  return (
    // The main container for the contact page, using the imported CSS styles
    <main className={styles.main}>
      <section>
        <p>
          Welcome to our "Contact Us" page, which provides you an opportunity to send us any feedback you may have.
          We value your input and aim to continuously improve our products and services. Please fill out the form below
          and let us know how we can assist you.
        </p>
        {/* A container div for the contact form, using the imported CSS styles */}
        <div className={styles.container}>
          <form action="action_page.php">
            {/* Input field for the user's first name */}
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            {/* Input field for the user's last name */}
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            {/* Drop-down menu for selecting the user's country */}
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="peru">Peru</option>
              <option value="japan">Japan</option>
              <option value="usa">USA</option>
              <option value="emirates">Emirates</option>
              <option value="france">France</option>
            </select>

            {/* Textarea for the user to write their feedback */}
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

            {/* Submit button for sending the form */}
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </main>
  );
}

// The code imports CSS styles from a separate file called contactstyle.module.css. These styles are used to control the appearance of the contact page.
// The code defines a React functional component named Contact as the default export. This component represents the contact page and will be rendered by other parts of the application.
// Inside the Contact component, there is a main container element with a class name styles.main. The styles.main class is defined in the imported CSS file and determines the layout and styling of the main container.
// Within the main container, there is a section element that contains a brief introductory paragraph explaining the purpose of the "Contact Us" page. The paragraph encourages users to provide feedback and assures them that their input is valued.
// Inside the section element, there is a div container element with a class name styles.container. The styles.container class is defined in the imported CSS file and determines the layout and styling of the contact form.
// The contact form itself is defined within a form element. The form has an action attribute set to "action_page.php", which specifies the URL where the form data will be sent for processing (not implemented in this code).
// The form contains several input fields and elements:
// An input field for the user's first name, with an associated label element.
// An input field for the user's last name, with an associated label element.
// A select element (drop-down menu) for selecting the user's country, with an associated label element. The available options are defined using option elements with corresponding values and display names.
// A textarea element for the user to write their feedback, with an associated label element. The textarea has an inline style attribute that sets its height to 200px.
// An input button with type="submit" for submitting the form.