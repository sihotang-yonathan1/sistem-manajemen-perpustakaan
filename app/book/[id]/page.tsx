import { getBookInfo, getBookInfoByUserId } from "@/app/api/v1/book/book"
import PinjamButton from "./component/PinjamButton"
import { cookies } from "next/headers"
import { getSession } from "@/app/api/v1/session/session"
import { getAccountInfoByUsername } from "@/app/api/v1/account/account"

export default async function IndividualBookPage({params}: {params: {id: number}}){
    const bookInfo = await getBookInfo(Number(params.id))
    const sessionId = cookies().get('X-SESSION-ID')?.value
    const sessionData = await getSession(Number(sessionId))
    const userInfo = await getAccountInfoByUsername(sessionData?.username as string)
    const bookInfoByUserId = await getBookInfoByUserId(bookInfo?.id ?? 0, userInfo[0].id)
    
    console.log(bookInfoByUserId)
    return (
        <div className="m-2 py-2">
            <div className="flex">
                <div className="aspect-square bg-slate-200 p-5 mx-3 flex justify-center items-center">
                    <p>Image Here</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-lg">{bookInfo?.title}</p>
                    <p>{bookInfo?.description}</p>
                    <div>
                        <PinjamButton 
                            bookId={Number(bookInfo?.id)} 
                            userId={Number(userInfo[0].id)} 
                            isPinjam={(
                                bookInfoByUserId?.peminjaman.length !== undefined 
                                    ? bookInfoByUserId?.peminjaman.length > 0 
                                    : false) 
                                ?? false} 
                            />
                    </div>
                </div>
            </div>
            <div className="my-2 mx-3">
                <p>Book Volume</p>
                <div>
                    <p>Volume 1</p>
                    <p>Volume 2</p>
                </div>
            </div>
        </div>
    )
}