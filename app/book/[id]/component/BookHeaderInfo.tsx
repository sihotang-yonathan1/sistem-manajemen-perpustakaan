"use client"

import { useState } from "react";
import PinjamButton from "./PinjamButton";

type BookInfoType = {
    title: string | null;
    id: number;
    description: string | null;
} | null

type UserInfoType = [] | {
    id: number;
    username: string;
    role: string;
}[]

type BookInfoByUserId = {
    title: string | null;
    description: string | null;
    peminjaman: {
        id: number;
    }[];
    id: number;
} | null

type TempBookInfotype = {
    title: string,
    description: string | null
}

export default function BookHeaderInfo({bookInfo, userInfo, bookInfoByUserId}: {bookInfo: BookInfoType, userInfo: UserInfoType, bookInfoByUserId: BookInfoByUserId}){
    const [tempBookInfo, setTempBookInfo] = useState<TempBookInfotype>({
        title: bookInfo?.title ?? "",
        description: bookInfo?.description ?? null
    })

    const [isEditMode, setEditMode] = useState(false)

    function handleInputElement(event: React.ChangeEvent<HTMLInputElement>){
        setTempBookInfo(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div className="flex flex-col">
            {isEditMode 
                ? <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={tempBookInfo.title}
                    className="border p-2 font-semibold"
                    onChange={handleInputElement}/>
                : <p 
                    className="font-semibold text-lg"
                >{tempBookInfo.title}</p>
            }
            {   isEditMode
                ? <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    value={tempBookInfo.description ?? ""}
                    className="my-1 border p-2"
                    placeholder="Book description"
                    onChange={handleInputElement}/>
                : <p>{tempBookInfo.description}</p>
            }

            <div className="flex items-center">
                <div className="mx-2">
                    <PinjamButton 
                        bookId={Number(bookInfo?.id)} 
                        userId={Number(userInfo[0].id)} 
                        isPinjam={(
                            bookInfoByUserId?.peminjaman.length !== undefined 
                                ? bookInfoByUserId?.peminjaman.length > 0 
                                : false) 
                            ?? false} 
                        />
                </div>
                {
                    (userInfo[0].role === 'admin') 
                    && <div className="mx-2">
                            <button 
                                className="bg-green-200 p-2 mt-2"
                                onClick={() => isEditMode ? setEditMode(false): setEditMode(true)}
                            >{isEditMode ? 'Ok': 'Edit'}</button>
                        </div>
                }
            </div>
        </div>
    )
}