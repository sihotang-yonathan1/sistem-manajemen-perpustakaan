import { NextRequest, NextResponse } from "next/server";
import { addUserBook, deleteUserBook, getUserBooks } from "./user_book";

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    const user_id = url_query.get('user_id')
    if (user_id !== null){
        let data = await getUserBooks(Number(user_id))
        return NextResponse.json(data)
    }
    return new NextResponse(JSON.stringify({
        'message': 'user_id parameter must not empty'
    }), {
        status: 400
    })
}

export async function POST(request: NextRequest){
    const request_json = await request.json()
    let response = await addUserBook(
        request_json['book_id'],
        request_json['user_id']
    )
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    const request_json = await request.json()
    await deleteUserBook(request_json['book_id'], request_json['user_id'])
    return NextResponse.json({
        'message': 'Book successfully deleted'
    })
    
}