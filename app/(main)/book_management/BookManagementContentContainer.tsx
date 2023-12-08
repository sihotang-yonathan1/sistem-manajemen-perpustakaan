import BookPreview from "../dashboard/component/BookPreview";
import BookManagementPreview from "./component/BookManagementPreview";

export default function BookManagementContentContainer({allBooks}: {allBooks: {
        id: number;
        title: string | null;
        description: string | null;
    }[]}){
    return (
        <div>
            <div className="flex overflow-x-auto">
                {allBooks.map((value, index)=> (
                    <div key={index} className="flex flex-col flex-grow flex-shrink basis-0">
                        <BookManagementPreview title={value.title ?? ""} description={value.description} bookId={value.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}