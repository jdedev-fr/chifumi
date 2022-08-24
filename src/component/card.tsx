import React from "react"
import "./card.css"
import {PAPIER,PIERRE,CISEAUX} from "../utils"
export function Card({nom,type}:{nom:string,type:number}){
    return (
        <article className="card">
            {(type===PAPIER)?
                <img src={"/assets/img/papier.png"} />:
            (type===PIERRE)?
                <img src={"/assets/img/pierre.png"} />:
            (type===CISEAUX)?
                <img src={"/assets/img/ciseaux.png"} />:""}
             <h3>{nom}</h3>
             <p>{(type===PAPIER)?
                    "PAPIER":
                (type===PIERRE)?
                    "PIERRE":
                (type===CISEAUX)?
                    "CISEAUX":"INCONNUS"}</p>
        </article>
    )
}