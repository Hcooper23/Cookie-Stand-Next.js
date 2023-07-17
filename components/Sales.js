// This code imports necessary dependencies and resources
import { useState, useEffect } from 'react'; // Importing the useState and useEffect hooks from the 'react' package
import styles from '../styles/salestyle.module.css'; // Importing CSS styles from a separate file
import initialSalesData from '../utils/salesData'; // Importing initial sales data from a separate file

// This code exports a React component named "Sales"
export default function Sales() {
  // This section defines and initializes state variables using the useState hook
  const [salesData, setSalesData] = useState([]); // State variable for storing sales data
  const [isClient, setIsClient] = useState(false); // State variable to check if the code is running on the client side

  // This useEffect hook runs once when the component mounts
  useEffect(() => {
    setIsClient(true); // Set isClient state to true to indicate that the code is running on the client side
  }, []);

  // This function handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const city = event.target.city.value; // Get the value entered in the city input field
    const avgPurchase = +event.target.avgPurchase.value; // Get the value entered in the average purchase input field
    const minHourly = +event.target.minHourly.value; // Get the value entered in the minimum hourly input field
    const maxHourly = +event.target.maxHourly.value; // Get the value entered in the maximum hourly input field

    // Create a newLocation object with the form data
    const newLocation = {
      city,
      avgPurchase,
      minHourly,
      maxHourly,
    };

    // Update the salesData state by adding the new location
    setSalesData([...salesData, newLocation]);

    event.target.reset(); // Reset the form input fields
  };

  // This function calculates the number of cookies sold per hour for a given location
  const calculateCookiesPerHour = (minHourly, maxHourly, avgPurchase) => {
    const cookiesPerHour = [];
    for (let i = 0; i < 14; i++) {
      const randomCustomers = Math.floor(Math.random() * (maxHourly - minHourly + 1)) + minHourly;
      cookiesPerHour.push(Math.round(randomCustomers * avgPurchase));
    }
    return cookiesPerHour;
  };

  // This function calculates the total number of cookies sold for a given location
  const calculateTotalCookies = (cookiesPerHour) => {
    return cookiesPerHour.reduce((acc, curr) => acc + curr, 0);
  };

  // This useEffect hook runs once when the component mounts
  useEffect(() => {
    setSalesData(initialSalesData); // Set the initial sales data when the component mounts
  }, []);

  // This section returns the JSX elements to be rendered in the component
  return (
    <main className={styles.main}>
      <header>
        <h1>Sales Table</h1>
      </header>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Input fields for city, average purchase, minimum hourly, and maximum hourly */}
          <input className={styles.input} type="text" name="city" placeholder="City" required />
          <input className={styles.input} type="number" name="avgPurchase" placeholder="Average Purchase" required />
          <input className={styles.input} type="number" name="minHourly" placeholder="Min Customer" required />
          <input className={styles.input} type="number" name="maxHourly" placeholder="Max Customer" required />
          <button className={styles.submitButton} type="submit">Submit</button>
        </form>
      </div>
      <table className={styles.table}>
        <thead>
          {/* Table header */}
          <tr>
            <th>City</th>
            {/* Generate table headers for each hour */}
            {Array.from({ length: 14 }, (_, i) => i + 6).map((hour) => (
              <th key={hour}>{hour}AM</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Render table rows for each location in the salesData array */}
          {salesData.map((location, index) => (
            <tr key={index}>
              <td>{location.city}</td>
              {/* Render table cells for each hour, displaying the number of cookies sold */}
              {calculateCookiesPerHour(location.minHourly, location.maxHourly, location.avgPurchase).map((cookies, hour) => (
                <td key={hour}>{cookies}</td>
              ))}
              {/* Display the total number of cookies sold for the location */}
              <td>{calculateTotalCookies(calculateCookiesPerHour(location.minHourly, location.maxHourly, location.avgPurchase))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render images if the code is running on the client side */}
      {isClient && (
        <>
          <img className={styles.salmoncookie} src="../images/frosted-cookie (Lab08B).jpeg" alt="Frosted Cookie Samples" />
          <img className={styles.cookiecutter} src="../images/cutter (Lab08B).jpeg" alt="Salmon Cutter" />
          <img className={styles.schoolfish} src="../images/fish (Lab08B).jpeg" alt="School Of Fish" />
        </>
      )}
    </main>
  );
}
