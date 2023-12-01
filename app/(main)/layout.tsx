import Sidebar from "./Sidebar";

export default function MainLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}