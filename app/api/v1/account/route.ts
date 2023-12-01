import { NextRequest, NextResponse } from "next/server";
import { AddAccount, deleteAccountByUsername, getAccountInfoByUsername, updateAccount } from "./account";

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    const username = url_query.get('username')
    if (username !== null){
        let data = await getAccountInfoByUsername(username)
        return new NextResponse(JSON.stringify(data))
    }
    else {
        return new NextResponse(JSON.stringify({
            'message': 'Can\'t query the specified data'
        }), {
            status: 400
        })
    }
}

export async function POST(request: NextRequest){
    let request_json = await request.json()
    let response = await AddAccount(request_json['username'], request_json['password'], request_json['role'])
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    // TODO: implement authorization using API-KEY
    let response = await deleteAccountByUsername(request_json['username'])
    return new NextResponse(JSON.stringify(response))
}

export async function PATCH(request: NextRequest){
    let request_json = await request.json()
    // TODO: implement authorization using API-KEY
    let response = await updateAccount(
        request_json['username'], request_json['password'], 
        request_json['role'])
    return new NextResponse(JSON.stringify(response))
}