export function BookPreview({title, description}: {title: string, description?: string | null}){
    return (
        <div className="bg-sky-300 m-2 p-2">
            <div>
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

export default function DashboardPage(){
    return (
        <div>
            <div className="flex bg-slate-400 justify-center p-2">
                <p className="font-bold">Dashboard</p>
            </div>
            <div className="flex overflow-x-auto">
                <BookPreview title="Title" description="description of this book"/>
                <BookPreview title="Title" description="description of this book"/>
                <BookPreview title="Title" description="description of this book"/>
                <BookPreview title="Title" description="description of this book"/>
            </div>
        </div>
    )
}