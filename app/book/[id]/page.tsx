import { getBookInfo } from "@/app/api/v1/book/book"

export default async function IndividualBookPage({params}: {params: {id: number}}){
    const bookInfo = await getBookInfo(Number(params.id))
    return (
        <div className="m-2 py-2">
            <div className="flex">
                <div className="aspect-square bg-slate-200 p-5 mx-3 flex justify-center items-center">
                    <p>Image Here</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-lg">{bookInfo?.title}</p>
                    <p>{bookInfo?.description}</p>
                </div>
            </div>
            <div className="my-2 mx-3">
                <p>Book Volume</p>
                <div>
                    <p>Volume 1</p>
                    <p>Volume 2</p>
                </div>
            </div>
        </div>
    )
}