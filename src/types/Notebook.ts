export type Notebook = {
    id: number
    codigos: number[]
    modelo?: 'normal' | 'reduzido'
    genero?: 'masculino' | 'feminino' 
    linha: string
    materias: string[]
    valores: number[]
    url: string[]
    urlts?: string;
}