"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { ItemCart } from "./item"
import { CheckoutDialog } from "../checkout/dialog"
import { CartItem } from "@/types/Cart"

export const CartSidebar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const { cart, subtotal, desconto, totalFinal, setDesconto } = useCartStore(state => state)

    const descontoValue = parseFloat(desconto.toString()) || 0
    const descontoReais = subtotal * (descontoValue / 100)

    return (
        <Sheet>
            <SheetTrigger asChild className="p-0">
                <Button className="relative text-white bg-red-600 w-32 h-8">
                    <span className="font-bold mr-2">Carrinho</span>
                    <ShoppingCartIcon />
                    {cart.length > 0 &&
                        <div className="absolute w-5 h-5 text-white bg-green-400 rounded-full -right-1 -top-1">
                            {cart.length}
                        </div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                <Separator />
                <div className="flex flex-col gap-5 my-3">
                    {cart.map((item: CartItem) => (
                        <ItemCart
                            key={`${item.product.id}-${item.selectedMaterialIndex}`}
                            item={item}
                        />
                    ))}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col items-center text-xs font-bold text-[#002372]">
                        <div>SUBTOTAL</div>
                        <div className="text-2xl w-40 h-10 flex justify-center items-center border border-gray-300">
                            R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center text-xs font-bold text-[#002372]">
                        <p>DESCONTO (%)</p>
                        <input
                            value={desconto}
                            onChange={e => setDesconto(e.target.value)}
                            type="number"
                            className="w-40 pl-16 h-10 text-2xl text-[#002372] outline-none border border-gray-300" />
                        <div className="text-xl text-red-400 w-40 h-7 flex justify-center items-center">
                            {descontoReais > 0 &&
                                <div>- R$ {descontoReais.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-xs font-bold text-[#002372]">
                        <p className="text-lg">TOTAL</p>
                        <div className="text-2xl text-green-400 w-40 h-10 flex justify-center items-center border border-gray-300">
                            R$ {totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="text-center">
                    <Button
                        onClick={() => setCheckoutOpen(true)}
                        disabled={cart.length === 0}
                        className="bg-green-400 w-40 h-12 text-md hover:bg-green-600"
                    >
                        Finalizar Compra
                    </Button>
                </div>
                <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
            </SheetContent>
        </Sheet>
    )
}
