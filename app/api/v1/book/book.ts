
import { Prisma } from "@prisma/client";
import prisma from "../../../utils/db_config";

export async function addBook(
    title: string, 
    description: string | null, 
    author: string | null, 
    imageUrl: string | null){
    await prisma?.book.create({
        select: {
            title: true,
            description: true,
            author: true,
            imageUrl: true
        },
        data: {
            title: title,
            description: description,
            author: author,
            imageUrl: imageUrl
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

export async function updateBook(
    book_id: number, 
    title: string, 
    description: string | null | undefined, 
    author: string | null | undefined, 
    imageUrl: string | null | undefined){
    await prisma.book.update({
        data: {
            title: title,
            description: description,
            author: author,
            imageUrl: imageUrl
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
            description: true,
            author: true,
            imageUrl: true
        },
        where: {
            id: book_id
        }
    })
    return data
}

export async function getBookInfoByUserId(book_id: number, user_id: number){
    let data = await prisma.book.findFirst({
        select: {
            id: true,
            title: true,
            description: true,
            author: true,
            imageUrl: true,
            peminjaman: {
                select: {
                    id: true
                },
                where: {
                    account_id: user_id
                }
            }
        }, 

    })
    return data
}

export async function getAllBook(){
    let data = await prisma.book.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            author: true,
            imageUrl: true
        }
    })
    return data
}