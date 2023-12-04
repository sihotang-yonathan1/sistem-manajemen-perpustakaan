export default async function AccountManagementLayout({children}: {children: React.ReactNode}){
    return (
        <>
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">Account Management</p>
            </div>
            {children}
        </>

    )
}