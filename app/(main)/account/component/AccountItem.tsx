"use client"

export function AccountPreviewContainer({role, children}: {role: string, children: React.ReactNode}){
    return (
        <div className="relative flex-1 flex">
            {role === 'admin' 
            ? 
                <div className="bg-green-200 px-2 py-3 flex-grow">
                    {children}
                </div>
            : 
                <div className="px-2 py-3 bg-blue-200 flex-grow">
                    {children}
                </div>
            }
            <div className="flex flex-col p-2 justify-center items-center bg-cyan-300">
                <button className="bg-orange-300 p-1 my-1">Update</button>
                <button className="bg-red-500 p-1">Delete</button>
            </div>
        </div>
    )
}

export default function AccountPreviewItem({username, role}: {username: string, role: string}){
    return (
        <>

            <AccountPreviewContainer role={role}>
                <p className="font-semibold">{username}</p>
                <p className="text-xs">{role}</p>
            </AccountPreviewContainer>
        </>

    )
}