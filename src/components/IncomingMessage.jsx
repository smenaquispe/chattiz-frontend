export function IncomingMessage({content, time}) {
    return (
        <div
            className="flex flex-col items-start"
        >
            <div
                className="bg-white text-gray-800 p-2 rounded-lg mx-2 mb-1 rounded-tl-none"
            >
                {content}
            </div>
            {
                time &&
                <div
                    className="text-xs text-gray-500 mx-2 mb-1"
                >
                    {time}
                </div>
            }
        </div>
    )
}