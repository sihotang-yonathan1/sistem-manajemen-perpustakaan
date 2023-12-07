"use client"
import { Dispatch, SetStateAction } from "react";

export default function AccountItemAddDialog({setModalOpen}: {setModalOpen: Dispatch<SetStateAction<boolean>>}){
    
    function handleOpenDialog(state: boolean){
        setModalOpen(_ => state)
    }

    return (
        <>
            <div className="absolute left-1/4 right-1/4 top-1/4 bg-orange-200">
                <div className="flex flex-col px-2 py-1">
                    <div>
                        <p className="text-center font-bold">Add Account</p>
                    </div>
                    <div className="self-center px-1">
                        <div className="my-2">
                            <input 
                                type="text" 
                                name="username_add" 
                                id="username_add" 
                                placeholder="username"
                                className="px-2 py-1"/>
                        </div>
                        <div className="my-2">
                            <input 
                                type="password" 
                                name="password_add" 
                                id="password_add" 
                                placeholder="password"
                                className="px-2 py-1"
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="user_role_add" className="pr-4">Role</label>
                            <select className="p-2" id="user_role_add">
                                <option>user</option>
                                <option>admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="m-2 bg-sky-300 p-2 rounded">Add</button>
                        <button className="m-2 bg-red-500 p-2 rounded" onClick={e => handleOpenDialog(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}