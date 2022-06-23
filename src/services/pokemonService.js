const API_ENDPOINT=process.env.REACT_APP_API_ENDPOINT;

const pokemonService = {
    getPokemons: async () => {
        return await fetch(`${API_ENDPOINT}/todos`);
    },
    buscarPokemons: async (like) => {
        return await fetch(`${API_ENDPOINT}/buscar?nombre=${like}`);
    },
    deletePokemon: async (id) => {
        let options = {
            method: 'DELETE'
        }
        return await fetch(`${API_ENDPOINT}/eliminar/${id}`, options);
    },
    postPokemon: async (data) => {
        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        return await fetch(`${API_ENDPOINT}/guardar`, options);
    },
    putPokemon: async (data) => {
        let options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        return await fetch(`${API_ENDPOINT}/actualizar`, options);
    }
}

export default pokemonService;