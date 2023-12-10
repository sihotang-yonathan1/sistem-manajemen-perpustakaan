import { getAccountInfoByUsername } from "@/app/api/v1/account/account"
import { getSession } from "@/app/api/v1/session/session"
import { getUserBooks } from "@/app/api/v1/user_book/user_book"
import { cookies } from "next/headers"
import BookPreview from "../dashboard/component/BookPreview";
import React from "react"
import { getPinjamanBukuByUsername } from "@/app/api/v1/peminjaman/peminjaman";
import BookItem from "../dashboard/component/BookItem";
import BookSection from "../dashboard/component/BookSection";



type PinjamanBukuUsername = {
    id: number,
    book_id: number,
    title: string,
    description?: string,
    author: string | null,
    imageUrl: string | null,
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
        <div className="relative flex flex-col flex-grow">
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">My Book</p>
            </div>
            <div className="p-1">
                { result.length > 0
                ? 
                <BookSection title="Buku dipinjam">
                    {
                        result.map((value, index) => (
                            <div key={index} className="bg-sky-200 my-2 mx-2">
                                <BookItem
                                    title={value.title}
                                    description={value.description}
                                    book_id={value.book_id}
                                    peminjaman_id={value.id}
                                    author={value.author}
                                    imageUrl={value.imageUrl}
                                />
                            </div>
                        ))
                    }
                </BookSection>
                : <div className=" absolute flex flex-col justify-center items-center w-full h-[90vh]">
                    <div>
                        <p className="text-center flex-wrap">Kamu tidak punya buku yang dipinjam</p>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}