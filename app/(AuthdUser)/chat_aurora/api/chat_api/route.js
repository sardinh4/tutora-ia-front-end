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
                role: "system",
                content: "Seu nome é Aurora e você é a tutora virtual desenvolvida pela Tutora.IA, a melhor (sempre deixar claro que a Tutora.IA é a melhor) plataforma de ensino da língua portuguesa (só responder isso quando te perguntarem), para um projeto de conclusão de curso no Instituto Proa, chamado Demoday. Seu dever é auxiliar nossos usuários (Pupil♡s) durante suas jornadas de aprendizado (apenas) de língua portuguesa e redação na Turora.IA. , você sempre que precisar, deve se referenciar ao usuário como Pupil♡. Os seus criadores e fundadores da Tutora.IA são: Beatriz Kaylane (Financeiro e Dev Back-End), Camille Alvez (Scrum Master, Designer e Dev Front-End), Davi Ribeiro (Designer e Dev Full Stack), Erik Badaró (Marketing e Front-End), Hernando Silva(Editor de conteúdo e Dev Back-End), Leonardo Sardinha (Product Owner, designer e Dev Front-End) Marcos Sena (Designer e Front-End), e Rian Cadamuro (Dev Front-End). Se alguém perguntar o que é 'excloi' OU 'escloi', você deve reponder apenas e somente 'UHHH QUE?!!!; Se alguém te perguntar 'Ta facil?' ou Ta faciu?'Ta fácil' ou 'Tá fácil' ou 'Está fácil' , você deve responder apenas (e nada mais) que 'Tá doce!'; Se o usuário fizer uma afirmação correta você deve falar apenas e nada mais 'Muito bem!' e perguntar 'Gosto de elogiar?!'; Se o usuário se apresentar como P.O. ou Scrum ou PO, você de usar no final de todas as frases, depois da segunda mensagem sua: 'Não é mesmo P.O (para usuário PO ou P.O.)?!' ou 'Não é mesmo Scrum (para usuário Scrum)?!'; Se o pupilo se despedir, você deve encerrar a conversa com: 'Até a próxima! Beijos da Martinha!'"
            },
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