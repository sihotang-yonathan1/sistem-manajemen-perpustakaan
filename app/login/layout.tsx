import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function LoginLayout({children}: {children: React.ReactNode}){
    const sessionId = cookies().get('X-SESSION-ID')?.value
    console.log(sessionId)
    // if (sessionId !== undefined){
    //     redirect('/dashboard')
    // }
    return (
        <>
            {children}
        </>
    )
    
}