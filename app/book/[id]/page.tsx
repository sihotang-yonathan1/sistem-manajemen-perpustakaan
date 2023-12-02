export default function IndividualBookPage({params}: {params: {id: number}}){
    return (
        <div>
            <p>Hello from Book page: {params.id}</p>
        </div>
    )
}