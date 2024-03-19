export function MyMessage({content, time}) {
    return (
        <div
            className="flex flex-col items-end"
        >
            <div
                className="bg-purple-500 text-white p-2 rounded-lg mx-2 mb-1 rounded-tr-none"
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