"use client"

import { Heroes } from "@/data/notebooksListMasc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {

    const [imageOfModal, setImageOfModal] = useState('')

    const openModal = (id: number) => {
        const item = Heroes.find(item => item.id === id)
        if (item) {
            setImageOfModal(item.url)
        }
    }

    useEffect(() => {
        openModal(1)
    }, [])

    const [dez, setDez] = useState(true)
    const [doze, setDoze] = useState(false)
    const [quinze, setQuinze] = useState(false)
    const [vinte, setVinte] = useState(false)

    const handleShowDez = () => {
        setDez(true)
        setDoze(false)
        setQuinze(false)
        setVinte(false)
    }
    const handleShowDoze = () => {
        setDez(false)
        setDoze(true)
        setQuinze(false)
        setVinte(false)
    }
    const handleShowQuinze = () => {
        setDez(false)
        setDoze(false)
        setQuinze(true)
        setVinte(false)
    }
    const handleShowVinte = () => {
        setDez(false)
        setDoze(false)
        setQuinze(false)
        setVinte(true)
    }

    return (
        <div className="container m-auto flex flex-col justify-center items-center p-4 overflow-x-hidden">
            <div className="w-full m-auto flex flex-col justify-center items-center gap-5 my-10 p-2 lg:flex-row lg:justify-start lg:items-start">
                <div className="flex justify-center flex-wrap gap-5 lg:flex lg:gap-2 lg:w-[450px]">
                    {Heroes.map(item => (
                        <div
                            key={item.id}
                            className="w-60 min-[400px]:w-72 md:mr-2 cursor-pointer mb-4 opacity-70 hover:opacity-100 md:w-96px lg:w-36"
                            onClick={() => openModal(item.id)}
                        >
                            <img
                                src={`/linhas-masculinas/${item.linha}/${item.url}`}
                                alt="Notebook"
                                className="w-60 min-[400px]:w-72 md:mr-2 md:w-96px lg:w-36"
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full h-full my-8 border-t border-t-gray-400 pt-8 gap-2 flex flex-col justify-center items-start lg:border-none lg:my-0 lg:pt-0 lg:pl-10">
                    <div className="w-64 m-auto flex justify-center items-center mb-5 min-[400px]:w-96">
                        <Image src={`/linhas-masculinas/HEROES/${imageOfModal}`} width={350} height={300} alt="Logo" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">DESCRIÇÃO DO PRODUTO</h3>
                    <p className="min-w-[250px] text-sm text-justify lg:text-md">O caderno Espiral Capa Dura Universitário 10 Matérias Wandinha 160 folhas possui capa dura com acabamento metalizado, parte interna decorada, bolsa de papel decorada para guardar trabalhos e anotações, folha com adesivos funcionais e folhas pautadas. Ideal para o dia a dia na escola ou na faculdade.</p>
                    <div className="flex flex-col justify-start my-4">
                        <div className="flex items-center gap-2" onChange={handleShowDez}>
                            <input type="radio" checked={dez ? true : false} />
                            <label>10 Matérias</label>
                        </div>
                        <div className="flex items-center gap-2" onChange={handleShowDoze}>
                            <input type="radio" checked={doze ? true : false} />
                            <label>12 Matérias</label>
                        </div>
                        <div className="flex items-center gap-2" onChange={handleShowQuinze}>
                            <input type="radio" checked={quinze ? true : false} />
                            <label>15 Matérias</label>
                        </div>
                        <div className="flex items-center gap-2" onChange={handleShowVinte}>
                            <input type="radio" checked={vinte ? true : false} />
                            <label>20 Matérias</label>
                        </div>
                    </div>
                    {dez &&
                        <div>
                            <div><b>FORMATO:</b> 200mm x 275mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>Nº DE FOLHAS:</b> 160 folhas</div>
                            <div><b>Nº DE MATÉRIAS:</b> 10 matérias</div>
                        </div>
                    }
                    {doze &&
                        <div>
                            <div><b>FORMATO:</b> 200mm x 275mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>Nº DE FOLHAS:</b> 160 folhas</div>
                            <div><b>Nº DE MATÉRIAS:</b> 12 matérias</div>
                        </div>
                    }
                    {quinze &&
                        <div>
                            <div><b>FORMATO:</b> 200mm x 275mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>Nº DE FOLHAS:</b> 160 folhas</div>
                            <div><b>Nº DE MATÉRIAS:</b> 15 matérias</div>
                        </div>
                    }
                    {vinte &&
                        <div>
                            <div><b>FORMATO:</b> 200mm x 275mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>Nº DE FOLHAS:</b> 160 folhas</div>
                            <div><b>Nº DE MATÉRIAS:</b> 20 matérias</div>
                        </div>
                    }
                </div>
            </div>
            <Link
                href="/masculino"
                className="w-32 text-center p-2 mb-5 border bg-[#25D366] hover:bg-green-600 text-white font-bold rounded-md"
            >Voltar
            </Link>
        </div>
    )
}

export default Page;