"use client"

import { useEffect, useState } from "react"

export default function ListaPaciente() {

    const [listar, setListar] = useState();

    useEffect( ()=>{
        async function adiquirirLista(){
            const lista = await fetch("http://localhost:3000/api/listar")
            const listaU = await lista.json()
            setListar(listaU)
            
        }
        adiquirirLista()
    },[]
    )

    useEffect( ()=>{
        console.log(listar)


    },[listar])

    return(
        <main>
            <h1>Lista Paciente</h1>
            {listar && listar.map((item)=>{
                return <p key={item.id}>{item.nome} {item.id}</p>
            })}
        </main>
    )
}