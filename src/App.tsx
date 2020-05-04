import React from "react";
import "./App.css";
import PokemonSearch from "./components/PokemonSearch";

function App() {
    return (
        <div className="App">
            <PokemonSearch name={"John"} noOfPokemns={20} />
        </div>
    );
}

export default App;
