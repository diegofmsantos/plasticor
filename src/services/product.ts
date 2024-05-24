import { Notebook } from "@/types/Notebook";
import { NoteListMasc } from "@/data/noteListMasc"
import { NoteListFem } from "@/data/noteListFem"
import { NoteListInfantil } from "@/data/noteListInfantil"
import { NoteListRdzdFem, NoteListRdzdMasc } from "@/data/noteListRdzd";

export const getNoteMasc = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListMasc)
        }, 1000)
    })

}

export const getNoteFem = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListFem)
        }, 1000)
    })
}

export const getNoteRdzdMasc = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListRdzdMasc)
        }, 1000)
    })
}

export const getNoteRdzdFem = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListRdzdFem)
        }, 1000)
    })
}

export const getNoteInfant = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListInfantil)
        }, 1000)
    })
}