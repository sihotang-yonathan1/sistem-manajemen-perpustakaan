"use client"

import { useEffect, useState } from "react";
import AccountPreviewItem from "./AccountItem";
import AccountBottomContainer from "./AccountBottomContainer";

export default function AccountList({users}: {users: {id: number, username: string, role: string | null}[]}){
    const [tempList, setTempList] = useState(users)
    const [accountList, setAccountList] = useState(tempList)

    function handleUpdateAccount(updatedAccount: {username: string, role: string | null}){
        let newAccountList: {id: number, username: string, role: string | null}[] = []
        for (let account of tempList){
            if (account.username === updatedAccount.username){
                newAccountList.push({
                    id: account.id,
                    username: updatedAccount.username,
                    role: updatedAccount.role
                })
            }
            else {
                newAccountList.push(account)
            }
        }
        setAccountList(_ => newAccountList)
    }

    function handleDeleteAccount(username: string){
        let newAccountList: {
            id: number, 
            username: string, 
            role: string | null
        }[] = []
        newAccountList = tempList.filter(value => value.username != username)
        setAccountList(_ => newAccountList)
    }

    function handleAddAccount(username: string, role: string | null){
        // console.log(username)
        // console.log(role)
        accountList.push({
            id: accountList.length,
            username: username,
            role: role
        })
        setAccountList(accountList)
    }

    useEffect(() => {
        console.log(accountList)
        console.log("Account list changed")
    }, [accountList])

    return (
        <div>
            {accountList.map((value, _) => (
                <div key={value.id} className="p-2">
                    <AccountPreviewItem 
                        username={value.username} 
                        role={value.role ?? "user"} 
                        updateFunction={handleUpdateAccount} 
                        handleDelete={handleDeleteAccount}/>
                </div>    
            ))}
            <AccountBottomContainer handleAddAccount={handleAddAccount}/>
        </div>
    )
}