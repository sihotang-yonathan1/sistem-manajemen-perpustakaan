import prisma from "../../../utils/db_config";
import { getBookInfo } from "../book/book";

export async function addUserBook(book_id: number, user_id: number){
    await prisma.user_book.create({
        data: {
            account_id: user_id,
            book_id: book_id
        }
    })
    return {
        'message': 'Book successfully added'
    }
}

export async function deleteUserBook(book_id: number, user_id: number){
    await prisma.$executeRaw`
        DELETE FROM user_book
        WHERE book_id = ${book_id} AND account_id =${user_id}
    `
}

export async function getUserBooks(user_id: number){
    const user_book_ids = await prisma.user_book.findMany({
        select: {
            book_id: true
        },
        where: {
            account_id: user_id
        }
    })

    let book_info = [];
    for (let book of user_book_ids){
        book_info.push(
            await getBookInfo(book.book_id)
        )
    }
    return book_info
}