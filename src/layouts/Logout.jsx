export function Logout() {
    return (
        <div className="w-4/5 ml-4">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Yes</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-4">No</button>
        </div>
    )
}