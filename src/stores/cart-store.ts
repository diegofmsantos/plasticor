import { CartItem } from "@/types/Cart"
import { Notebook } from "@/types/Notebook"
import { create } from "zustand"

type States = { cart: CartItem[] }
type Actions = { upsertCartItem: (newItem: CartItem, cartItem?: CartItem) => void }
const initialState: States = { cart: [] }

export const useCartStore = create<States & Actions>()(set => ({
  ...initialState,
  upsertCartItem: (newItem, cartItem?: CartItem) => set(state => {
    let newCart = state.cart.slice(); // Create a copy to avoid mutation
    let productIndex = newCart.findIndex(
      item => item.product.id === newItem.product.id && item.selectedMaterialIndex === newItem.selectedMaterialIndex
    );

    if (productIndex >= 0) {
      newCart[productIndex].quantity += newItem.quantity; // Update quantity
    } else {
      newCart.push({
        product: newItem.product,
        quantity: newItem.quantity,
        selectedMaterialIndex: newItem.selectedMaterialIndex,
        price: cartItem?.price || 0 // Use price from cartItem if available, or default to 0
      });
    }

    return { ...state, cart: newCart };
  })
}))
