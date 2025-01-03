import Image from "next/image"
import { CartSidebar } from "./cart/sidebar"

export const Header = () => {

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

