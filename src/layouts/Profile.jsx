import { PhotoContainer } from "../components/PhotoContainer"

export function Profile() {
    return (
        <div className="w-4/5 ml-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-600" >Profile</h2>
            
            <div className="flex justify-center">

                <div className="w-1/2 flex justify-center">
                    <PhotoContainer pathPhoto={"profile.jpg"} />
                </div>

                <div className="w-1/2 pl-10 border-l-2 border-gray-200">
                    <p className="font-bold">Username: </p> <span>John Doe</span>
                    <p className="font-bold">Email: </p> <span> johndoegmail.com</span>
                </div>


            </div>
            
        </div>
    )
}