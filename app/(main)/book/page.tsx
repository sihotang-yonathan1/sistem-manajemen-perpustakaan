import { getAccountInfoByUsername } from "@/app/api/v1/account/account"
import { getSession } from "@/app/api/v1/session/session"
import { getUserBooks } from "@/app/api/v1/user_book/user_book"
import { cookies } from "next/headers"
import BookPreview from "../dashboard/component/BookPreview";
import React from "react"
import { getPinjamanBukuByUsername } from "@/app/api/v1/peminjaman/peminjaman";


export function BookSection({title, children}: {title: string, children: React.ReactNode}){
    return (
        <div className="bg-slate-200">
            <div className="p-2">
                <p className="font-semibold">{title}</p>
            </div>
            <div className="overflow-x-auto flex">
                {children}
            </div>
        </div>
    )
}

type PinjamanBukuUsername = {
    id: number,
    book_id: number,
    title: string,
    description?: string,
    username: string,
    tanggal_pinjam: Date
}


export default async function UserBookPage(){
    const sessionId = cookies().get('X-SESSION-ID')?.value
    const sessionData = await getSession(Number(sessionId))
    
    let result: [] | PinjamanBukuUsername[] = []
    if (sessionData !== null || sessionData !== undefined){
        let buku_dipinjam = await getPinjamanBukuByUsername(sessionData?.username ?? '')
        result = buku_dipinjam;
    }
    
    return (
        <>
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">My Book</p>
            </div>
            <div className="m-2 p-1">
                <BookSection title="Buku dipinjam">
                    {
                        result.map((value, index) => (
                            <div key={index}>
                                <BookPreview title={value.title} description={value.description}/>
                            </div>
                        ))
                    }
                </BookSection>
            </div>
        </>
    )
}