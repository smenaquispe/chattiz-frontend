import { ListContacts } from "../components/ListContacts"

export function SideBar() {
    return (
        <div
            className="bg-red-100 flex-grow-3 w-1/4"
        >
            <ListContacts />
        </div>
    )
}