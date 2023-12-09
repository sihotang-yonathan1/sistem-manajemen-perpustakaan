import { cookies } from "next/headers";
import BookPreview from "./component/BookPreview";
import { redirect } from "next/navigation";
import { getAllBook } from "@/app/api/v1/book/book";

export default async function DashboardPage(){
    const sessionId = cookies().get('X-SESSION-ID')?.value
    const allBooks = await getAllBook() ?? []
    
    return (
        <div className="flex flex-col">
            <div className="flex bg-slate-400 justify-center p-2">
                <p className="font-bold">Dashboard</p>
            </div>
            <div className="flex justify-center m-1">
                <input 
                    type="text" 
                    name="search_input" 
                    className="border rounded px-2 mx-2 py-1"
                    id="search_input" 
                    placeholder="Search book here"/>
                <button 
                    className="flex flex-col px-1 justify-center bg-sky-400"
                    >Ok</button>
            </div>
            <div className="flex overflow-x-auto">
                {allBooks.map((value, index)=> (
                    <div key={index} className="flex flex-col flex-grow flex-shrink basis-0">
                        <BookPreview 
                            title={value.title ?? ""} 
                            description={value.description} 
                            bookId={value.id}
                            author={value.author}
                            imageUrl={value.imageUrl}/>
                    </div>
                ))}
            </div>
        </div>
    )
}