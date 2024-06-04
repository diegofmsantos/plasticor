import { CartItem } from "@/types/Cart"
import { CartItemQuantity } from "./item-quantity"
import { Button } from "../ui/button"
import { useCartStore } from "@/stores/cart-store"
import { Trash } from "lucide-react"

type ItemCartProps = {
    item: CartItem
}

export const ItemCart = ({ item }: ItemCartProps) => {

    const { removeFromCart } = useCartStore(state => state)

    const handleDelete = () => {
        removeFromCart(item)
      }
    return (
        <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    onClick={handleDelete}
                    size="icon"
                    className="size-6  hover:bg-red-500">
                    <Trash className="w-5 h-5 text-red-600 hover:text-white" />
                </Button>
                <div className="w-10">
                    <img
                        // @ts-ignore
                        src={`/assets/linhas/${item.product.linha}/${item.product.url[item.selectedMaterialIndex]}`}
                        alt="foto"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs">{item.product.linha} - {item.product.materias[item.selectedMaterialIndex]}</span>
                    <span className="font-bold text-sm">R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
            </div>
            <CartItemQuantity cartItem={item} />
        </div>
    )
}
