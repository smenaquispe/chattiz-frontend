import { ListContacts } from "../components/ListContacts"
import { SearchBar } from "../components/SearchBar"
import { Header } from "../components/Header"

export function SideBar() {
    return (
        <div
            className="bg-gray-100 flex-grow-3 w-1/4 h-screen overflow-y-auto flex flex-col"
        >           
            <Header /> 
            <SearchBar />
            <ListContacts />
        </div>
    )
}