import { NextRequest, NextResponse } from "next/server";
import { addBook } from "./book";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    let data = addBook(request_json['title'], request_json?.description ?? null)
    return new NextResponse(JSON.stringify(data))
}