'use client'
import React from "react";
import { Card, CardHeader, CardBody, Tabs, Tab, Button } from "@nextui-org/react";
import PurpleBackground from "@/app/components/purpleBackgroundAuthdUser/purpleBackground";
import { Exo_2, Poppins } from "next/font/google";
import Link from "next/link";

const exo = Exo_2({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--exo',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppins',
})

export default function SelectRedacao() {

  return (
    <PurpleBackground>
      <Tabs aria-label="Options" color="secondary" className="fixed bottom-16 rounded-md">
        <Tab key="estilos" title="Estilos">
          <div className="flex gap-10 overflow-x-auto overflow-y-hidden w-full">
            <Card className="flex text-center justify-between items-center w-[380px] h-[65vh] bg-[#4b2395] rounded-2xl py-14 px-14 gap-5">
              <CardHeader className="justify-center">
                <div className="flex flex-col">
                  <p className="text-4xl text-center font-exo font-bold">Treinamento</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="font-poppins italic text-xl">Tenha sua redação avaliada segundo critérios gerais de correção. Essa é a melhor opção caso você deseje treinar a sua escrita sem foco em alguma prova específica . A sua redação receberá uma nota de 0 a 10, sendo avaliada segundo 4 competências, que valem 2,5 pontos cada.</p>
              </CardBody>
            </Card>
            <Card className="flex text-center justify-start items-center w-[380px] h-[65vh] bg-white rounded-2xl py-14 px-14 gap-5">
              <CardHeader className="justify-center">
                <div className="flex flex-col">
                  <p className="text-4xl text-center font-exo font-bold text-[#4b2395]">Desafio Enem</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="font-poppins italic text-xl text-black">A nota da redação varia entre 0 (zero) a 1000 (mil) pontos, sendo atribuída com base em 5 competências (200 pontos por competência).</p>
              </CardBody>
            </Card>
            <Card className="flex text-center justify-start items-center w-[380px] h-[65vh] bg-white rounded-2xl py-14 px-14 gap-5">
              <CardHeader className="justify-center">
                <div className="flex flex-col">
                  <p className="text-4xl text-center font-exo font-bold text-[#4b2395]">Desafio Fuvest</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="font-poppins italic text-xl text-black">Na Fuvest, cobra-se a escrita de uma redação como parte da prova do primeiro dia da segunda fase do exame. A redação vale metade da prova, isto é, 50 pontos. Ela é avaliada de acordo com 3 critérios, que valem, respectivamente, 20, 15 e 15 pontos cada.</p>
              </CardBody>
            </Card>
          </div>
        </Tab>

        <Tab key="tema" title="Tema">
          <Card className="h-36">
            <CardHeader>
              <h1>Tema gerado pela nossa IA Aurora:</h1>
            </CardHeader>
          </Card>
        </Tab>

        <Tab key="orientacao" title="Orientações" className="w-full h-auto">
          <Card className="h-full w-full">
            <CardHeader>
              <h4 className="text-3xl text-fuchsia-700 ">Para uma redação eficiente, siga estas orientações:</h4>
            </CardHeader>
            <CardBody>
              <p className="text-xl">Leia o tema cuidadosamente, assegurando uma compreensão completa das instruções.<br />
                Reflita sobre o tema, fazendo uma análise crítica e identificando os pontos principais. <br />
                Divida sua redação em introdução, desenvolvimento e conclusão.<br /> Apresente o tema e a tese na introdução, explore argumentos no desenvolvimento e reforce a tese na conclusão.<br />
                Apresente uma tese clara desde o início, garantindo que responda diretamente ao tema.</p>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Complemento" title="complementos" className="w-full h-auto max-h-96">
          <Card className="h-full w-full">
            <CardHeader className="flex flex-col items-start">
              <p className="text-3xl font-bold">Tema: </p>
              <p className="text-2xl">colocar aqui o tema</p>
            </CardHeader>
            <CardBody className="flex flex-col">
              <p className="text-3xl font-bold">Texto Complementar: </p>
              <p className="text-2xl">colocar aqui o texto</p>
            </CardBody>
          </Card>
          <Link href={'/redacao/editor-redacao'}>
            <Button color="secondary" variant="ghost" size="lg" className="fixed bottom-14 right-16">
              Começar
            </Button>
          </Link>
        </Tab>
      </Tabs>
    </PurpleBackground>
  );
}
