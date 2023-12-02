import Link from "next/link";

export default function BookPreview({title, description, bookId}: {title: string, description?: string | null, bookId: number}){
    return (
        <Link href="#">
            <div className="bg-sky-300 m-2 p-2">
                <div className="flex justify-center">
                    <h3 className="font-semibold">{title}</h3>
                </div>
                <div>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </Link>
    )
}
