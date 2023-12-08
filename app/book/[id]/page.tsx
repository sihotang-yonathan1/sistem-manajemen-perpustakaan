import { getBookInfo, getBookInfoByUserId } from "@/app/api/v1/book/book"
import PinjamButton from "./component/PinjamButton"
import { cookies } from "next/headers"
import { getSession } from "@/app/api/v1/session/session"
import { getAccountInfoByUsername } from "@/app/api/v1/account/account"
import BookHeaderInfo from "./component/BookHeaderInfo"

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
                <BookHeaderInfo bookInfo={bookInfo} bookInfoByUserId={bookInfoByUserId} userInfo={userInfo} />
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