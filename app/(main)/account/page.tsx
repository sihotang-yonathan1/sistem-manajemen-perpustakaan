import { getAllAccountInfo } from "@/app/api/v1/account/account"
import AccountPreviewItem from "./component/AccountItem"
import AccountBottomContainer from "./component/AccountBottomContainer"

export default async function AccountManagementPage(){
    const users = await getAllAccountInfo()
    return (
        <>
            <div className="relative flex flex-grow flex-col">
                {users.map((value, index) => (
                    <div key={value.id} className="p-2">
                        <AccountPreviewItem username={value.username} role={value.role ?? "user"} />
                    </div>    
                ))}
                <AccountBottomContainer />
            </div>
        </>
    )
}