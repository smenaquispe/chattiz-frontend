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
    },
    {
      mine: true,
      content: "I'm working.",
      time: "12:04"
    },
    {
      mine: false,
      content: "I'm studying.",
      time: "12:05"
    },
    {
      mine: true,
      content: "I'm working.",
      time: "12:06"
    },
    {
      mine: false,
      content: "I'm studying.",
      time: "12:07"
    },
    {
      mine: true,
      content: "I'm working.",
      time: "12:08"
    }
  ]
  
  
  return (
    <div
        className="bg-gray-100 w-3/4 overflow-y-auto h-screen flex flex-col"
    
    >

      <Messages messages={messages} />
      <ChatBar />

    </div>
  );
}