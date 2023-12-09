import { getBookInfo, getBookInfoByUserId } from "@/app/api/v1/book/book"
import PinjamButton from "./component/PinjamButton"
import { cookies } from "next/headers"
import { getSession } from "@/app/api/v1/session/session"
import { getAccountInfoByUsername } from "@/app/api/v1/account/account"
import BookHeaderInfo from "./component/BookHeaderInfo"
import Image from "next/image"

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
                { bookInfo !== null
                ? <div className="mx-2">
                    <Image src={bookInfo?.imageUrl ?? ""} width={200} height={300} alt="Book image"/>
                    </div>
                : <div className="aspect-square bg-slate-500 p-5 mx-3 flex justify-center items-center h-[300px] w-[200px]">
                    <p>Hello World</p>
                </div>
                }
               <BookHeaderInfo bookInfo={bookInfo} bookInfoByUserId={bookInfoByUserId} userInfo={userInfo} />
            </div>
        </div>
    )
}