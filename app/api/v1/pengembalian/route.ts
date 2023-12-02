import { NextRequest, NextResponse } from "next/server";
import { addPengembalian } from "./pengembalian";

export async function POST(request: NextRequest){
    const request_json = await request.json()
    let response = await addPengembalian(
        request_json['pinjaman_id'], request_json['tanggal_pengembalian']
    )
    return new NextResponse(JSON.stringify(response))
}