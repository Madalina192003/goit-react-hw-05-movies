import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link} activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </nav>
  );
}
