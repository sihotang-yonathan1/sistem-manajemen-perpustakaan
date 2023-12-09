// import TestImage from "../../../../assets/WhatsApp Image 2023-12-09 at 12.39.20.jpeg"
import Image from "next/image";
import Link from "next/link";

export default function BookPreview({title, description, bookId}: {title: string, description?: string | null, bookId: number}){
    return (
        <Link href={`/book/${bookId}`} className="flex flex-col w-full flex-grow">
            <div className="bg-sky-300 m-2 p-2 h-full flex flex-col">
                <div className="flex justify-center">
                    {/* <Image src={TestImage} height={100} width={100} alt="book image"/> */}
                </div>
                <div className="flex justify-center">
                    <h3 className="font-semibold">{title}</h3>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-sm">{description}</p>
                </div>
                <div className="flex justify-center">
                    <p>Author: A</p>
                </div>
            </div>
        </Link>
    )
}
