"use client"
import React, { Dispatch, SetStateAction, useState } from "react";

export default function AccountItemAddDialog({setModalOpen, handleAddAccount}: {setModalOpen: (value: boolean)=>void, handleAddAccount: (username: string, password: string, role: string | null) => void}){
    const [tempInfo, setTempInfo] = useState({
        'username': '',
        'password': '',
        'role': 'user'
    })
    function handleOpenDialog(state: boolean){
        setModalOpen(state)
    }

    function handleUsernameInput(event: React.ChangeEvent<HTMLInputElement>){
        setTempInfo(prev => ({
            ...prev,
            username: event.target.value
        }))
    }

    function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>){
        setTempInfo(prev => ({
            ...prev,
            password: event.target.value
        }))
    }

    function handleRoleInput(event: React.ChangeEvent<HTMLSelectElement>){
        setTempInfo(prev => ({
            ...prev,
            'role': event.target.value
        }))
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
                                name="username" 
                                id="username_add" 
                                placeholder="username"
                                className="px-2 py-1"
                                onChange={handleUsernameInput}/>
                        </div>
                        <div className="my-2">
                            <input 
                                type="password" 
                                name="password" 
                                id="password_add" 
                                placeholder="password"
                                className="px-2 py-1"
                                onChange={handlePasswordInput}
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="user_role_add" className="pr-4">Role</label>
                            <select className="p-2" id="user_role_add" onChange={handleRoleInput}>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="m-2 bg-sky-300 p-2 rounded" onClick={e => handleAddAccount(tempInfo.username, tempInfo.password, tempInfo.role)}>Add</button>
                        <button className="m-2 bg-red-500 p-2 rounded" onClick={e => handleOpenDialog(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}