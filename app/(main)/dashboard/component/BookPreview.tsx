import Image from "next/image";
import Link from "next/link";

export default function BookPreview({
    title, description, bookId, author = null, imageUrl = null}: 
    {title: string, description?: string | null, bookId: number, author: string | null, imageUrl: string | null}){
    
    //const imageUrl_test = `../../../../assets/${imageUrl}`
    return (
        <Link href={`/book/${bookId}`} className="flex flex-col w-full flex-grow">
            <div className="bg-sky-300 m-2 p-2 h-full flex flex-col">
                {imageUrl !== null && <div className="flex justify-center">
                    <Image 
                        src={'https://www.mitrawacanamedia.com/image/cache/catalog/data/buku_teknik_komputer/pengantar_sistem_informasi-800x800.jpg'} 
                        height={100} 
                        width={100} 
                        alt="book image"
                    />
                </div>
                }
                <div className="flex justify-center">
                    <h3 className="font-semibold">{title}</h3>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-sm">{description}</p>
                </div>
                <div className="flex justify-center">
                    {author && <p>Author: {author}</p>}
                </div>
            </div>
        </Link>
    )
}
