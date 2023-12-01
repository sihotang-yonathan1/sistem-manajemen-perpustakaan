export default function LoginPage(){
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
                    />

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="m-2 py-1 px-2"
                        />
                    </div>
                </div>
                <div className="m-1 flex justify-center">
                    <button className="bg-sky-400 p-1 font-semibold">Login</button>
                </div>
            </div>
        </div>
    )
}