import { NextRequest, NextResponse } from "next/server";
import { loginAccount } from "./auth";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    let response = await loginAccount(request_json['username'], request_json['password'])
    return new NextResponse(JSON.stringify({
        'data': response,
        'message': 'User successfully logged in'
    }))
}
