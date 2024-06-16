export type Product = {
    id: string
    linha: string
    materias: string[]
    codigos: string[]
    valores: number[]
    urlts: string[]
}

export type CartItem = {
    product: Product
    selectedMaterialIndex: number
    quantity: number
    price: number
}
