import { cookies } from "next/headers";
import BookPreview from "./component/BookPreview";
import { redirect } from "next/navigation";
import { getAllBook } from "@/app/api/v1/book/book";

export default async function DashboardPage(){
    const sessionId = cookies().get('X-SESSION-ID')?.value
    const allBooks = await getAllBook() ?? []
    
    return (
        <div>
            <div className="flex bg-slate-400 justify-center p-2">
                <p className="font-bold">Dashboard</p>
            </div>
            <div className="flex overflow-x-auto">
                {allBooks.map((value, index)=> (
                    <div key={index} className="flex flex-col flex-grow flex-shrink basis-0">
                        <BookPreview title={value.title ?? ""} description={value.description} bookId={value.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}