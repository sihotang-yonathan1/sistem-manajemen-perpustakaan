import Link from "next/link";

export default function BookManagementPreview({title, description, bookId}: {title: string, description?: string | null, bookId: number}){
    return (
        <div className="bg-sky-300 m-2 p-2 h-full flex flex-col">
            <Link href={`/book/${bookId}`} className="flex flex-col w-full flex-grow">
                <div className="bg-sky-300 m-2 p-2 h-full flex flex-col">
                    <div className="flex justify-center">
                        <h3 className="font-semibold">{title}</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-sm">{description}</p>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col">
                <button className="bg-red-500 m-1 text-white py-1">Delete</button>
            </div>
        </div>
    )
}
