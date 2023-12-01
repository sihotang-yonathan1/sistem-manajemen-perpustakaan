import { NextRequest, NextResponse } from "next/server";
import { addBook, deleteBook, updateBook } from "./book";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    let data = await addBook(request_json['title'], request_json?.description ?? null)
    return new NextResponse(JSON.stringify(data))
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    let response = await deleteBook(request_json['book_id'])
    return new NextResponse(JSON.stringify(response))
}

export async function PATCH(request: NextRequest){
    let request_json = await request.json()
    let response = await updateBook(
        request_json['book_id'], request_json['title'], request_json['description'])
    return new NextResponse(JSON.stringify(response))
}