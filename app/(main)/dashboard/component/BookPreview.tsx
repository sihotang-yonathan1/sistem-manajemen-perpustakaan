export default function BookPreview({title, description}: {title: string, description?: string | null}){
    return (
        <div className="bg-sky-300 m-2 p-2">
            <div className="flex justify-center">
                <h3 className="font-semibold">{title}</h3>
            </div>
            <div>
                <p className="text-sm">{description}</p>
            </div>
            <div className="flex justify-center my-1">
                <button className="bg-orange-500 text-white p-1">Read</button>
            </div>
        </div>
    )
}
