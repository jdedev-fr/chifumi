import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bouton } from './component/bouton';
import { Conteneur } from './component/contener';
import {monChoix,JWIN,CWIN,EGAL,PIERRE,PAPIER,CISEAUX} from "./utils"

function App() {
const [win,setWin] = useState(0)
  function handleClick(n:number){
    setWin(monChoix(n))
  }
  return (
    <div className="App">
      <Conteneur>
      <h2>Faites un choix</h2>
        <Bouton nom="Pierre" icone="pierre.png" action={()=>handleClick(PIERRE)}/>
        <Bouton nom="Feuille" icone="papier.png" action={()=>handleClick(PAPIER)}/>
        <Bouton nom="Ciseaux" icone="ciseaux.png" action={()=>handleClick(CISEAUX)}/>
      </Conteneur>
      <Conteneur>
        <h2>Résultat</h2>
        {(win===JWIN)?<p>le joueur à gagné</p>:(win===EGAL)?<p>Egalité</p>:<p>Le joueur à perdu</p>}
      </Conteneur>
    </div>
  );
}

export default App;
