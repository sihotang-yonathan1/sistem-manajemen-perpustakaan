import { cookies } from "next/headers";
import { deleteSession } from "../api/v1/session/session";
import { redirect } from "next/navigation";

export default async function LogoutPage(){
    const session_id = cookies().get('X-SESSION-ID')
    if (session_id !== null){
        await deleteSession(Number(session_id?.value))
    }
    redirect('/login')
}