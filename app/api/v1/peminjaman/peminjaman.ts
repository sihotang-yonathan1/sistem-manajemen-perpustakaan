import prisma from "../../../utils/db_config";

export async function getPinjamanBuku(user_id: number){
    let data = await prisma.peminjaman.findMany({
        select: {
            id: true,
            tanggal_pinjam: true,
            tanggal_pengembalian: true,
            book_id: true
        },
        where: {
            account_id: user_id
        }
    })
    return data
}


export async function addPinjamanBuku(tanggal_pinjam: Date, tanggal_pengembalian: Date, book_id: number, account_id: number){
    await prisma.peminjaman.create({
        data: {
            tanggal_pinjam: tanggal_pinjam,
            tanggal_pengembalian: tanggal_pengembalian,
            account_id: account_id,
            book_id: book_id,
        }
    })
    return {
        'message': 'Buku sukses dipinjam'
    }
}

export async function deletePinjamanBuku(pinjaman_id: number){
    await prisma.peminjaman.delete({
        where: {
            id: pinjaman_id
        }
    })
    return {
        'message': 'Buku berhasil dihapus dari daftar pinjaman'
    }
}