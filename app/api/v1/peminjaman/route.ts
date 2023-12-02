import { NextRequest, NextResponse } from "next/server";
import { addPinjamanBuku, getPinjamanBuku } from "../peminjaman/peminjaman";

export async function GET(request: NextRequest){
    const url_query = request.nextUrl.searchParams
    const userId = url_query.get('user_id')
    if (userId !== null){
        let data = await getPinjamanBuku(Number(userId))
        return new NextResponse(JSON.stringify({
            'data': data,
            'message': 'Query berjalan dengan baik'
        }))
    }
    return new NextResponse(JSON.stringify({
        'message': 'parameter user_id wajib untuk dibuat'
    }), {
        status: 400
    })
}

export async function POST(request: NextRequest){
    let response_json = await request.json()
    let response = await addPinjamanBuku(
        response_json?.tanggal_pinjam ?? new Date().toISOString(), response_json['tanggal_pengembalian'], 
        response_json['book_id'], response_json['user_id'])
    return new NextResponse(JSON.stringify(response))
}