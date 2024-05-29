import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkout-store'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { generateMessage } from '@/lib/generate-message'

const formSchema = z.object({
    nome: z.string({
        required_error: "Preencha o nome."
    }).min(2, "Preencha o nome."),
    cnpj: z.string({
        required_error: "Preencha o CNPJ."
    }).min(15),
    endereco: z.string({
        required_error: "Preencha o endereço."
    }).min(5),
    email: z.string({
        required_error: "Preencha o email"
    }).email({ message: "E-mail inválido." }),
    telefone: z.string({
        required_error: "Preencha o telefone."
    }).min(8, "Mínimo de 8 dígitos."),
    pagamento: z.string({
        required_error: "Preencha a forma de pagamento."
    }).min(2),
    frete: z.string({
        required_error: "Preencha o frete."
    }).min(2),
})

export const FormClient = () => {

    const { nome, setNome, cnpj, setCnpj, endereco, setEndereco, email, setEmail, telefone, setTelefone, pagamento, setPagamento, frete, setFrete } = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { nome, cnpj, endereco, email, telefone, pagamento, frete }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setNome(values.nome)
        setCnpj(values.cnpj)
        setEndereco(values.endereco)
        setEmail(values.email)
        setTelefone(values.telefone)
        setPagamento(values.pagamento)
        setFrete(values.frete)
    }

    const message = generateMessage()
    const linkWhats = `https://wa.me//${process.env.NEXT_PUBLIC_WHATS}?text=${encodeURI(message)}`

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-4">
                <FormField control={form.control} name="nome" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>Nome:</FormLabel>
                        <FormControl><Input {...field} autoFocus /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="cnpj" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>CNPJ:</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="endereco" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>Endereço:</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>Email:</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="telefone" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>Telefone:</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="pagamento" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>Pagamento:</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <FormField control={form.control} name="frete" render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>Frete:</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                <Button
                    type="submit"
                    className='w-40 m-auto'>
                    <Link target='_blank' href={linkWhats}>Finalizar</Link>
                </Button>
            </form>
        </Form>
    )
}