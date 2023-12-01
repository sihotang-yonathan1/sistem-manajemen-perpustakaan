import { NextRequest, NextResponse } from "next/server";
import { loginAccount } from "./auth";
import { deleteSession, getSession, setSession } from "../session/session";
import { cookies } from "next/headers";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const username = request_json['username']

    // check if session id already set
    if (cookies().get('X-SESSION-ID') !== null){
        let session_data = await getSession(Number(cookies().get('X-SESSION-ID')?.value || 0))
        if (session_data !== null){
            return NextResponse.json({
                'message': 'User already login'
            })
        }
    }
    let response = await loginAccount(username, request_json['password'])
    if (response !== null){
        let session_response = await setSession(username)
        cookies().set('X-SESSION-ID', String(session_response.session_id))
        return new NextResponse(JSON.stringify({
            'session': session_response,
            'data': response,
            'message': 'User successfully logged in'
        }))
    }
    return new NextResponse(JSON.stringify({
        'data': response,
        'message': 'User failed to login'
    }), {
        status: 401
    })
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    // delete from header
    cookies().delete('X-SESSION-ID')

    // delete from database
    let data = await deleteSession(request_json['session_id'])
    
    return new NextResponse(JSON.stringify(data))
}
