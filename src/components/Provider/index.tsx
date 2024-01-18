'use client'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
interface SessionProviderMidllewareProps{
    children: ReactNode;
}
export default function SessionProviderMidlleware({children}: SessionProviderMidllewareProps){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
//teste 1 merge with master