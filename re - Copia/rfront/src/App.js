import './App.css';
import React, { useState } from 'react';
import api from './api/api'
import getFuction from './api/apiRoutesGet'

function App() {

  const [email, setEmail] = useState("");

  function handleEmail(value) {
    console.log(value);
    setEmail(value);
  }

  const [senha, setSenha] = useState("");

  function handleSenha(value) {
    console.log(value);
    setSenha(value);
  }


  return (
    <div className="App">
      <header>
        <p>
          Teste de login conectado ao bd e server.
        </p>
      </header>
      <div>
        <label>E-mail </label>
        <input
          onChange={(event, value) => {
            handleEmail(event.target.value, value);
          }}>
        </input>
      </div>
      <div>
        <label>Senha </label>
        <input
          onChange={(event, value) => {
            handleSenha(event.target.value, value);
          }}>
        </input>
      </div>
      <button onClick={() => {
        api.post("users", { email, senha })
          .then((response) => console.log(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }}
      >Cadastrar</button>

      <button onClick={() => getFuction(email)}
      >Logar/Buscar e-mail</button>



    </div>

  );
}

export default App;
