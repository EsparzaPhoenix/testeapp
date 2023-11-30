"use client"

import { useEffect } from "react"

export default function ListaComida() {

    

    useEffect( ()=> {
        async function pegarComida(){
            const lista = await fetch("http://localhost:3000/api/comida")
            const listaC = lista.json()
            console.log(listaC)
        }
        pegarComida();


    },)
    
    return(
        <main>
            <h1>Lista Comida</h1>
        </main>
    )
}

    