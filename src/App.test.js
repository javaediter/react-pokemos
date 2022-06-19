import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import App from './App';
import Form from './components/Form';
import Table from './components/Table';

const pokemonUno = {
  id: 1,
  nombre: "uno",
  imagen: "uno.png",
  ataque: 50,
  defansa: 80
}

const pokemonDos = {
  id: 2,
  nombre: "dos",
  imagen: "dos.png",
  ataque: 95,
  defansa: 80
}

const pokemons = [pokemonUno, pokemonDos];

describe('Table and Form', () => {
  //props
  const tableProps = {
    pokemons: pokemons, 
    selectPokemon: jest.fn(), 
    deletePokemon: jest.fn()
  };

  test('render list of pokemons', () => {
    render(<Table {...tableProps} />);
    screen.debug();
  });

  test('selectPokemon call', () => {
    render(<Table {...tableProps} />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(tableProps.selectPokemon).toHaveBeenCalledTimes(1);
  });

  test('show pokemon selected in Form', () => {
    const formProps = {
      disabledButtonGuardar: false, 
      pokemonSelected: pokemonUno, 
      savePokemon: jest.fn()
    };

    render(<Form {...formProps} />);
    screen.debug();
  });
});
