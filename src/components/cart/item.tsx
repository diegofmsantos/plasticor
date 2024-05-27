import { Cart } from "@/types/Cart"
import Image from "next/image"
import { CartItemQuantity } from "./item-quantity"

type Props = {
    item: Cart
}

export const CartItem = ({ item }: Props) => {

    const totalPrice = (item.product.valores[item.product.id] * item.quantity).toFixed(2)

    return (
        <div className="flex items-center gap-5">
            <div className="w-16 overflow-hidden">
                <Image src={`/assets/linhas/${item.product.linha}/${item.product.url[item.product.id]}`} width={50} height={50} alt="foto" />
            </div>
            <div className="flex-1">
                <p className="text-md">{item.product.linha}</p>
                <p className="text-xs opacity-50">R$ {totalPrice}</p>
            </div>
            <div>
                <CartItemQuantity cartItem={item} />
            </div>
        </div>
    )
}