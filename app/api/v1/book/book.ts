
import { Prisma } from "@prisma/client";
import prisma from "../../../utils/db_config";

export async function addBook(title: string, description: string | null){
    await prisma?.book.create({
        select: {
            title: true,
            description: true
        },
        data: {
            title: title,
            description: description
        }
    })
    return {
        'message': 'Book successfully added'
    }
}

export async function deleteBook(book_id: number){
    try {
        await prisma.book.delete({
            where: {
                id: book_id
            }
        })
        return {
            'message': 'Book successfully deleted'
        }
    }
    catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            return {
                'message': 'Book failed to delete'
            }
        }
    }
}