import { ChatBar } from "../components/ChatBar";
import { Messages } from "../components/Messages";

export function ChatArea() {
  
  const messages = [
    {
      mine: true,
      content: "Hello, how are you?",
      time: "12:00"
    },
    {
      mine: false,
      content: "I'm fine, thank you.",
      time: "12:01"
    },
    {
      mine: true,
      content: "What are you doing?",
      time: "12:02"
    },
    {
      mine: false,
      content: "I'm studying.",
      time: "12:03"
    },
    {
      mine: false,
      content: "And you?",
      time: "12:03"
    },
    {
      mine: false,
      content: "What are you doing?",
      time: "12:03"
    }
  ]
  
  
  return (
    <div
        className="bg-gray-100 flex-grow-1 w-3/4"
    
    >

      <Messages messages={messages} />
      <ChatBar />

    </div>
  );
}