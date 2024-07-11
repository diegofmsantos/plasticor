"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const formSchema = z.object({
    email: z.string({
        required_error: "Digite seu e-mail"
    }).email({ message: "E-mail inválido." }),
    senha: z.string({
        required_error: "Digite sua senha."
    }).min(3, "Senha inválida.")
})

const Login = () => {

    const SearchParams = useSearchParams()
    const error = SearchParams.get('error')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            senha: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        signIn("credentials", {
            ...values,
            callbackUrl: '/home'
        })
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-blue-500/40 w-72 md:w-96 lg:w-[450px] h-[500px] rounded-md p-4 flex flex-col justify-center items-center gap-8">
                <div className='w-40 h-20'>
                    <img src={`/assets/logo.png`} alt="Logo" />
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-md text-black'>E-mail:</FormLabel>
                                <FormControl className='text-gray-500 text-sm'><Input {...field} autoFocus /></FormControl>
                                <FormMessage />
                            </FormItem>)}
                        />
                        <FormField control={form.control} name="senha" render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-md text-black'>Senha:</FormLabel>
                                <FormControl className='text-gray-500 text-sm'><Input type='password' {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>)}
                        />
                        <Button type="submit" className='w-40 m-auto my-3'>
                            Entrar
                        </Button>
                        {error === 'CredentialsSignin' && (<div className='text-red-500'>Dados não cadastrados.</div>)}
                    </form>
                </Form>
            </div>
        </div >
    );
}

export default Login;
