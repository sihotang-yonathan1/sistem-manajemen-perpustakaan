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

export async function updateTanggalPengembalianPinjamanBuku(pinjaman_id: number, tanggal_pengembalian: Date){
    await prisma.peminjaman.update({
        where: {
            id: pinjaman_id
        },
        data: {
            tanggal_pengembalian: tanggal_pengembalian
        }
    })
    return {
        'message': 'tanggal pengembalian berhasil diupdate'
    }
}

type PinjamanBukuUsername = {
    id: number,
    book_id: number,
    book_title: string,
    description?: string,
    username: string,
    tanggal_pinjam: Date
}

export async function getPinjamanBukuByUsername(username: string){
    let data: PinjamanBukuUsername[] = await prisma.$queryRaw`
        SELECT 
            peminjaman.id, 
            peminjaman.book_id, 
            book.title, 
            book.description, 
            account.username, 
            peminjaman.tanggal_pinjam 
        FROM peminjaman 
            INNER JOIN book ON book.id = peminjaman.book_id 
            INNER JOIN account ON account.id = peminjaman.account_id;
    `
    return data ?? []
}