import Sidebar from "./Sidebar";

export default function MainLayout({children}: {children: React.ReactNode}){
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                {children}
            </div>
        </div>
    )
}