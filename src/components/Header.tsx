import Image from "next/image"
import Link from "next/link"

export const Header = () => {

    return (
        <header>
            <div className="w-full h-[154px] bg-[#FF0000]">
                <div className="h-36 px-8 flex justify-center items-center bg-[#002372]">
                    <Link href="/">
                        <Image src={`/homepage/logo.png`} width={170} height={170} alt="Logo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}