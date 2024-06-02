import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkout-store'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { generateMessage } from '@/lib/generate-message'

const formSchema = z.object({
    nome: z.string({
        required_error: "Preencha o nome."
    }).min(2, "Preencha o nome."),
    cnpj: z.string({
        required_error: "Preencha o CNPJ."
    }).min(11, "CNPJ/CPF deve ter no mínimo 11 caracteres."),
    endereco: z.string({
        required_error: "Preencha o endereço."
    }).min(5, "Endereço deve ter no mínimo 5 caracteres."),
    email: z.string({
        required_error: "Preencha o email"
    }).email({ message: "E-mail inválido." }),
    telefone: z.string({
        required_error: "Preencha o telefone."
    }).min(8, "Mínimo de 8 dígitos."),
    pagamento: z.string({
        required_error: "Preencha a forma de pagamento."
    }).min(2, "Forma de pagamento deve ter no mínimo 2 caracteres."),
    frete: z.string({
        required_error: "Preencha o frete."
    }).min(2, "Frete deve ter no mínimo 2 caracteres."),
})

export const FormClient = () => {
    const { nome, setNome, cnpj, setCnpj, endereco, setEndereco, email, setEmail, telefone, setTelefone, pagamento, setPagamento, frete, setFrete } = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: nome,
            cnpj: cnpj,
            endereco: endereco,
            email: email,
            telefone: telefone,
            pagamento: pagamento,
            frete: frete
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setNome(values.nome)
        setCnpj(values.cnpj)
        setEndereco(values.endereco)
        setEmail(values.email)
        setTelefone(values.telefone)
        setPagamento(values.pagamento)
        setFrete(values.frete)

        const message = generateMessage()
        const linkWhats = `https://wa.me//${process.env.NEXT_PUBLIC_WHATS}?text=${encodeURI(message)}`

        window.open(linkWhats, '_blank')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-screen gap-4">
                <FormField control={form.control} name="nome" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>Cliente:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} autoFocus /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="cnpj" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>CNPJ/CPF:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>E-mail:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="endereco" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>Endereço:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="cep" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>CEP:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="telefone" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>Telefone:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="frete" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>Frete:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="transportadora" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>Transportadora:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="pagamento" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg text-black'>Condições de pagamento:</FormLabel>
                        <FormControl className='text-gray-500'><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <Button type="submit" className='w-40 m-auto'>
                    Finalizar
                </Button>
            </form>
        </Form>
    )
}
