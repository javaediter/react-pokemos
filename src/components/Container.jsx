import "../App.css";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import pokemonService from "../services/pokemonService";

const Container = () => {
    const [loading, setLoading] = useState(false);
    const [disabledButtonGuardar, setDisabledButtonGuardar] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState({});

    const onNewPokemon = async () => {
        setDisabledButtonGuardar(false);
        setPokemonSelected({
            id: 0,
            nombre: "",
            imagen: "http://",
            ataque: 50,
            defensa: 50
        });
    }

    const selectPokemon = async (pokemon) => {
        setPokemonSelected(pokemon); 
        setDisabledButtonGuardar(false);       
    }

    const savePokemon = async (data) => {     
        if(data.id > 0){
            pokemonService.putPokemon(data).then(() => loadData());
        }else{            
            pokemonService.postPokemon(data).then(() => loadData());
        }
    }

    const deletePokemon = async (pokemon) => {
        let ok = window.confirm("Desea eliminar el pokemon " + pokemon.nombre);
        if(ok){
            pokemonService.deletePokemon(pokemon.id).then(() => loadData());
        }        
    }

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
        loading?
        <div className="App-Container">
            <div className="App-Content-Right">
                <button type="button" className="App-Button" onClick={onNewPokemon}>Nuevo</button>
            </div>        
            
            <Table pokemons={pokemons} selectPokemon={selectPokemon} deletePokemon={deletePokemon} />
        
            <Form disabledButtonGuardar={disabledButtonGuardar} pokemonSelected={pokemonSelected} savePokemon={savePokemon} />
        </div>
        :
        <div className="App-Loading">
            <p>Loading...</p>
        </div>
    )
};

export default Container;