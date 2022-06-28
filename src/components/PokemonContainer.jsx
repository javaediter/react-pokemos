import "../App.css";
import React, { useEffect, useRef, useState } from "react";
import pokemonService from "../services/pokemonService";
import Container from "./Container";
import Loading from "./Loading";

const PokemonContainer = () => {
    const isFirstRender = useRef(true);
    const [action, setAction] = useState('');
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const loadData = async () => {
        console.log(`cargando datos...`);
        pokemonService.getPokemons()
        .then(response => response.json())
        .then(data => setPokemons(data))
        .then(() => setLoading(true));
    }

    useEffect(() => {
        if(isFirstRender.current){
            isFirstRender.current = false;
            return;
        }
        console.log('in useEffect');
        loadData();
    }, [action]);

    return (
        loading?<Container pokemons={pokemons} handleAction={setAction} />:<Loading />
    )
};

export default PokemonContainer;