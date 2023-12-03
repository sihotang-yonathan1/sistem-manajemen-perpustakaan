'use client'

export default function PinjamButton({bookId, userId}: {bookId: number, userId: number}){
    var date = new Date();
    function handlePinjam(){
        
        const pinjamFunction = async () => {
            await fetch(`http://localhost:3000/api/v1/peminjaman`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    'tanggal_pinjam': new Date().toISOString(),
                    'tanggal_pengembalian': new Date(date.setDate(date.getDay() + 14)).toISOString(),
                    'book_id': bookId,
                    'user_id': userId
                })
            })
        }
        pinjamFunction()
    }
    
    return (
        <div>
            <button 
                className="bg-orange-400 p-2 mt-2 hover:bg-orange-600"
                onClick={handlePinjam}
            >Pinjam</button>
        </div>
    )
}