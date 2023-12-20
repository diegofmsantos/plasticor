"use client"

import { Code } from "@/data/notebooksListMasc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {

    const [imageOfModal, setImageOfModal] = useState('')

    const openModal = (id: number) => {
        const item = Code.find(item => item.id === id)
        if (item) {
            setImageOfModal(item.url)
        }
    }

    useEffect(() => {
        openModal(1)
    }, [])

    const [uma, setUma] = useState(true)
    const [dez, setDez] = useState(false)
    const [doze, setDoze] = useState(false)
    const [quinze, setQuinze] = useState(false)
    const [vinte, setVinte] = useState(false)

    const handleShowUma = () => {
        setUma(true)
        setDez(false)
        setDoze(false)
        setQuinze(false)
        setVinte(false)
    }
    const handleShowDez = () => {
        setUma(false)
        setDez(true)
        setDoze(false)
        setQuinze(false)
        setVinte(false)
    }
    const handleShowDoze = () => {
        setUma(false)
        setDez(false)
        setDoze(true)
        setQuinze(false)
        setVinte(false)
    }
    const handleShowQuinze = () => {
        setUma(false)
        setDez(false)
        setDoze(false)
        setQuinze(true)
        setVinte(false)
    }
    const handleShowVinte = () => {
        setUma(false)
        setDez(false)
        setDoze(false)
        setQuinze(false)
        setVinte(true)
    }

    const [current, setCurrent] = useState(0)


    const prev = () => {
        setCurrent((current) => (current === 0 ? Code.length - 1 : current - 1))
    }

    const next = () => {
        setCurrent((current) => (current === Code.length - 1 ? 0 : current + 1))
    }

    return (
        <div className="pt-40 pb-20 flex flex-col justify-center items-center p-4 overflow-x-hidden">
            <div className="w-full flex flex-col justify-center items-center gap-5 my-10 p-2 lg:flex-row lg:justify-center lg:items-start">
                <div className="flex flex-row items-center lg:flex-col lg:justify-center lg:items-center">
                    <div onClick={next} className="cursor-pointer mr-2 border-none lg:text-center lg:rotate-90">
                        <Image
                            src={`/up.svg`}
                            width={20}
                            height={20}
                            alt="Arrow"
                        />
                    </div>
                    <div className="w-56 h-[275px] min-[400px]:w-[288px] min-[400px]:h-[350px] min-[400px]:gap-4 md:gap-6 border-none flex justify-start gap-[14px] flex-wrap overflow-x-hidden overflow-y-hidden md:w-96 md:h-[480px] lg:w-52 lg:h-[1010px]">
                        {Code.map(item => (
                            <div
                                style={{ transform: `translateY(-${current * 105}%)` }}
                                key={item.id}
                                className="w-56 min-[400px]:w-[288px] cursor-pointer opacity-70 hover:opacity-100 md:w-96 lg:w-48"
                                onClick={() => openModal(item.id)}
                            >
                                <img
                                    src={`/linhas-masculinas/${item.linha}/${item.url}`}
                                    alt="Notebook"
                                    className="w-56 min-[400px]:w-[288px] md:w-96"
                                />
                            </div>
                        ))}
                    </div>
                    <div onClick={prev} className="cursor-pointer border-none ml-2 md:flex lg:rotate-90">
                        <Image
                            src={`/down.svg`}
                            width={20}
                            height={20}
                            alt="Arrow"
                        />
                    </div>
                </div>
                <div className="max-w-[800px] h-full my-8 border-t border-t-gray-400 pt-8 gap-2 flex flex-col justify-center items-start lg:border-none lg:my-0 lg:pt-0 lg:pl-10">
                    <div className="w-64 m-auto hidden lg:flex justify-center items-center mb-5 min-[400px]:w-96">
                        <Image src={`/linhas-masculinas/CODE/${imageOfModal}`} width={452} height={550} alt="Logo" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">DESCRIÇÃO DO PRODUTO:</h3>
                    <p className="min-w-[250px] text-sm text-justify lg:text-md">O caderno Espiral Capa Dura Universitário possui capa dura com acabamento metalizado, parte interna decorada, bolso de papel decorada para guardar trabalhos e anotações, adesivos personalizados e folhas pautadas. Ideal para o dia a dia, na escola ou faculdade.</p>
                    <div className="flex flex-col justify-start text-sm my-4">
                        <div className="flex items-center gap-2" onChange={handleShowUma}>
                            <input type="radio" checked={uma ? true : false} />
                            <label>1 Matéria</label>
                        </div>
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
                    {uma &&
                        <div className="text-sm">
                            <div><b>CAPA:</b> Dura</div>
                            <div><b>FORMATO:</b> 199mm x 270mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>MIOLO:</b> Pautado</div><br />
                            <div><b>Nº DE FOLHAS:</b> 96 folhas</div>
                            <div><b>QTD POR CAIXA:</b> 60 unidades</div>
                            <div><b>VALOR:</b> R$ 682,20</div>
                        </div>
                    }
                    {dez &&
                        <div className="text-sm">
                            <div><b>CAPA:</b> Dura</div>
                            <div><b>FORMATO:</b> 199mm x 270mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>MIOLO:</b> Pautado</div><br />
                            <div><b>Nº DE FOLHAS:</b> 200 folhas</div>
                            <div><b>QTD POR CAIXA:</b> 30 unidades</div>
                            <div><b>VALOR:</b> R$ 615,60</div>
                        </div>
                    }
                    {doze &&
                        <div className="text-sm">
                            <div><b>CAPA:</b> Dura</div>
                            <div><b>FORMATO:</b> 199mm x 270mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>MIOLO:</b> Pautado</div><br />
                            <div><b>Nº DE FOLHAS:</b> 240 folhas</div>
                            <div><b>QTD POR CAIXA:</b> 24 unidades</div>
                            <div><b>VALOR:</b> R$ 557,28</div>
                        </div>
                    }
                    {quinze &&
                        <div className="text-sm">
                            <div><b>CAPA:</b> Dura</div>
                            <div><b>FORMATO:</b> 199mm x 270mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>MIOLO:</b> Pautado</div><br />
                            <div><b>Nº DE FOLHAS:</b> 300 folhas</div>
                            <div><b>QTD POR CAIXA:</b> 24 unidades</div>
                            <div><b>VALOR:</b> R$ 660,96</div>
                        </div>
                    }
                    {vinte &&
                        <div className="text-sm">
                            <div><b>CAPA:</b> Dura</div>
                            <div><b>FORMATO:</b> 199mm x 270mm</div>
                            <div><b>GRAMATURA:</b> 56 g/m²</div>
                            <div><b>MIOLO:</b> Pautado</div><br />
                            <div><b>Nº DE FOLHAS:</b> 400 folhas</div>
                            <div><b>QTD POR CAIXA:</b> 18 unidades</div>
                            <div><b>VALOR:</b> R$ 631,98</div>
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