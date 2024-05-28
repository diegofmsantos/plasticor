import { Notebook } from "@/types/Notebook"

export type CartItem = {
    product: Notebook
    quantity: number
    selectedMaterialIndex: number
    price: number
}