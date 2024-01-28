'use client'

import PurpleBackground from "@/app/components/purpleBackgroundAuthdUser/purpleBackground";
import styles from "./page.module.css"
import Link from "next/link";
import { LiaBrailleSolid, LiaAngleDownSolid, LiaCheckCircleSolid } from "react-icons/lia";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn, Spacer } from "@nextui-org/react";
import { useForm } from "react-hook-form";
export default function Perfil() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://api.languagetool.org/v2/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(data)
            });
            const serverResponse = await response.json();
            if (response.ok) {
                const token = serverResponse.token;
                if (token) {
                } else {
                }
            } else {
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <PurpleBackground>
            <div className={styles.contentContainer}>
                <div className={styles.containerEsquerda}>
                    <div className={styles.tipoRedacao}>
                        <h1>DESAFIO ENEM</h1>
                    </div>
                    <div className={styles.textoRedacao}>
                        <textarea className={styles.titulo} placeholder="insira o seu titulo" />
                        <textarea
                            className={styles.redacao}
                            placeholder="Sua redação:"
                            {...register("text", { required: true })}
                        />
                    </div>
                </div>
                <Spacer x={1} />
                <div className={styles.containerDireita}>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className="flex bg-purple-700 w-full h-16 gap-5 rounded-md text-lg" startContent={<LiaBrailleSolid />} endContent={<LiaAngleDownSolid />}>
                                Opções
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Opções de redação">
                            <DropdownSection className="flex flex-col">
                                <DropdownItem
                                    className="rounded-md text-xs font-thin p-2 text-black"
                                    key="Instruções"
                                    description="ver instruções sobre o tema da redação"
                                >
                                    <p className="text-base font-medium text-black" > Instruções </p>
                                </DropdownItem>
                                <DropdownItem
                                    className="rounded-md my-1 text-xs font-thin p-2"
                                    key="tema"
                                    description="ver tema da redação"
                                >
                                    <p className="text-base font-medium text-black" > tema </p>
                                </DropdownItem>
                                <DropdownItem
                                    className="rounded-md my-1 text-xs font-thin p-2"
                                    key="desempenho"
                                    description="ver seu desempenho"
                                >
                                    <p className="text-base font-medium text-black">Instruções</p>
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>

                    <Button onClick={() => handleSubmit(onSubmit)()} className="flex bg-purple-700 w-full h-16 gap-5 rounded-md text-xl" startContent={<LiaCheckCircleSolid />}>
                        Corrigir
                    </Button>
                </div>

            </div>
        </PurpleBackground >
    )
}

