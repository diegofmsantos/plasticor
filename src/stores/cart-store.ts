import { create } from 'zustand'
import { CartItem } from '@/types/Cart'

type CartState = {
    cart: CartItem[]
    subtotal: number
    desconto: string
    totalFinal: number
    setDesconto: (desconto: string) => void
    upsertCartItem: (item: CartItem) => void
    removeCartItem: (item: CartItem) => void
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    subtotal: 0,
    desconto: "",
    totalFinal: 0,
    setDesconto: (desconto) => set((state) => ({ ...state, desconto })),
    upsertCartItem: (item) => set((state) => ({ ...state, cart: [...state.cart, item] })),
    removeCartItem: (item) => set((state) => ({ ...state, cart: state.cart.filter((cartItem) => cartItem !== item) })),
}))
