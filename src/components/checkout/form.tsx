import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkout-store'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { generateMessage } from '@/lib/generate-message'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import PdfDocument from '@/components/pdfDocument'
import { Textarea } from '../ui/textarea'


const formSchema = z.object({
    cliente: z.string().optional(),
    cnpj: z.string().optional(),
    cep: z.string().optional(),
    rua: z.string().optional(),
    numero: z.string().optional(),
    complemento: z.string().optional(),
    bairro: z.string().optional(),
    cidade: z.string().optional(),
    email: z.string().optional(),
    telefone: z.string().optional(),
    transportadora: z.string().optional(),
    frete: z.string().optional(),
    pagamento: z.string().optional(),
    obs: z.string().optional()
})

export const FormClient = () => {
    const { cliente, setCliente, cnpj, setCnpj, cep, setCep, rua, setRua, numero, setNumero, complemento, setComplemento, bairro, setBairro, cidade, setCidade, email, setEmail, telefone, setTelefone, frete, setFrete, transportadora, setTransportadora, pagamento, setPagamento, obs, setObs } = useCheckoutStore(state => state)
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
            pagamento: pagamento,
            obs: obs
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
        setObs(values.obs)


        // Gerar o PDF
        const blob = await pdf(<PdfDocument />).toBlob()


        // Salvar o PDF localmente
        saveAs(blob, 'pedido.pdf')


        // Abra o WhatsApp com a mensagem formatada
        setTimeout(() => {
            const message = generateMessage()
            window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATS}?text=${encodeURI(message)}`, '_blank')
        }, 500)

        window.location.reload()
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
                <FormField control={form.control} name="obs" render={({ field }) => (
                        <FormItem className=' mt-1'>
                            <FormLabel className='text-md text-black'>OBSERVAÇÃO:</FormLabel>
                            <FormControl className='text-gray-500'><Textarea {...field}/></FormControl>
                            <FormMessage />
                        </FormItem>)}
                    />
                <Button type="submit" className='w-40 m-auto my-3'>
                    Finalizar
                </Button>
            </form>
        </Form>
    )
}
