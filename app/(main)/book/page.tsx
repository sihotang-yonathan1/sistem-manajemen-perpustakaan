import { getAccountInfoByUsername } from "@/app/api/v1/account/account"
import { getSession } from "@/app/api/v1/session/session"
import { getUserBooks } from "@/app/api/v1/user_book/user_book"
import { cookies } from "next/headers"

export default async function UserBookPage(){
    const sessionId = cookies().get('X-SESSION-ID')?.value
    const sessionData = await getSession(Number(sessionId))
    const username = sessionData?.username
    
    let userBook = []
    if (username !== null && username !== undefined){
        const user_info = await getAccountInfoByUsername(username)
        if (user_info.length > 0){
            const userBooks = await getUserBooks(user_info[0].id)
            if (userBooks !== null){
                userBook = userBooks
            }
        }
    }
    return (
        <>
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">My Book</p>
            </div>
            {
                userBook.map((value, index) => (
                    <div key={index}>
                        <p>{value}</p>
                    </div>
                ))
            }
        </>
    )
}