import { NextResponse } from "next/server";
import OpenAI from 'openai'

export async function POST(request) {

    const openai = new OpenAI({
        apiKey: process.env.API_KEY
    })

    // Pegando as informações do input do usuário
    const params = await request.json();
    
    // Passando as informações para a API Chat GPT
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: params.prompt //pergunta do usuário
            }
        ],

        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })



    // Enviando a resposta do Chat para o Front
    return NextResponse.json(response)
}