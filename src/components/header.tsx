import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { CartSidebar } from "./cart/sidebar"

export const Header = () => {

    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div>
                <Image src="/assets/logo.png" width={80} height={80} alt="Logo" className="w-36 h-16" />
            </div>
            <div className="flex gap-4">
                <CartSidebar />
                <ThemeToggle />
            </div>
        </header>
    )
}