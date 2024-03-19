
export function Contact({name, img, message, lastDate}) {
  return (

    <div>
        <div className="flex items-center p-4 space-x-4 border-rounded-lg hover:bg-gray-100 cursor-pointer w-full">
            <img src={img} alt="profile" className="w-12 h-12 rounded-full" />
            <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-500">{message}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-gray-500">{lastDate}</p>
            </div>
        </div>

    </div>

    )
    
}