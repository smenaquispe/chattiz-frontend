import { IncomingMessage } from "./IncomingMessage"
import { MyMessage } from "./MyMessage"

const parseMessages = (messages) => {
    

    messages = messages.map((message, index) => {
        
        if (index > 0) {
            if (messages[index].time === messages[index - 1].time) {
                messages[index - 1].time = null
            }
        }

        return message
    
    })

    messages = messages.map((message, index) => {
        
        if(message.mine) {
            return <MyMessage content={message.content} time={message.time} />
        } else {
            return <IncomingMessage content={message.content} time={message.time} />
        }
    
    })

    return messages
}



export function Messages({messages}) {
    return <div className="mt-10 px-2">
        {
            parseMessages(messages).map((message, index) => message)
        }
    </div>
}