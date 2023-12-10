"use client"

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

type BookType = { 
    title: string | null;
    description: string | null;
    author: string | null;
    imageUrl: string | null;
    id: number;
}


export function SearchResult({bookData}: {bookData: BookType}){
    return (
        <Link href={`/book/${bookData.id}`} className="border-b bg-white p-2 w-full hover:bg-slate-300">
            <p>{bookData.title}</p>
        </Link>
    )
}


export default function BookSearch({allBooks}: {allBooks: BookType[]}){
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [tempSearchResult, setTempSearchResult] = useState<BookType[]>([])

    const filteredList = (query: string) => allBooks.filter(value => value.title?.toLowerCase() === query.toLowerCase())

    useEffect(() =>{
        // console.log(searchQuery)
        // console.log(filteredList(searchQuery))
        setTempSearchResult(filteredList(searchQuery))
    }, [searchQuery])

    function handleSearch(event: ChangeEvent<HTMLInputElement>){
        setSearchQuery(event.target.value)
    }

    return (
        <div className="relative">
            <input 
                type="text" 
                name="search_input" 
                className="border rounded px-2 mx-2 py-1 peer"
                id="search_input" 
                placeholder="Search book here"
                onChange={handleSearch}/>
            <div className="absolute flex flex-col mx-2 bg-slate-100 peer-placeholder-shown:invisible">
                {   tempSearchResult.length > 0 
                    ?
                        tempSearchResult.map(
                            (value) => <SearchResult bookData={value} key={value.id}/>
                        )
                    :
                        allBooks.map(value => <SearchResult bookData={value} key={value.id}/>)
                }
            </div>
        </div>
    )
}