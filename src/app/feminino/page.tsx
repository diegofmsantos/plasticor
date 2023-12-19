import Link from "next/link";

const Page = () => {

    return (
        <div>
            <section className="bg-yellow-300 w-72 text-center p-8 m-auto my-14">
                <p className="text-[#002372] text-xl font-bold">LINHAS FEMININAS</p>
            </section>
            <div className="container max-w-[1500px] p-8 text-center m-auto flex justify-center flex-wrap items-center gap-4 sm:gap-x-14 gap-y-14 lg:justify-center  ">
                <Link href="/feminino/aspects">
                    <img src={`capas-femininas/ASPECTS-4.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">ASPECTS</p>
                </Link>
                <Link href="/feminino/capriche">
                    <img src={`capas-femininas/CAPRICHE-2.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">CAPRICHE</p>
                </Link>
                <Link href="/feminino/charm">
                    <img src={`capas-femininas/CHARM-2.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">CHARM</p>
                </Link>
                <Link href="/feminino/colour">
                    <img src={`capas-femininas/COLOUR-4.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">COLOUR</p>
                </Link>
                <Link href="/feminino/cosmus">
                    <img src={`capas-femininas/COSMUS-3.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">COSMUS</p>
                </Link>
                <Link href="/feminino/cute">
                    <img src={`capas-femininas/CUTE-2.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">CUTE</p>
                </Link>
                <Link href="/feminino/flys">
                    <img src={`capas-femininas/FLYS-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">FLYS</p>
                </Link>
                <Link href="/feminino/love">
                    <img src={`capas-femininas/LOVE-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">LOVE</p>
                </Link>
                <Link href="/feminino/moments">
                    <img src={`capas-femininas/MOMENTS-2.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">MOMENTS</p>
                </Link>
                <Link href="/feminino/pets">
                    <img src={`capas-femininas/PETS-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">PETS</p>
                </Link>
                <Link href="/feminino/tropicaliente">
                    <img src={`capas-femininas/TROPICALIENTE-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">TROPICALIENTE</p>
                </Link>
                <Link href="/feminino/unicorn-world">
                    <img src={`capas-femininas/UNICORN-WORLD-3.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">UNICORN WORLD</p>
                </Link>
                <Link href="/feminino/weird">
                    <img src={`capas-femininas/WEIRD-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">WEIRD</p>
                </Link>
            </div>
            <Link
                href="/"
                className="w-32 flex justify-center items-center m-auto text-center p-2 mb-8 border bg-[#25D366] text-white font-bold rounded-md"
            >Voltar
            </Link>
        </div>
    )
}

export default Page;