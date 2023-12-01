import { NextRequest, NextResponse } from "next/server";
import { AddAccount } from "./user";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    let response = await AddAccount(request_json['username'], request_json['password'], request_json['role'])
    return new NextResponse(JSON.stringify(response))
}