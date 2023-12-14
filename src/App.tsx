import "./App.css";
import { Main } from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { GetStarted } from "./pages/getStarted/GetStarted";
import { NotFound } from "./pages/NotFound";
import { PokemonCard } from "./components/pokemonCard";
import { PokemonProfile } from "./pages/PokemonProfile";

function App(): any {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetStarted />} />
          <Route path="Pokemons" element={<Main />} />
          <Route
            path="Pokemon/:id"
            element={
              <PokemonCard
                id={0}
                name={""}
                height={0}
                weight={0}
                stats={[]}
                types={[]}
                sprites={""}
              />
            }
          />
          <Route />
          <Route path="*" element={<PokemonProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
