import { getAllAccountInfo } from "@/app/api/v1/account/account"

export default async function AccountManagementPage(){
    const users = await getAllAccountInfo()
    return (
        <>
            <div>
                {users.map((value, index) => (
                    <div key={value.id} className="p-2">
                        {   value.role === 'admin'
                            ? <div className="bg-green-200 px-2 py-3">
                                <p className="font-semibold">{value.username}</p>
                                <p className="text-xs">{value.role}</p>
                              </div>
                            : <div className="px-2 py-3 bg-blue-200">
                                <p className="font-semibold">{value.username}</p>
                                <p className="text-xs">{value.role}</p>
                              </div>

                        }
                    </div>    
                ))}
            </div>
        </>
    )
}