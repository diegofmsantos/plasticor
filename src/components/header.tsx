import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { CartSidebar } from "./cart/sidebar"

export const Header = () => {

    return (
        <header
            className="fixed z-10 w-full flex justify-between h-28 items-center py-3 px-8 bg-[#002372]">
            <div>
                <Image src="/assets/logo.png" width={80} height={80} alt="Logo" className="w-36 h-16" priority />
            </div>
            <div className="flex gap-4">
                <CartSidebar />
            </div>
        </header>
    )
}