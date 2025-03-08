import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

const Navigation = () => (
  <nav className={css.nav}>
    <NavLink className={css.navLink} to="/">Home</NavLink>
    <NavLink className={css.navLink} to="/movies">Movies</NavLink>
  </nav>
);

export default Navigation;
