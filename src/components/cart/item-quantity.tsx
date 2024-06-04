import { Button } from "@/components/ui/button"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "@/types/Cart"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
  cartItem: CartItem
}

export const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore(state => state)

  const handlePlusButton = () => {
    upsertCartItem({
      product: cartItem.product,
      quantity: 1,
      selectedMaterialIndex: cartItem.selectedMaterialIndex,
      price: cartItem.price
    })
  }

  const handleMinusButton = () => {
    upsertCartItem({
      product: cartItem.product,
      quantity: -1,
      selectedMaterialIndex: cartItem.selectedMaterialIndex,
      price: cartItem.price
    })
  }

  return (
    <div className="flex items-center gap-2">
      
      <Button
        onClick={handleMinusButton}
        variant="ghost"
        size="icon"
        className="size-6 text-red-500"
      >
        <MinusIcon />
      </Button>
      <div className="border min-w-8 p-2">{cartItem.quantity}</div>
      <Button
        onClick={handlePlusButton}
        variant="ghost"
        size="icon"
        className="size-6 text-green-600"
      >
        <PlusIcon />
      </Button>
    </div>
  )
}
