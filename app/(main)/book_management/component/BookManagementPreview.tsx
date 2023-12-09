"use client"

import Link from "next/link";
import BookPreview from "../../dashboard/component/BookPreview";
import { useRouter } from "next/navigation";

export default function BookManagementPreview({title, description, bookId, author = null, imageUrl = null}: {title: string, description?: string | null, bookId: number, author: string | null, imageUrl: string | null}){
    const router = useRouter()
    function handleDeleteBook(){
        const deleteBookFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/book`, {
                method: "DELETE",
                credentials: "include",
                body: JSON.stringify({
                    'book_id': bookId
                })
            })
        }
        deleteBookFunction()
        router.refresh()
    }
    
    return (
        <div className="bg-sky-300 m-2 p-2 h-full flex flex-col">
            <BookPreview 
                title={title} 
                description={description} 
                bookId={bookId} 
                author={author}
                imageUrl={imageUrl}
            />
            <div className="flex flex-col">
                <button className="bg-red-500 m-1 text-white py-1" onClick={handleDeleteBook}>Delete</button>
            </div>
        </div>
    )
}
