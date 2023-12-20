import Image from "next/image"
import Link from "next/link"

export const Header = () => {

    return (
        <header className="fixed z-50 w-full">
            <div className="w-full mb-20 h-[90px] bg-[#FF0000]">
                <div className="h-20 px-8 flex justify-center items-center bg-[#002372]">
                    <Link href="/" className="absolute top-7">
                        <Image src={`/homepage/logo.png`} width={200} height={170} alt="Logo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}