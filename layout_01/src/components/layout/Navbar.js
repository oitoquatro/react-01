import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/WhatsApp Image 2023-07-19 at 20.01.39.jpeg'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Layout" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Page2">Página 2</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Page3">Página 3</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    ) 
}

export default Navbar