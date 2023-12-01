export default function MainLayout({children}: {children: React.ReactNode}){
    return (
        <div>
            <p>Layout</p>
            {children}
        </div>
    )
}