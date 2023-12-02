import { NextRequest, NextResponse } from "next/server";
import { addPinjamanBuku, deletePinjamanBuku, getPinjamanBuku, updateTanggalPengembalianPinjamanBuku } from "../peminjaman/peminjaman";

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
    let request_json = await request.json()
    let response = await addPinjamanBuku(
        request_json?.tanggal_pinjam ?? new Date().toISOString(), request_json['tanggal_pengembalian'], 
        request_json['book_id'], request_json['user_id'])
    return new NextResponse(JSON.stringify(response))
}

export async function DELETE(request: NextRequest){
    let request_json = await request.json()
    let data = await deletePinjamanBuku(request_json['pinjaman_id'])
    return new NextResponse(JSON.stringify(data))
}

export async function PATCH(request: NextRequest){
    let request_json = await request.json()
    let data = await updateTanggalPengembalianPinjamanBuku(
        request_json['pinjaman_id'], request_json['tanggal_pengembalian'])
    return new NextResponse(JSON.stringify(data))
}