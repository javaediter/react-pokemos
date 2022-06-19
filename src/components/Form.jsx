import "../App.css";
import React, { useEffect, useState } from "react";

const Form = ({ disabledButtonGuardar, pokemonSelected, savePokemon }) => {
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("http://");
    const [ataque, setAtaque] = useState(50);
    const [defensa, setDefensa] = useState(50);
    const [isUpdate, setIsUpdate] = useState(false);
    const [disableButton, setDisabledButton] = useState(true);

    const cleanForm = async () => {
        setNombre("");
        setImagen("http://");
        setAtaque(50);
        setDefensa(50);
        setIsUpdate(false);
    }

    const onChangeValue = async (e) => {
        if(e.target.name==="nombre"){
            setNombre(e.target.value);
        }else if(e.target.name==="imagen"){
            setImagen(e.target.value);
        }else if(e.target.name==="ataque"){
            setAtaque(e.target.value);
        }else{
            setDefensa(e.target.value);
        }
    }

    const saveData = async (e) => {
        e.preventDefault();

        if(await validateData(e)){
            return;
        }

        savePokemon({
            nombre: nombre,
            imagen: imagen,
            ataque: ataque,
            defensa: defensa,
            isUpdate: isUpdate
        });
        
        let form = e.target;
        form.reset();
        await cancel();
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

    const cancel = async () => {
        setDisabledButton(true);
        await cleanForm();
    }

    useEffect(() => {
        if(pokemonSelected && pokemonSelected.isUpdate !== undefined && pokemonSelected.isUpdate){
            setNombre(pokemonSelected.nombre);
            setImagen(pokemonSelected.imagen);
            setAtaque(pokemonSelected.ataque);
            setDefensa(pokemonSelected.defensa);
            setIsUpdate(pokemonSelected.isUpdate);
        }
        setDisabledButton(disabledButtonGuardar);
    }, [pokemonSelected, disabledButtonGuardar]);

    return (
        <div className="App-Border">
            <div className="App-Text-2">
                <label>Nuevo Pokemon</label>
            </div>

            <form id="form" onSubmit={saveData}>
                <div className="App-Text-4">                    
                    <div className="App-Grid">
                        <div></div>
                        <div>
                            <label>Nombre:</label>
                            <input type="text" className="App-Input App-Border" name="nombre" value={nombre} onChange={onChangeValue} />
                        </div>
                        <div>                            
                            <label>Ataque:</label>&nbsp;&nbsp;
                            <span>0</span>
                            <input type="range" min="0" max="100" className="App-Range" name="ataque" value={ataque} onChange={onChangeValue}/>
                            <span>100</span>                            
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                            <label>Imagen:</label>
                            <input type="url" placeholder="url" className="App-Input App-Border" name="imagen" value={imagen} onChange={onChangeValue}/>
                        </div>
                        <div>                            
                            <label>Defansa:</label>&nbsp;&nbsp;
                            <span>0</span>
                            <input type="range" min="0" max="100" className="App-Range" name="defensa" value={defensa} onChange={onChangeValue}/>
                            <span>100</span>                            
                        </div>
                        <div>
                            <input type="hidden" name="isUpdate" value={isUpdate} />
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