import PokemonContainer from './components/PokemonContainer';
import HeaderContainer from './components/HeaderContainer';
import LoginContainer from './components/LoginContainer';
import React, { useEffect, useState } from 'react';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = (user) => {
    localStorage.setItem("user", user);
    setAuthenticated(true);
  }

  useEffect(() => {
    let user = localStorage.getItem("user");
    if(user){
      handleAuthentication(user);
    }
  }, []);

  return (
    authenticated?
    <> 
      <HeaderContainer />    
      <PokemonContainer />
    </>
    :
    <>
      <LoginContainer handleAuthentication={handleAuthentication}/>
    </>
  );
}

export default App;
