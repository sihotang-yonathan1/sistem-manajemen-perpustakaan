export default function BookManagementPage(){
    return (
        <div className="relative flex flex-col flex-grow">
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">Book Management</p>
            </div>
            <div className="fixed bottom-0 right-0 m-2 bg-sky-400 rounded-full px-4 py-2">
                <button>+</button>
            </div>
        </div>
    )
}