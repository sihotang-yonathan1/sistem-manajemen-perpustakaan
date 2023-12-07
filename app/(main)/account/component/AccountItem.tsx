"use client"

import { useState } from "react"

export default function AccountPreviewItem({username, role}: {username: string, role: string}){
    const [accountInfo, setAccountInfo] = useState({
        'username': username,
        'role': role,
    })

    const [isEditMode, setEditMode] = useState(false)

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        setAccountInfo(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>){
        setAccountInfo(prev => ({...prev, role: event.target.value}))
    }

    return (
        <>
            <div className="relative flex-1 flex">
                <div className="px-2 py-3 bg-blue-200 flex-grow">
                    
                    {   isEditMode
                        ? <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            value={accountInfo.username}
                            onChange={handleInput}
                            />
                        : <p className="font-semibold">{accountInfo.username}</p>
                    }
                    {   isEditMode
                        ? <div className="mt-2">
                            <label>Role: </label>
                            <select name="role" onChange={handleSelect} defaultValue={accountInfo.role}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div> 
                        : <p className="text-xs">{accountInfo.role}</p>
                    }
                    
                </div>
            <div className="flex flex-col p-2 justify-center items-center bg-cyan-300">
                { isEditMode
                    ? <button className="bg-orange-300 p-1 my-1" onClick={() => setEditMode(false)}>Ok</button>
                    : <button className="bg-orange-300 p-1 my-1" onClick={() => {setEditMode(true)}}>Update</button>
                }
                <button className="bg-red-500 p-1">Delete</button>
            </div>
        </div>
        </>

    )
}