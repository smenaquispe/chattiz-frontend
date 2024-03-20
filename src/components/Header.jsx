import { useStore } from "@nanostores/react"
import { profile, isOpenModal } from "../provider/store"

export function Header() {

    const { photo } = useStore(profile)

    function openModal() {
        isOpenModal.set(true)
    }

    return (
        <header
            className="flex justify-between items-center"
        >
            <h1 className="text-2xl font-semibold p-4">Chats</h1>
            <img src={photo} alt="Profile" className="w-10 h-10 rounded-full mr-4 hover:border-2 hover:border-purple-500 transition duration-300 ease-in-out" onClick={openModal} />
        </header>
    )
}