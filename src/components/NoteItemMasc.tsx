import { Notebook } from "@/types/Notebook"
import Link from "next/link"

type Props = {
    item: Notebook
}

export const NoteItemMasc = ({ item }: Props) => {

    return (
        <Link href={`/masculino/${item.linha}`}>
            <img src={`capas-masculinas/${item.url}`} alt="Notebook" className="w-52 min-[400px]:w-60 cursor-pointer opacity-70 hover:opacity-100" />
            <p className="text-sm text-[#002372] font-bold mt-2">{item.linha}</p>
        </Link>
    )
}