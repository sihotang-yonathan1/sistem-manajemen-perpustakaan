import { NextRequest, NextResponse } from "next/server";
import { AddAccount, deletAccountByUsername } from "./account";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    let response = await AddAccount(request_json['username'], request_json['password'], request_json['role'])
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    // TODO: implement authorization using API-KEY
    let response = await deletAccountByUsername(request_json['username'])
    return new NextResponse(JSON.stringify(response))
}