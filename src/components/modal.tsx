"use client"

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
    name: string;
    image: string[];
    materias: string[];
    valores: number[];
};

export const Modal = ({ name, image, materias, valores }: Props) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [quantity, setQuantity] = useState(0);

    const handleSelect = (index: number) => {
        if (selectedItem === index) {
            setSelectedItem(null);
        } else {
            setSelectedItem(index);
        }
    };

    const calculateTotal = () => {
        if (selectedItem !== null && quantity > 0) {
            return (quantity * valores[selectedItem]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
        return '0,00';
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`w-40 h-8`}>Comprar</Button>
            </DialogTrigger>
            <DialogContent className="h-[920px] flex flex-col justify-around items-center">
                <DialogHeader>
                    <DialogTitle className="mb-2">{name}</DialogTitle>
                    <Carousel className="w-[250px] h-[270px] flex m-auto">
                        <CarouselContent>
                            {image.map((image, index) => (
                                <CarouselItem key={index} className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-52">
                                        <Image src={image} width={150} height={150} alt="Image" className="w-52 h-64" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="w-14 border border-black" />
                        <CarouselNext className="w-14 border border-black" />
                    </Carousel>

                    <DialogDescription className="text-justify">
                        O caderno Espiral Capa Dura Universitário possui capa dura com acabamento metalizado, parte interna decorada, bolso de papel decorada para guardar trabalhos e anotações, adesivos personalizados e folhas pautadas. Ideal para o dia a dia, na escola ou faculdade.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="mb-4 text-center">Matérias</div>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {materias.map((item, index) => {
                            const isSelected = selectedItem === index;
                            return (
                                <Button
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    className={`border p-2 w-20 text-center font-bold ${isSelected ? 'bg-[#002372] text-white' : 'bg-white text-[#002372]'}`}
                                >
                                    {item}
                                </Button>
                            );
                        })}
                    </div>
                </div>
                <div className="">
                    <div className="text-center">Caixas</div>
                    <input
                        type="number"
                        className="border p-1 outline-none"
                        value={quantity <= 0 ? '' : quantity}
                        onChange={(e) => setQuantity(+e.target.value)}
                    />
                    <div className="text-center mt-3 text-2xl text-[#002372]">
                        {quantity > 0 && valores[selectedItem !== null ? selectedItem : 0] ? `${calculateTotal()}` : ''}
                    </div>
                </div>
                <Button className="bg-green-500 w-40">Adicionar</Button>
            </DialogContent>
        </Dialog>
    );
};
