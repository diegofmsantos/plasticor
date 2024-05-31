import { create } from "zustand";
import { CartItem } from "@/types/Cart";

type CartState = {
    cart: CartItem[];
    subtotal: number;
    desconto: number;
    totalFinal: number;
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number) => void;
    upsertCartItem: (item: CartItem) => void;  
    setDesconto: (desconto: number) => void;
    calculateTotals: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    subtotal: 0,
    desconto: 0,
    totalFinal: 0,
    addToCart: (item) => {
        set(state => ({ cart: [...state.cart, item] }));
        get().calculateTotals();
    },
    removeFromCart: (index) => {
        set(state => ({ cart: state.cart.filter((_, i) => i !== index) }));
        get().calculateTotals();
    },
    upsertCartItem: (newItem) => {
        set(state => {
            const existingItemIndex = state.cart.findIndex(item => 
                item.product.id === newItem.product.id && 
                item.selectedMaterialIndex === newItem.selectedMaterialIndex
            );
            
            if (existingItemIndex > -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex].quantity += newItem.quantity;
                return { cart: updatedCart };
            } else {
                return { cart: [...state.cart, newItem] };
            }
        });
        get().calculateTotals();
    },
    setDesconto: (desconto) => {
        set({ desconto });
        get().calculateTotals();
    },
    calculateTotals: () => {
        const { cart, desconto } = get();
        let subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        let descontoReais = subtotal * (desconto / 100);
        let totalFinal = subtotal - descontoReais;
        set({ subtotal, totalFinal });
    }
}));
