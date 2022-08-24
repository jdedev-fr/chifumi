import React, { useEffect, useState } from 'react';
import './App.css';
import { Bouton } from './component/bouton';
import { Conteneur } from './component/contener';
import {monChoix,JWIN,CWIN,EGAL,PIERRE,PAPIER,CISEAUX,launchBot} from "./utils"
import { Ligne } from './component/ligne';
import { Card } from './component/card';

function App() {
  const [win,setWin] = useState(-2)
  
  const [cJou,setCJou] = useState(-2)
  const [cBot,setCBot] = useState(-2)
  function handleClick(n:number){
   setCJou(n)
   setCBot(launchBot())
  }
 
  useEffect(()=>{  
    setWin(monChoix(cJou,cBot))
  },[cBot,cJou])
  return (
    <div className="App">
      <Conteneur>
      <h2>Faites un choix</h2>
        <Bouton nom="Pierre" icone="pierre.png" action={()=>handleClick(PIERRE)}/>
        <Bouton nom="Feuille" icone="papier.png" action={()=>handleClick(PAPIER)}/>
        <Bouton nom="Ciseaux" icone="ciseaux.png" action={()=>handleClick(CISEAUX)}/>
      </Conteneur>
      <Conteneur>
        <h2>Les choix de la partie</h2>
      <Ligne>
        <Card type={cJou} nom="Joueur"></Card>
        <p>VS</p>
        <Card type={cBot} nom="Robot"></Card>
      </Ligne>
      </Conteneur>
      <Conteneur>
        <h2>Résultat</h2>
        {(win===JWIN)?
          <p>le joueur à gagné</p>:
        (win===EGAL)?
          <p>Egalité</p>:
        (win===CWIN)?<p>Le joueur à perdu</p>:<p></p>}
      </Conteneur>
    </div>
  );
}

export default App;
