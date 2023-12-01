import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutPage(){
    const session_id = cookies().get('X-SESSION-ID')?.value
    if (session_id !== null){
        let response = await fetch(`http://localhost:3000/api/v1/auth`, {
            method: "DELETE",
            body: JSON.stringify({
                'session_id': Number(session_id)
            })
        })
        if (response.ok){
            redirect('/login')
        }
    }
    
}