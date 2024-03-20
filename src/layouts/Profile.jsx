import { PhotoContainer } from "../components/PhotoContainer"
import { useStore } from "@nanostores/react"
import { profile } from "../provider/store"

export function Profile() {

    const { name, photo, email } = useStore(profile)

    return (
        <div className="w-full px-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-600" >Profile</h2>
            
            <div className="flex justify-center">

                <div className="w-1/2 flex justify-center">
                    <PhotoContainer pathPhoto={photo} />
                </div>

                <div className="w-1/2 pl-10 border-l-2 border-gray-200">
                    <p className="font-bold">Username: </p> <span>{name}</span>
                    <p className="font-bold">Email: </p> <span> {email}</span>
                </div>


            </div>
            
        </div>
    )
}