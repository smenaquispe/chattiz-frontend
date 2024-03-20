import { atom } from "nanostores"

export const profile = atom({
    name: "User",
    photo: "profile.jpg",
    email: "Default"
})

export const isOpenModal = atom(false)