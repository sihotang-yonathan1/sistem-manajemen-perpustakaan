'use client'

import BookPreview from "./BookPreview";

export default function BookItem({peminjaman_id, title, description, book_id}: {peminjaman_id: number, title: string, description?: string | null, book_id: number}){
    function handlePengembalian(){
        const pengembalianFunction = async () => {
            const response = await fetch(`http://localhost:3000/api/v1/pengembalian`, {
                method: "POST",
                body: JSON.stringify({
                    'tanggal_pengembalian': new Date().toISOString(),
                    'pinjaman_id': peminjaman_id
                })
            })
            if (response.ok){
                console.log('Berhasil dikembalikan')
            }
        }
        pengembalianFunction()
    }   
    
    return (
        <>
            <BookPreview 
                title={title} 
                description={description} 
                bookId={book_id} />
            <div className="flex justify-center">
                <button 
                    className="bg-green-400 p-1 mb-2"
                    onClick={handlePengembalian}
                >Kembalikan</button>
            </div>
        </>
    )
}