import { CartItem } from "@/types/Cart"
import { CartItemQuantity } from "./item-quantity"

type ItemCartProps = {
    item: CartItem
    quantity: number
}

export const ItemCart = ({ item, quantity }: ItemCartProps) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2">
                <div className="w-10">
                    <img
                        src={`/assets/linhas/${item.product.linha}/${item.product.url[item.selectedMaterialIndex]}`}
                        alt="foto"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs">{item.product.linha} {item.product.materias[item.selectedMaterialIndex]}</span>
                    <span className="font-bold text-sm">R$ {(item.price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
            </div>
            <CartItemQuantity cartItem={item} />
        </div>
    )
}
