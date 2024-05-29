import create from 'zustand'
import { CartItem } from '@/types/Cart'
import { Notebook } from '@/types/Notebook'

type CartStore = {
  cart: CartItem[]
  upsertCartItem: (newItem: CartItem) => void
  removeCartItem: (item: CartItem) => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  upsertCartItem: (newItem) => {
    set(state => {
      const cart = state.cart.slice()
      const index = cart.findIndex(item =>
        item.product.id === newItem.product.id &&
        item.selectedMaterialIndex === newItem.selectedMaterialIndex
      )

      if (index >= 0) {
        cart[index].quantity += newItem.quantity

        // Remove item if quantity is zero or less
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1)
        }
      } else {
        if (newItem.quantity > 0) {
          cart.push({ ...newItem })
        }
      }

      return { cart }
    })
  },
  removeCartItem: (itemToRemove) => {
    set(state => ({
      cart: state.cart.filter(item =>
        !(item.product.id === itemToRemove.product.id &&
        item.selectedMaterialIndex === itemToRemove.selectedMaterialIndex)
      )
    }))
  }
}))
