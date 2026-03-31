import { useApp } from '../context/AppContext';
import styles from './Nav.module.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'browse', label: 'Browse Materials' },
  { id: 'offer', label: 'Offer Materials' },
  { id: 'request', label: 'Request Materials' },
  { id: 'about', label: 'About' },
];

export default function Nav() {
  const { currentPage, setCurrentPage } = useApp();

  return (
    <nav className={styles.nav}>
      <button className={styles.logo} onClick={() => setCurrentPage('home')}>
        <span className={styles.logoIcon}>✦</span> From Scratch
      </button>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`${styles.navLink} ${currentPage === item.id ? styles.active : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
