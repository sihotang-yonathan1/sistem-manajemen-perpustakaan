import prisma from "../../../utils/db_config";

export async function addPengembalian(pinjaman_id: number, tanggal_pengembalian: Date){
    await prisma.pengembalian.create({
        data: {
            pinjaman_id: pinjaman_id,
            tanggal_pengembalian: tanggal_pengembalian
        }
    })
    return {
        'message': 'Buku berhasil dikembalikan'
    }
}