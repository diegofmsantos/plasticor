import { Button } from "../ui/button"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "@/types/Cart"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
  cartItem: CartItem
}

export const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore(state => state);

  const handlePlusButton = () => {
    upsertCartItem({
      product: cartItem.product,
      quantity: 1,
      selectedMaterialIndex: cartItem.selectedMaterialIndex,
      price: cartItem.price // Include the price from the original cartItem
    }, cartItem);
  }

  const handleMinusButton = () => {
    upsertCartItem({
      product: cartItem.product,
      quantity: cartItem.quantity > 0 ? -1 : 0, // Prevent negative quantity
      selectedMaterialIndex: cartItem.selectedMaterialIndex,
      price: cartItem.price // Include the price from the original cartItem
    }, cartItem);
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleMinusButton}
        variant="ghost"
        size="icon"
        className="size-5 text-red-500"
        disabled={cartItem.quantity === 0} // Disable minus button for zero quantity
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
