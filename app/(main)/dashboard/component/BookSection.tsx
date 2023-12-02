export default function BookSection({title, children}: {title: string, children: React.ReactNode}){
    return (
        <div className="bg-slate-200">
            <div className="p-2">
                <p className="font-semibold">{title}</p>
            </div>
            <div className="overflow-x-auto flex">
                {children}
            </div>
        </div>
    )
}