'use client'

import { useRouter } from "next/navigation";
import BookPreview from "./BookPreview";

export default function BookItem({peminjaman_id, title, description, book_id, author, imageUrl}: 
    {peminjaman_id: number, title: string, description?: string | null, book_id: number, author: string | null, imageUrl: string | null}){
    const router = useRouter()

    function handlePengembalian(){
        const pengembalianFunction = async () => {
            const response = await fetch(`http://localhost:3000/api/v1/peminjaman`, {
                method: "DELETE",
                body: JSON.stringify({
                    'pinjaman_id': peminjaman_id
                })
            })
            if (response.ok){
                console.log('Berhasil dikembalikan')
            }
        }
        pengembalianFunction()
        router.refresh()
    }   
    
    return (
        <>
            <BookPreview 
                title={title} 
                description={description} 
                bookId={book_id}
                imageUrl={imageUrl} 
                author={author}
                />
            <div className="flex justify-center">
                <button 
                    className="bg-green-400 p-1 mb-2"
                    onClick={handlePengembalian}
                >Kembalikan</button>
            </div>
        </>
    )
}