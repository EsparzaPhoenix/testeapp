import { NextResponse } from "next/server";

const comida = [
    {"comida": "banana"}
]


export async function GET(req, res) {
    console.log("")
    try {
        return NextResponse.json(comida);
    } catch (error) {
        console.error("Erro ao enviar resposta:", error);
        return status(500).json({ error: "Erro interno do servidor" });
    }
}
