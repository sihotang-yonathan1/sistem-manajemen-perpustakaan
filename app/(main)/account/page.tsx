import { getAllAccountInfo } from "@/app/api/v1/account/account"
import AccountPreviewItem from "./component/AccountItem"
import AccountBottomContainer from "./component/AccountBottomContainer"
import AccountList from "./component/AccountList"

export default async function AccountManagementPage(){
    const users = await getAllAccountInfo()
    return (
        <>
            <div className="relative flex flex-grow flex-col">
                <AccountList users={users}/>
            </div>
        </>
    )
}