import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PokemonProfileItem } from "../../types/itemList";
import css from "./PokemonProfile.module.css";
import { ButtonHeader } from "../../components/shared/buttons";

export const PokemonProfile = () => {
  const profile: PokemonProfileItem | undefined = useSelector(
    (state: RootState) => state.pokemonProfileReducer.pokemonProfile
  );
  return (
    <div className={css.root}>
      <div className={css.profile}>
        <h1 className={css.name}>{profile?.name}</h1>
        <div className={css.profileContent}>
          <div className={css.imgWrap}>
            <img
              className={css.img}
              src={`${profile?.sprites.front_default}`}
              alt="#"
            />
          </div>
          <div className={css.stats}>
            <h2>Параметры {profile?.name}</h2>
            <span>Вес: {profile?.weight}</span>
            <span>Рост: {profile?.height}</span>
            <span>
              {profile?.stats[1].stat.name}: {profile?.stats[1].base_stat}
            </span>
            <span>
              {profile?.stats[2].stat.name}: {profile?.stats[2].base_stat}
            </span>
            <span>
              {profile?.stats[3].stat.name}: {profile?.stats[3].base_stat}
            </span>
            <span>
              {profile?.stats[4].stat.name}: {profile?.stats[4].base_stat}
            </span>
            <span>
              {profile?.stats[5].stat.name}: {profile?.stats[5].base_stat}
            </span>
          </div>
          <NavLink to={"Pokemons"} className={css.text}>
            <ButtonHeader
              name={"Назад"}
              className={css.button}
              onClick={undefined}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
