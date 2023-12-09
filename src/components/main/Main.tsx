import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Main.module.css";
import { actionFetchPokemonList } from "../../redux/reducers/pokemonList/pokemonListActions";
import { RootState } from "../../redux/store";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";
import { getPokemonList } from "../../redux/thunks/getPokemonListThunk";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const pokemonsList = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsList
  );
  const pokemonsListIsLoading = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsListLoading
  );
  const pokemonsListError = useSelector(
    (state: RootState) => state.pokemonsListReducer.pokemonsListError
  );

  React.useEffect(() => {
    dispatch(getPokemonList());
  });

  if (!pokemonsList.length && pokemonsListIsLoading) {
    return <div>Список загружается</div>;
  }

  if (pokemonsListError) {
    return <div>ошибка загрузки списка</div>;
  }

  return (
    <div className={css.list}>
      <h1>Список Покемонов</h1>
        <div className={css.list}>
          {pokemonsList.map((item) => (
            <PokemonCard data={item} key={item.id} name={""} sprites={undefined} />
          ))}
        </div>
    </div>
  );
};

