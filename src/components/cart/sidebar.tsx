"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { ItemCart } from "./item"
import { useState } from "react"
import { CheckoutDialog } from "../checkout/dialog"

export const CartSidebar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const { cart } = useCartStore(state => state)

    let subtotal = 0

    for (let item of cart) {
        subtotal += (item.price * item.quantity)
    }

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
                    {cart.map(item => (
                        <ItemCart 
                        key={`${item.product.id}-${item.selectedMaterialIndex}`} 
                        item={item} 
                        quantity={item.quantity} />
                    ))}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col justify-center items-center gap-2 text-center mb-10">
                    <p>DESCONTO</p>
                    <input type="number" className="w-40 pl-16 h-10 text-2xl text-[#002372] outline-none border border-gray-300" />
                    <Button className="w-32 h-9 bg-gray-400">Aplicar</Button>
                </div>
                <div className="flex flex-col items-center text-xs font-bold text-[#002372]">
                    <div>TOTAL</div>
                    <div className="text-2xl w-40 h-10 flex justify-center items-center border border-gray-300">R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <Separator className="my-4" />
                <div className="text-center">
                    <Button
                        onClick={() => setCheckoutOpen(true)}
                        disabled={cart.length === 0}>
                        Finalizar Compra
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
