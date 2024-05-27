import { Cart } from "@/types/Cart"
import { Button } from "../ui/button"
import { useCartStore } from "@/stores/cart-store"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state => state)

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1)
    }

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1)
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                onClick={handleMinusButton}
                variant="ghost"
                size="icon"
                className="size-5 text-red-500"
            >
                <MinusIcon />
            </Button>
            <div className="text-xs">{cartItem.quantity}</div>
            <Button
                onClick={handlePlusButton}
                variant="ghost"
                size="icon"
                className="size-5 text-green-600"
            >
                <PlusIcon />
            </Button>
        </div>
    )
}