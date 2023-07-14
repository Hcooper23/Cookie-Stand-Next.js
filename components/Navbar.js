import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '10px' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link href="/sales">Sales Data</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link href="/stores">Locations</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
