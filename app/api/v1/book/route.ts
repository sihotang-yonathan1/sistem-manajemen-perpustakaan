import { NextRequest, NextResponse } from "next/server";
import { addBook, deleteBook, getBookInfo, updateBook } from "./book";

export async function POST(request: NextRequest){
    let request_json = await request.json()
    const {title, description, author, imageUrl} = request_json
    let data = await addBook(title, description ?? null, author ?? null, imageUrl ?? null)
    return new NextResponse(JSON.stringify(data))
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    let response = await deleteBook(request_json['book_id'])
    return new NextResponse(JSON.stringify(response))
}

export async function PATCH(request: NextRequest){
    let request_json = await request.json()
    const {book_id, title, description, author, imageUrl} = request_json
    let response = await updateBook(
        book_id, title, description, author, imageUrl)
    return new NextResponse(JSON.stringify(response))
}

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    const book_id = url_query.get('book_id')
    if (book_id !== null){
        let data = await getBookInfo(Number(book_id)) // may not safe
        return NextResponse.json({
            'data': data,
            'message': 'Book successfully queried'
        })
    }
    return new NextResponse(JSON.stringify({
        'message': 'Query failed: book_id need to specified'
    }), {
        status: 400
    })
}