import { Notebook } from "@/types/Notebook";
import { NoteList } from "@/data/noteList"

export const getNoteList = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteList)
        }, 1000)
    })

}