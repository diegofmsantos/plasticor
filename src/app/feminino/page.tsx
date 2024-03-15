

import { NoteItemFem } from "@/components/NoteItemFem";
import { mainListFem } from "@/data/mainList";
import Link from "next/link";

const Page = () => {

    const Feminino = mainListFem

    return (
        <div className="pt-48 pb-20">
            <section className="bg-yellow-300 w-72 text-center p-8 m-auto mb-10">
                <p className="text-[#002372] text-xl font-bold">LINHAS FEMININA</p>
            </section>
            <div className="max-w-[1500px] p-8 text-center m-auto flex justify-center flex-wrap items-center gap-4 sm:gap-x-14 gap-y-14 lg:justify-center">
                {Feminino.map((item) => (
                    <div key={item.id}>
                        <NoteItemFem item={item} />
                    </div>
                ))}
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