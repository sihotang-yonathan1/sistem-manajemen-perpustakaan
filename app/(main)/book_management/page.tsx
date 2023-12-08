import { getAllBook } from "@/app/api/v1/book/book";
import BookManagementBottomContainer from "./BookManagementBottomContainer";
import BookManagementContentContainer from "./BookManagementContentContainer";

export default async function BookManagementPage(){
    const allBooks = await getAllBook() ?? []
    return (
        <div className="relative flex flex-col flex-grow">
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">Book Management</p>
            </div>
            <BookManagementContentContainer allBooks={allBooks}/>
            <BookManagementBottomContainer />
        </div>
    )
}