import BookManagementBottomContainer from "./BookManagementBottomContainer";
import BookManagementContentContainer from "./BookManagementContentContainer";

export default function BookManagementPage(){
    return (
        <div className="relative flex flex-col flex-grow">
            <div className="flex bg-slate-400 p-2 justify-center">
                <p className="font-bold">Book Management</p>
            </div>
            <BookManagementContentContainer />
            <BookManagementBottomContainer />
        </div>
    )
}