import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

function Navigation() {
    return (
        <nav>
            <ul className={css.nav}>
                <li>
                    <NavLink className={css.navLink} to='/' >Home</NavLink>
                </li>

                <li>
                    <NavLink className={css.navLink} to='/movies' >Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation