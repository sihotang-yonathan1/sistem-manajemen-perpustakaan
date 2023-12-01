
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