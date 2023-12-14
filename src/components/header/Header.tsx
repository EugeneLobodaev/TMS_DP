import header from "./Header.module.css";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={header.header}>
      <NavLink to={"Pokemons/:id"} className={css.text}>
        Back to previous pokemon
      </NavLink>
      <NavLink to={"Pokemons"} className={css.text}>
        All Pokemons
      </NavLink>
    </header>
  );
};
