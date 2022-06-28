import React, { useEffect, useState } from "react";
import Table from "./Table";
import Form from "./Form";
import ButtonNew from "./ButtonNew";

const Container = ({ pokemons, handleAction }) => {
    const [pokemonSelected, setPokemonSelected] = useState({});
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(pokemons);
    }, [pokemons]);

    return(
        <div className="App-Container">
            <ButtonNew handleNewData={setPokemonSelected} />        
            
            <Table pokemons={list} selectPokemon={setPokemonSelected} handleAction={handleAction} />
        
            <Form pokemonSelected={pokemonSelected} handleAction={handleAction} />
        </div>
    );
};

export default Container;