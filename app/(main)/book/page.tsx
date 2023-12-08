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
            <div className="m-2 p-1">
                { result.length > 0 &&
                <BookSection title="Buku dipinjam">
                    {
                        result.map((value, index) => (
                            <div key={index} className="bg-sky-200 my-2 mx-2">
                                <BookItem
                                    title={value.title}
                                    description={value.description}
                                    book_id={value.book_id}
                                    peminjaman_id={value.id}
                                />
                            </div>
                        ))
                    }
                </BookSection>
                }
            </div>
            <div className="fixed bottom-0 right-0 m-2 bg-sky-400 rounded-full px-4 py-2">
                <button>+</button>
            </div>

            {/* <div className="absolute m-0 border bg-slate-100">
                <div className="p-2">
                    <h3>Tambah Buku</h3>
                    <div>
                        <input type="text" name="pinjam_buku_id_input" id="pinjam_buku_id_input" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}