import { MESSAGE_RECIEVED, MESSAGE_SENT, MESSAGE_READ } from "../constants/consts";

const messageRecieved = (numberMessages) => {
    return (
        <div className="bg-purple-500 w-5 h-4 rounded-full ml-auto mt-2 text-white text-center text-xs">{numberMessages}
        </div>
    )
}


const messageSent = () => {
    return (
        <>
            <img src="checkmark.svg" alt="checkmark" className="w-5 h-4 ml-auto mt-2 text-xs" />
        </>
    )
}

const messageRead = () => {
    return (
        <>
            <img src="checkmarkread.svg" alt="checkmark" className="w-5 h-4 ml-auto mt-2 text-xs" />
        </>
    )
}

export function MessageStatus({ status, numberMessages }) {

    if (status === MESSAGE_RECIEVED) {
        return messageRecieved(numberMessages);
    } else if (status === MESSAGE_SENT) {
        return messageSent();
    } else if (status === MESSAGE_READ) {
        return messageRead();
    }
}