"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"
import { useCartStore } from "@/stores/cart-store"
import { Notebook } from "@/types/Notebook"

type Props = {
    item: Notebook
    image: string[]
};

export const Modal = ({ item, image }: Props) => {
    const [selectedMaterialIndex, setSelectedMaterialIndex] = useState<number | null>(null)
    const [quantity, setQuantity] = useState(0)
    const { toast } = useToast()
    const { upsertCartItem } = useCartStore(state => state)

    const handleClickMaterial = (index: number) => {
        setSelectedMaterialIndex(index)
    }

    const calculateTotal = () => {
        if (selectedMaterialIndex !== null && quantity > 0) {
            const valorUnitario = item.valores[selectedMaterialIndex];
            return (quantity * valorUnitario).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        return '0,00'
    }

    const handleAddButton = () => {
        if (selectedMaterialIndex === null || quantity <= 0) {
            return
        }

        const selectedItem = {
            product: item,
            selectedMaterialIndex,
            price: item.valores[selectedMaterialIndex],
            quantity: quantity
        }
        // @ts-ignore
        upsertCartItem(selectedItem)

        toast({ title: 'Adicionado ao carrinho!' })

        setQuantity(0)
        setSelectedMaterialIndex(null)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`w-48 h-8 bg-[#C1C2C3] font-bold text-md hover:bg-[#002372]`}>
                    Comprar
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[700px] py-4 flex flex-col justify-around items-center">
                <DialogHeader>
                    <DialogTitle className="text-center mb-2 text-2xl font-bold text-[#002372]">{item.linha}</DialogTitle>
                    <Carousel className="w-[220px]  flex ">
                        <CarouselContent>
                            {image.map((image, index) => (
                                <CarouselItem key={index} className="w-40 h-[275px] p-0 flex flex-col justify-center items-center sm:w-48 sm:h-60 md:w-40 md:h-64">
                                    <div className="w-44 h-56">
                                        <Image src={image} width={130} height={130} alt="Image" className="w-full h-full" />
                                    </div>
                                    <div className="font-bold text-lg h-8 my-2 text-gray-500">{selectedMaterialIndex !== null ? `R$ ${item.valores[selectedMaterialIndex]?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : ''}</div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    
                </DialogHeader>
                <div>
                    <div className="mb-4 text-center font-bold">MATÉRIAS</div>
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        {item.materias.map((material, index) => {
                            const isSelected = selectedMaterialIndex === index;
                            return (
                                <Button
                                    key={index}
                                    onClick={() => handleClickMaterial(index)}
                                    className={`border w-32 border-gray-400 text-center font-bold bg-white text-[#002372] hover:bg-[#002372] hover:text-white  ${isSelected ? 'bg-[#002372] text-white' : 'bg-white text-[#002372]'}`}
                                >
                                    {material}
                                </Button>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-center font-bold mb-4">CAIXAS</div>
                    <input
                        type="number"
                        className="border border-gray-400 w-48 p-1 outline-none pl-20 font-bold"
                        value={quantity <= 0 ? '' : quantity}
                        onChange={(e) => setQuantity(+e.target.value)}
                    />
                    
                </div>
                <Button onClick={handleAddButton} className="bg-green-500 w-40">Adicionar</Button>
            </DialogContent>
        </Dialog>
    )
}
