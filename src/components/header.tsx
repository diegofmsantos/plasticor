import Image from "next/image"
import { CartSidebar } from "./cart/sidebar"
import { getServerSession } from 'next-auth'
import { Button } from "./ui/button"
import { signOut } from "next-auth/react"
import LogOut from "./logout-button"
import { redirect } from "next/navigation"

export const Header = async () => {

    const session = await getServerSession()

    if(!session) redirect('/')

    return (
        <header
            className="fixed z-10 w-full flex justify-between h-32 items-center py-3 px-8 bg-[#002372]">
            <div className="w-36 h-16">
                <Image src="/assets/logo.png" width={150} height={80} alt="Logo" className="w-full h-full" priority />
            </div>
            <div className="flex items-center gap-5">
                <p className="text-white">Olá, {session?.user?.name}</p>
                {session?.user?.image && (
                    <Image src={session.user.image} width={50} height={50} alt="User Image" className="rounded-full" />
                )}
                <LogOut />
            </div>
            <div className="flex gap-4">
                <CartSidebar />
            </div>
        </header>
    )
}