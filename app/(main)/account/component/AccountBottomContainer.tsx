"use client"

import { useState } from "react"
import AccountItemAddDialog from "./AccountItemAddDialog"

export default function AccountBottomContainer({handleAddAccount}: {handleAddAccount: (username: string, role: string | null) => void}){
    const [isModalOpen, setModalOpen] = useState(false)

    function handleModalOpen(value: boolean){
        setModalOpen(value)
    }
    return (
        <>
            {
                isModalOpen && <AccountItemAddDialog setModalOpen={handleModalOpen} handleAddAccount={handleAddAccount}/>
            }
            <div className="absolute bottom-0 right-0 m-2">
                <button className="bg-sky-300 px-[0.6rem] py-1 rounded-full" onClick={() => setModalOpen(true)}>+</button>
            </div>
        </>
    )
}