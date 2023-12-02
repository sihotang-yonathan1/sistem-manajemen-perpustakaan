import { NextRequest, NextResponse } from "next/server";
import { getPinjamanBuku } from "../peminjaman/peminjaman";

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