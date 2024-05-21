import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { CartSidebar } from "./cart/sidebar"

export const Header = () => {

    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div>
                <Image src="/assets/logo.png" width={100} height={100} alt="Logo" className="w-40 h-16" />
            </div>
            <div className="flex gap-4">
                <CartSidebar />
                <ThemeToggle />
            </div>
        </header>
    )
}