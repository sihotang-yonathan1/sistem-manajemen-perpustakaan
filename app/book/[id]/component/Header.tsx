import Link from "next/link";

export default function Header({title = "Title"}: {title: string}){
    return (
        <div className="flex bg-slate-400">
            <div className="p-2 max-w-min">
                <Link href="/dashboard">
                    <button>back</button>
                </Link>
            </div>
            <div className="flex flex-grow justify-center items-center">
                <p className="font-semibold">{title}</p>
            </div>
        </div>
    )
}