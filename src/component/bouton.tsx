import React from "react"
import "./bouton.css"
export function Bouton({nom,icone,action}:{nom:string,icone:string,action:() => void}){
    return (
        <div onClick={action} className="btn">
            {nom} <img src={"/assets/img/"+icone} alt="icone de bouton"/>
        </div>
    )
}