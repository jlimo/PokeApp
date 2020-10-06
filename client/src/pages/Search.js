// show page will just look for pokemon through name and pull up said names and stats
// looking at references i realised i could have made this much more simple but it is what it is

import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import typeColors from '../helpers/typeColors';
const Search = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokemonType, setPokemonType] = useState("");
    const [pokemonStats, setPokemonStats] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };
    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonStats(res.data.stats[0].base_stat);
            setPokemonData(toArray);
        } catch (e) {
            console.log(e);
    }
};
console.log(pokemonStats);

return (
    <div className="Search">
    <form onSubmit={handleSubmit}>
        <label>
            <input
            type="text"
            onChange={handleChange}
            placeholder="search pokemon"
            />
        </label>
    </form>
    {pokemonData.map((data) => {
        return (
    <div className="container">
        <img src={data.sprites["front_default"]} />
        <div className="PokemonTable">
            <div className="statsBody">
                <div className="statsRow">
                    <div className="pokemonTableCell">Type</div>
                    <div className="pokemonTableCell" style={{ backgroundColor: typeColors[pokemonType] }}>{pokemonType}</div>
                </div>
                <div className="pokemonTableRow">
                    <div className="pokemonTableCell">BaseStat</div>
                    <div className="pokemonTableCell">{pokemonStats}</div>
                </div>
                <div className="pokemonTableRow">
                    <div className="pokemonTableCell">Height</div>
                    <div className="pokemonTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                    </div>
                </div>
                <div className="pokemonTableRow">
                    <div className="pokemonTableCell">Weight</div>
                    <div className="pokemonTableCell">
                    {" "}
                    {Math.round(data.height / 4.3)} lbs
                    </div>
                </div>
            </div>
        </div>
    </div>
);
})}
</div>
);
};

export default Search;