import { getBookInfo } from "@/app/api/v1/book/book";
import Header from "./component/Header";

export default async function IndividualBookLayout({params, children}: {params: {id: number}, children: React.ReactNode}){
    const bookId = params.id
    const bookInfo = await getBookInfo(Number(bookId))
    return (
        <div>
            <Header title={bookInfo?.title ?? "Title"} />
            {children}
        </div>
    )
}