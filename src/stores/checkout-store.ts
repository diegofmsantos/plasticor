import { create } from "zustand"

type States = {
    cliente: string
    cnpj: string
    cep: string
    rua: string
    numero: string
    complemento?: string
    bairro: string
    cidade: string
    email: string
    telefone: string
    frete: string
    transportadora?: string
    pagamento: string
}

type Actions = {
    setCliente: (cliente: States["cliente"]) => void
    setCnpj: (cnpj: States["cnpj"]) => void
    setCep: (cep: States["cep"]) => void
    setRua: (rua: States["rua"]) => void
    setNumero: (rua: States["numero"]) => void
    setComplemento: (complemento: States["complemento"]) => void
    setBairro: (bairro: States["bairro"]) => void
    setCidade: (cidade: States["cidade"]) => void
    setEmail: (email: States["email"]) => void
    setTelefone: (telefone: States["telefone"]) => void
    setFrete: (frete: States["frete"]) => void
    setTransportadora: (transportadora: States["transportadora"]) => void
    setPagamento: (pagamento: States["pagamento"]) => void
}

const initialState: States = {
    cliente: '',
    cnpj: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    email: '',
    telefone: '',
    frete: '',
    transportadora: '',
    pagamento: ''
}

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialState,
    setCliente: (cliente) => set(state => ({ ...state, cliente })),
    setCnpj: (cnpj) => set(state => ({ ...state, cnpj })),
    setCep: (cep) => set(state => ({ ...state, cep })),
    setRua: (rua) => set(state => ({ ...state, rua })),
    setNumero: (numero) => set(state => ({ ...state, numero })),
    setComplemento: (complemento) => set(state => ({ ...state, complemento })),
    setBairro: (bairro) => set(state => ({ ...state, bairro })),
    setCidade: (cidade) => set(state => ({ ...state, cidade })),
    setEmail: (email) => set(state => ({ ...state, email })),
    setTelefone: (telefone) => set(state => ({ ...state, telefone })),
    setFrete: (frete) => set(state => ({ ...state, frete })),
    setTransportadora: (transportadora) => set(state => ({ ...state, transportadora })),
    setPagamento: (pagamento) => set(state => ({ ...state, pagamento }))
}))
