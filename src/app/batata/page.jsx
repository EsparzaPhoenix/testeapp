"use client"

import Image from "next/image";
import Logo from "../../components/Logo/logo";
import Style from "../../styles/layout/app/batata/batata.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Batata(){

    const [nome, setNome]= useState(1)
    const router= useRouter()

    const teste=()=>{
        console.log("clickou")
        setNome(nome + 1)
    }
    useEffect(()=>{
        console.log("teste")
        if(nome > 10){
            router.push("/")
        }
    
    },[nome])

    return(
        <main className= {`${Style["batata"]}`}>
            <h1>Batata</h1>
            <Image src="/image/fuck.png" width={967} height={940}></Image>
            <Logo nome="batata muito foda" />
            <h1>{nome}</h1>
            <button onClick={()=>teste()}>penis</button>
        </main>
    )
}