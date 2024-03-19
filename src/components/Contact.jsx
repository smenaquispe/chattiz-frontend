import { MessageStatus } from "./MessageStatus"
import { MESSAGE_READ, MESSAGE_RECIEVED, MESSAGE_SENT } from "../constants/consts"

export function Contact({name, img, message, lastDate}) {
  return (

    <div>
        <div className="flex items-center p-4 space-x-12 border-rounded-lg hover:bg-purple-300 cursor-pointer w-full transition duration-150 ease-in">
            <div className="flex w-full ">
                <img src={img} alt="profile" className="w-12 h-12 rounded-full" />
                <div className="ml-3">
                    <h2 className="text-lg font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis truncate max-w-[150px]">{name}</h2>
                    <p className="text-sm text-gray-500">{message}</p>
                </div>
            </div>
            <div className="flex flex-col items-end ml-auto">
                <p className="text-sm text-gray-500">{lastDate}</p>
                <MessageStatus status={MESSAGE_READ} />
            </div>
        </div>

    </div>

    )
    
}