import Container from './components/Container';
import Header from './components/Header';
import Login from './components/Login';
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
      <Header />    
      <Container />
    </>
    :
    <>
      <Login handleAuthentication={handleAuthentication}/>
    </>
  );
}

export default App;
