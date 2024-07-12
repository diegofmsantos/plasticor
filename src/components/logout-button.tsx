"use client"

import { signOut } from "next-auth/react";
import { Button } from "./ui/button"

export const LogOut = () => {

    return (
        <Button className="bg-blue-500 h-6 text-sm" onClick={() => signOut()}>Sair</Button>
    )
}

export default LogOut;