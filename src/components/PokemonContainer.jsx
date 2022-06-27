import "../App.css";
import React, { useEffect, useState } from "react";
import pokemonService from "../services/pokemonService";
import Container from "./Container";
import Loading from "./Loading";

const PokemonContainer = () => {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const loadData = async () => {
        pokemonService.getPokemons()
        .then(response => response.json())
        .then(data => setPokemons(data))
        .then(() => setLoading(true));
    }

    useEffect(() => {        
        loadData();
    }, []);

    return (
        loading?<Container pokemons={pokemons} reloadData={loadData} />:<Loading />
    )
};

export default PokemonContainer;