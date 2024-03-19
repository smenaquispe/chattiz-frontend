export function ChatBar() {
    return (
        <div className="fixed bottom-0 p-4 mb-5 max-width flex space-x-4" style={{width: "inherit"}}>
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition duration-200 ease-in-out"
                type="text" placeholder="Type a message..."
            />
            <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
            >
                <img src="send.svg" alt="Send" className="w-6 h-6" />
            </button>
        </div>
    );
}
