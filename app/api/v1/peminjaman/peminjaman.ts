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

export async function addPinjamanBuku(book_id: number, account_id: number){

}