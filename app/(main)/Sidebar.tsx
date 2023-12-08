import Link from "next/link"
import { getSession } from "../api/v1/session/session"
import { cookies } from "next/headers"
import { getAccountInfoByUsername } from "../api/v1/account/account"


type SidebarMenuItemType = {
    name: string,
    url_path: string,
    isAdminPrivilegeRequired: boolean
}

const sidebar_menu: SidebarMenuItemType[] = [
    {
        name: 'dashboard',
        url_path: '/dashboard',
        isAdminPrivilegeRequired: false
    }, {
        name: 'My book',
        url_path: '/book',
        isAdminPrivilegeRequired: false
    }, {
        name: 'Account',
        url_path: '/account',
        isAdminPrivilegeRequired: true
    }, {
        name: 'Book Management',
        url_path: '/book_management',
        isAdminPrivilegeRequired: true
    }
]

export default async function Sidebar({sessionId}: {sessionId: number}){
    const sessionData = await getSession(sessionId)
    const username = sessionData?.username
    let userRole = 'user'
    if (username !== null || username !== undefined){
        const userInfo = await getAccountInfoByUsername(username as string)
        userRole = userInfo[0].role ?? 'user'
    }
    return (
        <div className=" flex flex-col p-3 bg-slate-500 h-screen relative">
            <div className="flex justify-center mb-2 flex-col items-center">
                <p className="text-white">Welcome</p>
                <p className="text-white uppercase">{sessionData?.username}</p>
            </div>
            {sidebar_menu.map((value) => {
                if (value.isAdminPrivilegeRequired && userRole !== 'admin'){
                    
                }
                else {
                    return (
                        <Link href={value.url_path} key={value.url_path} className="bg-white mb-2 p-1">
                            <button className="capitalize">{value.name}</button>
                        </Link>
                    )
                }
            })}
            <Link href="/logout" className="flex bg-orange-400 mt-auto justify-center"> 
                <button className="px-2 py-2" >Logout</button>
            </Link>
        </div>
    )
}