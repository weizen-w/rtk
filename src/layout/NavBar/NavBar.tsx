import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
	return (
		<nav className={styles.container}>
			<NavLink className={styles.link} to="/">
				Home
			</NavLink>
			<NavLink className={styles.link} to="counter">
				Counter
			</NavLink>
			<NavLink className={styles.link} to="products">
				Products
			</NavLink>
		</nav>
	);
}
