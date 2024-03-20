export function Logout() {
    return (
        <div className="w-4/5 ml-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-600" >Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Yes</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-4">No</button>
        </div>
    )
}