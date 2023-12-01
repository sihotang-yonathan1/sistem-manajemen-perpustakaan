import { cookies } from "next/headers";
import Sidebar from "./Sidebar";

export default function MainLayout({children}: {children: React.ReactNode}){
    const sessionId = cookies().get('X-SESSION-ID')?.value
    return (
        <div className="flex">
            <Sidebar sessionId={Number(sessionId)}/>
            <div className="flex flex-col flex-grow">
                {children}
            </div>
        </div>
    )
}