export type Notebook = {
    id: number
    codigos: number[]
    modelo?: string
    genero?: 'masculino' | 'feminino' 
    linha: string
    materias: string[]
    valores: number[]
    url: string[]
    urlts?: string;
}