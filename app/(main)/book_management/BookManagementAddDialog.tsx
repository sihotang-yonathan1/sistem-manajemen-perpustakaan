"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type TempBookInfoType = {
    'title': string,
    'description': string | null
}

export default function BookManagementAddDialog({handleModalOpen}: {handleModalOpen: (isOpen: boolean) => void}){
    const [tempBookInfo, setTempBookInfo] = useState<TempBookInfoType>({
        title: '',
        description: null
    })

    // TODO: use more elegant solution without 
    // full rerender using router.refresh()
    const router = useRouter()

    function handleInputElement(event: React.ChangeEvent<HTMLInputElement>){
        setTempBookInfo(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function handleAddBook(){
        const addBookFunction = async () => {
            // set new data in book table
            await fetch(`http://localhost:3000/api/v1/book`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    'title': tempBookInfo.title,
                    'description': tempBookInfo.description
                })
            })

            // TODO: set data in user_book table
            
        }
        addBookFunction()
        router.refresh()
    }

    useEffect(() => {
        setTempBookInfo(tempBookInfo)
    }, [tempBookInfo])

    return (
        <div className="absolute top-1/4 left-1/4 right-1/4 flex justify-center bg-orange-300">
            <div className="flex flex-col items-center p-2">
                <p className="font-semibold">Add Book</p>
                <div className="my-2">
                    <input 
                        type="text" 
                        name="title" 
                        id="book_title" 
                        placeholder="Book Name"
                        className="p-2"
                        onChange={handleInputElement}/>
                </div>
                <div className="mb-2">
                    <input 
                        type="text" 
                        name="description" 
                        id="book_description" 
                        placeholder="Book Description"
                        className="p-2"
                        onChange={handleInputElement}/>
                </div>
                <div className="flex justify-around w-full">
                    <button className="p-2 bg-sky-400" onClick={
                        _ => {
                            handleAddBook()
                            handleModalOpen(false)
                        }
                    }>Add</button>
                    <button 
                        className="p-2 bg-red-500"
                        onClick={() => handleModalOpen(false)}
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}