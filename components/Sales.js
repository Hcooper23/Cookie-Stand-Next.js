import { useState } from 'react';
import styles from '../styles/salestyle.module.css';

export default function Sales() {
  const [salesData, setSalesData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const avgPurchase = event.target.avgPurchase.value;
    const minHourly = event.target.minHourly.value;
    const maxHourly = event.target.maxHourly.value;

    const newLocation = {
      city,
      avgPurchase,
      minHourly,
      maxHourly,
    };

    setSalesData((prevSalesData) => [...prevSalesData, newLocation]);

    event.target.reset();
  };

  const calculateCookiesPerHour = (minHourly, maxHourly, avgPurchase) => {
    const cookiesPerHour = [];
    for (let i = 0; i < 14; i++) {
      const randomCustomers = Math.floor(Math.random() * (maxHourly - minHourly + 1)) + minHourly;
      cookiesPerHour.push(Math.round(randomCustomers * avgPurchase));
    }
    return cookiesPerHour;
  };

  const calculateTotalCookies = (cookiesPerHour) => {
    return cookiesPerHour.reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <main className={styles.main}>
      <header>
        <h1>Sales Table</h1>
      </header>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} type="text" name="city" placeholder="City" required />
          <input className={styles.input} type="number" name="avgPurchase" placeholder="Average Purchase" required />
          <input className={styles.input} type="number" name="minHourly" placeholder="Min Customer" required />
          <input className={styles.input} type="number" name="maxHourly" placeholder="Max Customer" required />
          <button className={styles.submitButton} type="submit">Submit</button>
        </form>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>City</th>
            {Array.from({ length: 14 }, (_, i) => i + 6).map((hour) => (
              <th key={hour}>{hour}AM</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((location, index) => (
            <tr key={index}>
              <td>{location.city}</td>
              {calculateCookiesPerHour(location.minHourly, location.maxHourly, location.avgPurchase).map((cookies, hour) => (
                <td key={hour}>{cookies}</td>
              ))}
              <td>{calculateTotalCookies(calculateCookiesPerHour(location.minHourly, location.maxHourly, location.avgPurchase))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img className={styles.salmoncookie} src="/images/frosted-cookie.jpeg" alt="Frosted Cookie Samples" />
      <img className={styles.cookiecutter} src="/images/cutter.jpeg" alt="Salmon Cutter" />
      <img className={styles.schoolfish} src="/images/fish.jpeg" alt="School Of Fish" />
    </main>
  );
}
