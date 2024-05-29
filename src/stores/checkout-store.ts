import { create } from "zustand";

type States = {
    nome: string
    cnpj: string
    endereco: string
    email: string
    telefone: string
    pagamento: string
    frete: string
}

type Actions = {
    setNome: (nome: States["nome"]) => void
    setCnpj: (cnpj: States["cnpj"]) => void
    setEndereco: (endereco: States["endereco"]) => void
    setEmail: (email: States["email"]) => void
    setTelefone: (telefone: States["telefone"]) => void
    setPagamento: (pagamento: States["pagamento"]) => void
    setFrete: (frete: States["frete"]) => void
}

const initialState: States = {
    nome: '',
    cnpj: '',
    endereco: '',
    email: '',
    telefone: '',
    pagamento: '',
    frete: ''
}

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialState,
    setNome: (nome) => set(state => ({ ...state, nome })),
    setCnpj: (cnpj) => set(state => ({ ...state, cnpj })),
    setEndereco: (endereco) => set(state => ({ ...state, endereco })),
    setEmail: (email) => set(state => ({ state, email })),
    setTelefone: (telefone) => set(state => ({ ...state, telefone })),
    setPagamento: (pagamento) => set(state => ({ ...state, pagamento })),
    setFrete: (frete) => set(state => ({ ...state, frete }))
}))