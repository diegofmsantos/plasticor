import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: "/",
        signOut: ""
    },
    providers: [
        CredentialsProvider({

            name: 'Credentials',
        
            credentials: {
                email: { label: "E-mail", type: "email", placeholder: "Digite seu e-mail" },
                senha: { label: "Senha", type: "password", placeholder: "Digite sua senha" }
            },
            async authorize(credentials, req) {

                if(!credentials) return null

                if(credentials.email === "diegofmsantos0@gmail.com" && credentials.senha === "diego1001") {
                    return {
                        id: '1',
                        name: 'Diego Santos',
                        email: 'diegofmsantos0@gmail.com',
                        image: '/assets/diego.PNG'
                    }
                }

                if(credentials.email === "haimferreira@hotmail.com" && credentials.senha === "haimferreira") {
                    return {
                        id: '2',
                        name: 'Haim Ferreira',
                        email: 'haiferreira@hotmail.com',
                        image: '/assets/haim.jpeg'
                    }
                }
                
                return null
            }
        })
    ]
})

export { handler as GET, handler as POST }