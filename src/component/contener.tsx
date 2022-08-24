import React from "react"
import "./contener.css"

export function Conteneur({children}:{children:JSX.Element | JSX.Element[]}) {
    return(
        <section className="conteneur">
            {children}
        </section>
    )
}