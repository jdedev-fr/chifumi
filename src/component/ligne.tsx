import React from "react"
import "./ligne.css"

export function Ligne({children}:{children:JSX.Element | JSX.Element[]}) {
    return(
        <section className="ligne">
            {children}
        </section>
    )
}