import Link from "next/link";

const Page = () => {

    return (
        <div className="pt-48 pb-20">
            <section className="bg-yellow-300 w-72 text-center p-8 m-auto mb-10">
                <p className="text-[#002372] text-xl font-bold">LINHAS MASCULINAS</p>
            </section>
            <div className="max-w-[1500px] p-8 text-center m-auto flex justify-center flex-wrap items-center gap-4 sm:gap-x-14 gap-y-14 lg:justify-center">
                <Link href="/masculino/code">
                    <img src={`capas-masculinas/CODE-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">CODE</p>
                </Link>
                <Link href="/masculino/daijobu">
                    <img src={`capas-masculinas/DAIJOBU-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">DAIJOBU</p>
                </Link>
                <Link href="/masculino/epic-games">
                    <img src={`capas-masculinas/EPIC-GAMES-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">EPIC GAMES</p>
                </Link>
                <Link href="/masculino/fight-club">
                    <img src={`capas-masculinas/FIGHT-CLUB-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">FIGHT CLUB</p>
                </Link>
                <Link href="/masculino/gol">
                    <img src={`capas-masculinas/GOL-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">GOL</p>
                </Link>
                <Link href="/masculino/gospel">
                    <img src={`capas-masculinas/GOSPEL-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">GOSPEL</p>
                </Link>
                <Link href="/masculino/grafitti">
                    <img src={`capas-masculinas/GRAFITTI-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">GRAFITTI</p>
                </Link>
                <Link href="/masculino/heroes">
                    <img src={`capas-masculinas/HEROES-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">HEROES</p>
                </Link>
                <Link href="/masculino/high">
                    <img src={`capas-masculinas/HIGH-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">HIGH</p>
                </Link>
                <Link href="/masculino/kingdom">
                    <img src={`capas-masculinas/KINGDOM-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">KINGDOM</p>
                </Link>
                <Link href="/masculino/motorcycles">
                    <img src={`capas-masculinas/MOTORCYCLES-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">MOTORCYCLES</p>
                </Link>
                <Link href="/masculino/sk8">
                    <img src={`capas-masculinas/SK8-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">SK8</p>
                </Link>
                <Link href="/masculino/skull">
                    <img src={`capas-masculinas/SKULL-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">SKULL</p>
                </Link>
                <Link href="/masculino/sportmix">
                    <img src={`capas-masculinas/SPORTMIX-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">SPORTMIX</p>
                </Link>
                <Link href="/masculino/velozes">
                    <img src={`capas-masculinas/VELOZES-E-TUNADOS-1.png`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
                    <p className="text-sm text-[#002372] font-bold mt-2">VELOZES E TUNADOS</p>
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