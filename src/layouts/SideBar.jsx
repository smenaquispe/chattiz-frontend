import { ListContacts } from "../components/ListContacts"

export function SideBar() {
    return (
        <div
            className="bg-red-100 flex-grow-3 w-2/5"
        >
            <ListContacts />
        </div>
    )
}