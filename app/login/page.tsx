"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

type loginInfo = {
    'username': string,
    'password': string
}

export default function LoginPage(){
    const [loginInfo, setLoginInfo] = useState<loginInfo>({
        'username': '',
        'password': ''
    })
    const router = useRouter()

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        setLoginInfo(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    function handleLogin(){
        const loginFunction = async () => {
            let response = await fetch(`http://localhost:3000/api/v1/auth`, {
                method: "POST",
                body: JSON.stringify({
                    'username': loginInfo.username,
                    'password': loginInfo.password
                })
            })
            if (response.ok){
                console.log(await response.json())
            }
            router.replace('/dashboard')
        }
        loginFunction()
    }
    return (
        <div className="flex flex-col bg-slate-400 h-screen justify-center">
            <div className="self-center bg-slate-200 p-2">
                <div className="flex justify-center p-1">
                    <p className="font-semibold">Login</p>
                </div>
                <div className="flex flex-col">
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="username"
                        className="m-2 py-1 px-2"
                        onChange={handleInput}
                    />

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="m-2 py-1 px-2"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="m-1 flex justify-center">
                    <button 
                        className="bg-sky-400 p-1 font-semibold" 
                        onClick={handleLogin}
                    >Login</button>
                </div>
            </div>
        </div>
    )
}