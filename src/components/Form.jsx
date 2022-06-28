import "../App.css";
import React, { useEffect, useState } from "react";
import pokemonService from "../services/pokemonService";

const Form = ({ pokemonSelected, handleAction }) => {
    const nuevo = {
        nombre: '',
        imagen: '',
        ataque: 50,
        defensa: 50,
        id: 0
    };
    const [disableButton, setDisabledButton] = useState(true);
    const [values, setValues] = useState(nuevo);

    const handleChange = ({ target: { name, value }}) => {
        setValues({...values, [name]: value});
    }

    const save = async (e) => {    
        e.preventDefault();

        if(await validateData(e)){
            return;
        }

        if(values.id > 0){
            //pokemonService.putPokemon(values).then(() => reloadData());
            await pokemonService.putPokemon(values);
            await cancel(e);
            await handleAction('update');
        }else{            
            //pokemonService.postPokemon(values).then(() => reloadData());
            await pokemonService.postPokemon(values);
            await cancel(e);
            await handleAction('save');
        }        
    }

    const validateData = async (e) => {
        let emptyData = false;
                
        if(!e.target.nombre || e.target.nombre.value === ''){
            e.target.nombre.classList.add("App-Input-Error");
            emptyData = true;
        }else{
            e.target.nombre.classList.remove("App-Input-Error");
        }

        if(!e.target.imagen || e.target.imagen.value === ''){
            e.target.imagen.classList.add("App-Input-Error");
            emptyData = true;
        }else{
            e.target.imagen.classList.remove("App-Input-Error");
        }

        return emptyData;
    }

    const cancel = async (e) => {
        setValues(nuevo);
        e.target.reset();
        setDisabledButton(true);
    }

    useEffect(() => {
        if(pokemonSelected && pokemonSelected.isUpdate !== undefined && pokemonSelected.isUpdate){
            setValues(pokemonSelected);
            setDisabledButton(false);
        }        
    }, [pokemonSelected]);

    return (
        <div className="App-Border">
            <div className="App-Text-2">
                <label>Nuevo Pokemon</label>
            </div>

            <form id="form" onSubmit={save}>
                <div className="App-Text-4">                    
                    <div className="App-Grid">
                        <div></div>
                        <div>
                            <label>Nombre:</label>
                            <input type="text" className="App-Input App-Border" name="nombre" value={values.nombre} onChange={handleChange} />
                        </div>
                        <div>                            
                            <label>Ataque:</label>&nbsp;&nbsp;
                            <span>0</span>
                            <input type="range" min="0" max="100" className="App-Range" name="ataque" value={values.ataque} onChange={handleChange}/>
                            <span>100</span>                            
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                            <label>Imagen:</label>
                            <input type="url" placeholder="url" className="App-Input App-Border" name="imagen" value={values.imagen} onChange={handleChange}/>
                        </div>
                        <div>                            
                            <label>Defansa:</label>&nbsp;&nbsp;
                            <span>0</span>
                            <input type="range" min="0" max="100" className="App-Range" name="defensa" value={values.defensa} onChange={handleChange}/>
                            <span>100</span>                            
                        </div>
                        <div>
                            <input type="hidden" name="id" value={values.id} />
                        </div>
                    </div>                
                </div>            
                
                <div className="App-Content-Center">
                    <button className="App-Button" type="submit" disabled={disableButton}>Guardar</button>
                    <button className="App-Button" type="button" onClick={cancel}>Cancelar</button>
                </div>
            </form>
        </div>       
    );
};

export default Form;