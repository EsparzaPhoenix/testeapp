import { NextResponse } from "next/server";

const nome = [
    {"nome": "leandro", id: 1},
    {"nome": "kleber", id: 2},
    {"nome": "gabriel", id: 3}
];

export async function GET(res, req) {
    console.log("Handler chamado");
    
    try {
        return NextResponse.json(nome);
    } catch (error) {
        console.error("Erro ao enviar resposta:", error);
        return status(500).json({ error: "Erro interno do servidor" });
    }
}