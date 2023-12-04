import { getAllAccountInfo } from "@/app/api/v1/account/account"
import AccountPreviewItem from "./component/AccountItem"

export default async function AccountManagementPage(){
    const users = await getAllAccountInfo()
    return (
        <>
            <div>
                {users.map((value, index) => (
                    <div key={value.id} className="p-2">
                        <AccountPreviewItem username={value.username} role={value.role ?? "user"} />
                    </div>    
                ))}
            </div>
        </>
    )
}