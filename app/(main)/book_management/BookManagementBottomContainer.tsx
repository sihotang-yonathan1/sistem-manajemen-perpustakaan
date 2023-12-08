"use client"

import { useState } from "react"
import BookManagementAddDialog from "./BookManagementAddDialog"

export default function BookManagementBottomContainer(){
    const [isModalOpen, setModalOpen] = useState(false)

    function handleModalOpen(isOpen: boolean){
        setModalOpen(_ => isOpen)
    }

    return (
        <>  
            <div className="fixed bottom-0 right-0 m-2 bg-sky-400 rounded-full px-4 py-2">
                <button onClick={() => setModalOpen(true)}>+</button>
            </div>
            {
                isModalOpen && <BookManagementAddDialog handleModalOpen={handleModalOpen}/>
            }
        </>
    )
}