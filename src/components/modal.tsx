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

    const { toast } = useToast()
    const { upsertCartItem } = useCartStore(state => state)

    const handleAddButton = () => {
        if (selectedMaterialIndex === null || quantity <= 0) {
          return;
        }
      
        const selectedItem = {
          product: item,
          selectedMaterialIndex,
          price: item.valores[selectedMaterialIndex],
          quantity: quantity // Ensure the quantity is being passed correctly
        }
      
        upsertCartItem(selectedItem);
      
        toast({
          title: 'Adicionado ao carrinho!',
        })

        setQuantity(0)
      }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`w-48 h-8 bg-[#C1C2C3] font-bold text-md hover:bg-[#002372]`}>
                    Comprar
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[770px] flex flex-col justify-around items-center">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold text-[#002372]">{item.linha}</DialogTitle>
                    <Carousel className="w-[250px] h-[270px] flex m-auto">
                        <CarouselContent>
                            {image.map((image, index) => (
                                <CarouselItem key={index} className="w-40 h-[275px] p-0 flex flex-col justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-52">
                                        <Image src={image} width={150} height={150} alt="Image" className="w-52 h-64" />
                                    </div>
                                    <div className="font-bold h-8 my-2 text-[#002372]">{selectedMaterialIndex !== null ? `R$ ${item.valores[selectedMaterialIndex]?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : ''}</div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="border border-gray-500 " />
                        <CarouselNext className="border border-gray-500 " />
                    </Carousel>
                    <DialogDescription className="text-justify">
                        O caderno Espiral Capa Dura Universitário possui capa dura com acabamento metalizado, parte interna decorada, bolso de papel decorada para guardar trabalhos e anotações, adesivos personalizados e folhas pautadas. Ideal para o dia a dia, na escola ou faculdade.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="mb-4 text-center font-bold">Matérias</div>
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        {item.materias.map((material, index) => {
                            const isSelected = selectedMaterialIndex === index;
                            return (
                                <Button
                                    key={index}
                                    onClick={() => handleClickMaterial(index)}
                                    className={`border border-gray-400  p-1 w-24 text-center font-bold bg-white text-[#002372] hover:bg-[#002372] hover:text-white  ${isSelected ? 'bg-[#002372] text-white' : 'bg-white text-[#002372]'}`}
                                >
                                    {material}
                                </Button>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-center font-bold">Caixas</div>
                    <input
                        type="number"
                        className="border border-gray-400 p-1 outline-none"
                        value={quantity <= 0 ? '' : quantity}
                        onChange={(e) => setQuantity(+e.target.value)}
                    />
                    <div className="text-center h-8 mt-3 text-2xl text-[#002372]">
                        {quantity > 0 && selectedMaterialIndex !== null ? `R$ ${calculateTotal()}` : ''}
                    </div>
                </div>
                <Button onClick={handleAddButton} className="bg-green-500 w-40">Adicionar</Button>
            </DialogContent>
        </Dialog>
    )
}
