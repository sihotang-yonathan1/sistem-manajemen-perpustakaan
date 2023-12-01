
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

export async function updateBook(book_id: number, title: string, description: string | null){
    await prisma.book.update({
        data: {
            title: title,
            description: description
        },
        where: {
            id: book_id
        }
    })
    return {
        'message': 'Book successfully updated'
    }
}

export async function getBookInfo(book_id: number){
    let data = await prisma.book.findFirst({
        select: {
            id: true,
            title: true,
            description: true
        },
        where: {
            id: book_id
        }
    })
    return data
}

export async function getAllBook(){
    let data = await prisma.book.findMany({
        select: {
            id: true,
            title: true,
            description: true
        }
    })
    return data
}