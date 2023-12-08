'use client'

export default function PinjamButton({bookId, userId, isPinjam}: {bookId: number, userId: number, isPinjam: boolean}){
    console.log(`isPInjam value: ${isPinjam}`)
    let date = new Date();
    
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

    // the name may not accurate as this is just delete the 
    // entry in peminjaman rather than pengembalian
    function handlePengembalian(){
        const pengembalianFunction = async () => {
            // TODO: refactor the if statement
            let bookData: {
                id: number;
                book_id: number;
                tanggal_pinjam: Date | null;
                tanggal_pengembalian: Date | null;
            }[] = []
            let response = await fetch(`http://localhost:3000/api/v1/peminjaman?user_id=${userId}`)
            if (response.ok){
                let json_data = await response.json()
                if (json_data?.data){
                    bookData = json_data.data

                    bookData = bookData.filter(value => value?.book_id === bookId)

                    if (bookData.length !== 0){
                        await fetch(`http://localhost:3000/api/v1/peminjaman`, {
                            method: "DELETE",
                            body: JSON.stringify({
                                'pinjaman_id': bookData[0].id,
                            })
                        })
                    }
                }
            }
        }
        pengembalianFunction()
    }
    
    return (
        <div>
            <button 
                className="bg-orange-400 p-2 mt-2 hover:bg-orange-600"
                onClick={() => isPinjam ?  handlePengembalian() : handlePinjam()}
            >{isPinjam ? 'Kembalikan':  'Pinjam'}</button>
        </div>
    )
}