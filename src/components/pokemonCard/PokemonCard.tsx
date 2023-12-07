import React from "react";
import css from "./PokemonCard.module.scss";
import { PokemonProfileItem } from "../../types/itemList";
import { useDispatch } from "react-redux";
import { actionSetPokemonsProfile } from "../../redux/reducers/pokemonProfile/pokemonProfileActions";

interface CardData {
  name: string;
  sprites: any;
  data: PokemonProfileItem;
}

export const PokemonCard = (data: CardData) => {
  const dispatch = useDispatch();
  const goToProfile = (): void => {
    dispatch(actionSetPokemonsProfile(data));
  };
  return (
    <div onClick={() => goToProfile()}>
      <div className={css.img}>
        <img src={`${data.sprites.front_default}`} alt="#" />
      </div>
      <div className={css.label}>{`${data.name}`}</div>
    </div>
  );
};
