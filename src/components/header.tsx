import Image from "next/image"
import { CartSidebar } from "./cart/sidebar"

export const Header = () => {

    //const session = await getServerSession()

    //if(!session) redirect('/')

    return (
        <header
            className="fixed z-10 w-full flex justify-between h-32 items-center py-3 px-8 bg-[#002372]">
            <div className="w-30 h-12 md:w-36 md:h-16">
                <Image src="/assets/logo.png" width={150} height={80} alt="Logo" className="w-full h-full" priority />
            </div>
            
            <div className="flex gap-4">
                <CartSidebar />
            </div>
        </header>
    )
}

/*
<div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-5">
                <p className="text-white text-sm md:text-lg">Olá, {session?.user?.name}</p>
                {session?.user?.image && (
                    <Image src={session.user.image} width={50} height={50} alt="User Image" className="rounded-full" />
                )}
                <LogOut />
            </div>
*/