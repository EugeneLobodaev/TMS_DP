import css from "./PokemonCard.module.css";
import { PokemonProfileItem } from "../../types/itemList";
import { useDispatch } from "react-redux";
import { getPokemonProfile } from "../../redux/thunks/getPokemonProfileThunk";
import { Link, NavLink } from "react-router-dom";

export const PokemonCard = (data: PokemonProfileItem) => {
  const dispatch = useDispatch();

  return (
    <Link to={`${data.id}`}>
      <div
        onClick={() => dispatch(getPokemonProfile(data.id))}
        className={css.root}
      >
        <div className={css.img}>
          <img src={`${data.sprites.front_default}`} alt="#" />
        </div>

        <div className={css.label}>{`${data.name
          .charAt(0)
          .toUpperCase()}${data.name.slice(1)}`}</div>
      </div>
    </Link>
  );
};
