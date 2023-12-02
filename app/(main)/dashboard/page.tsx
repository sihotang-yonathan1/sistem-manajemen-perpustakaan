import { cookies } from "next/headers";
import BookPreview from "./component/BookPreview";
import { redirect } from "next/navigation";

export default function DashboardPage(){
    const sessionId = cookies().get('X-SESSION-ID')?.value
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