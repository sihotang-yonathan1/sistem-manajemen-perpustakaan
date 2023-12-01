import Link from "next/link"


const sidebar_menu = [
    {
        name: 'dashboard',
        url_path: '/dashboard'
    }, {
        name: 'My book',
        url_path: '/book'
    }
]

export default function Sidebar(){
    return (
        <div className=" flex flex-col p-3 bg-slate-500 h-screen relative">
            <div className="flex justify-center mb-2">
                <p className="text-white">Welcome</p>
            </div>
            {sidebar_menu.map((value) => (
                <Link href={value.url_path} key={value.url_path} className="bg-white mb-2 p-1">
                    <button className="capitalize">{value.name}</button>
                </Link>
            ))}
            <Link href="/logout" className="flex bg-orange-400 mt-auto justify-center"> 
                <button className="px-2 py-2" >Logout</button>
            </Link>
        </div>
    )
}