import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkout-store'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { generateMessage } from '@/lib/generate-message'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const formSchema = z.object({
    cliente: z.string({
        required_error: "Preencha o nome."
    }).min(2, "Preencha o nome."),
    cnpj: z.string({
        required_error: "Preencha o CNPJ/CPF."
    }).min(11, "CNPJ/CPF deve ter no mínimo 11 caracteres."),
    cep: z.string({
        required_error: "Preencha o cep."
    }).min(8, "Cep deve ter no mínimo 8 caracteres."),
    rua: z.string({
        required_error: "Preencha a rua."
    }).min(5, "Rua deve ter no mínimo 5 caracteres."),
    numero: z.string({
        required_error: "Preencha o número."
    }).min(1, "Número deve ter no mínimo 1 caracter."),
    complemento: z.string({
        required_error: "Preencha o complemento."
    }).min(3, "Complemento deve ter no mínimo 3 caracteres.").optional(),
    bairro: z.string({
        required_error: "Preencha o bairro."
    }).min(5, "Bairro deve ter no mínimo 5 caracteres."),
    cidade: z.string({
        required_error: "Preencha a cidade."
    }).min(5, "Cidade deve ter no mínimo 8 caracteres."),
    email: z.string({
        required_error: "Preencha o email"
    }).email({ message: "E-mail inválido." }),
    telefone: z.string({
        required_error: "Preencha o telefone."
    }).min(8, "Mínimo de 8 dígitos."),
    transportadora: z.string().optional(),
    frete: z.string({
        required_error: "Escolha uma das opções."
    }),
    pagamento: z.string({
        required_error: "Preencha a forma de pagamento."
    }).min(2, "Forma de pagamento deve ter no mínimo 2 caracteres."),
})

export const FormClient = () => {
    const { cliente, setCliente, cnpj, setCnpj, cep, setCep, rua, setRua, numero, setNumero, complemento, setComplemento, bairro, setBairro, cidade, setCidade, email, setEmail, telefone, setTelefone, frete, setFrete, transportadora, setTransportadora, pagamento, setPagamento } = useCheckoutStore(state => state)
    const [freteSelected, setFreteSelected] = useState(frete)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cliente: cliente,
            cnpj: cnpj,
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            email: email,
            telefone: telefone,
            frete: frete,
            transportadora: transportadora,
            pagamento: pagamento
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setCliente(values.cliente)
        setCnpj(values.cnpj)
        setCep(values.cep)
        setRua(values.rua)
        setNumero(values.numero)
        setComplemento(values.complemento)
        setBairro(values.bairro)
        setCidade(values.cidade)
        setEmail(values.email)
        setTelefone(values.telefone)
        setFrete(values.frete)
        setTransportadora(values.transportadora)
        setPagamento(values.pagamento)

        const message = generateMessage();
        const linkWhats = `https://wa.me//${process.env.NEXT_PUBLIC_WHATS}?text=${encodeURI(message)}`

        window.open(linkWhats, '_blank')

        window.location.reload();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField control={form.control} name="cliente" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-md text-black'>CLIENTE:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} autoFocus /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="cnpj" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-md text-black'>CNPJ/CPF:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="cep" render={({ field }) => (
                    <FormItem className='w-32'>
                        <FormLabel className='text-md text-black'>CEP:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="rua" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-md text-black'>RUA:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <div className='flex flex-wrap gap-2 justify-between'>
                    <FormField control={form.control} name="numero" render={({ field }) => (
                        <FormItem className='w-40'>
                            <FormLabel className='text-md text-black'>NÚMERO:</FormLabel>
                            <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                    <FormField control={form.control} name="complemento" render={({ field }) => (
                        <FormItem className='w-40'>
                            <FormLabel className='text-md text-black'>COMPLEMENTO:</FormLabel>
                            <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                    <FormField control={form.control} name="bairro" render={({ field }) => (
                        <FormItem className='w-52 mt-1'>
                            <FormLabel className='text-md text-black'>BAIRRO:</FormLabel>
                            <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                    <FormField control={form.control} name="cidade" render={({ field }) => (
                        <FormItem className='w-52 mt-1'>
                            <FormLabel className='text-md text-black'>CIDADE:</FormLabel>
                            <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                </div>
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-md text-black'>E-MAIL:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="telefone" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-md text-black'>TELEFONE:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="frete" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-md text-black'>FRETE:</FormLabel>
                        <FormControl className='text-gray-500'>
                            <Select onValueChange={(value) => {
                                field.onChange(value);
                                setFreteSelected(value);
                            }} defaultValue={field.value}>
                                <SelectTrigger className="w-[220px]">
                                    <SelectValue placeholder="Selecione uma opção" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="CIF">CIF</SelectItem>
                                        <SelectItem value="FOB">FOB</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                {freteSelected === 'FOB' && (
                    <FormField control={form.control} name="transportadora" render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg text-black'>TRANSPORTADORA:</FormLabel>
                            <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                )}
                <FormField control={form.control} name="pagamento" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>CONDIÇÃO DE PAGAMENTO:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <Button type="submit" className='w-40 m-auto my-3'>
                    Finalizar
                </Button>
            </form>
        </Form>
    );
};
