import { ListContacts } from "../components/ListContacts"
import { SearchBar } from "../components/SearchBar"

export function SideBar() {
    return (
        <div
            className="bg-gray-100 flex-grow-3 w-1/4"
        >            
            <h1 className="text-2xl font-semibold p-4">Chats</h1>
            <SearchBar />
            <ListContacts />
        </div>
    )
}