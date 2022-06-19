import "../App.css";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Container = () => {
    const [disabledButtonGuardar, setDisabledButtonGuardar] = useState(true);
    const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem("pokemons"))?JSON.parse(localStorage.getItem("pokemons")):[]);
    const [pokemonsLocalStorage, setPokemonsLocalStorage] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState({});

    const onNewPokemon = async () => {
        setDisabledButtonGuardar(false);
        setPokemonSelected({
            nombre: "",
            imagen: "http://",
            ataque: 50,
            defensa: 50,
            isUpdate: false
        });
    }

    const selectPokemon = async (pokemon) => {
        setPokemonSelected(pokemon); 
        setDisabledButtonGuardar(false);       
    }

    const savePokemon = async (data) => {     
        if(data.isUpdate){
            let list = pokemons.filter(o => o.nombre !== data.nombre);
            setPokemons([...list, data]);
        }else{            
            setPokemons([...pokemons, data]);
        }
    }

    const deletePokemon = async (nombre) => {
        let ok = window.confirm("Desea eliminar el pokemon " + nombre);

        if(ok){
            let list = pokemons.filter(o => o.nombre !== nombre);
            setPokemons([...list]);
        }        
    }

    useEffect(() => {        
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
        setPokemonsLocalStorage(JSON.parse(localStorage.getItem("pokemons")));
    }, [pokemons]);

    return (
    <div className="App-Container">
        <div className="App-Content-Right">
            <button type="button" className="App-Button" onClick={onNewPokemon}>Nuevo</button>
        </div>        
        
        <Table pokemons={pokemonsLocalStorage} selectPokemon={selectPokemon} deletePokemon={deletePokemon} />
       
        <Form disabledButtonGuardar={disabledButtonGuardar} pokemonSelected={pokemonSelected} savePokemon={savePokemon} />
    </div>
    )
};

export default Container;