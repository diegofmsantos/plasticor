import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {

    return (
        <Sheet>
            <SheetTrigger asChild className="p-0">
                <Button className="flex gap-2 text-white bg-red-600 w-32 h-8">
                    <span className="font-bold">Carrinho</span>
                    <ShoppingCartIcon className="" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 my-3">
                    ...
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>

                <Separator className="my-4" />

                <div className="text-center">
                    <Button>Finalizar Compra</Button>
                </div>
            </SheetContent>
        </Sheet>

    )
}