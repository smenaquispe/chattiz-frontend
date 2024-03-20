import { useState } from "react"
import { Switch } from "../components/Switch"

export function Settings() {


    const [darkMode, setDarkMode] = useState(false)
    const [notifications, setNotifications] = useState(true)


    return (
        <div className="w-4/5 ml-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-600" >Settings</h2>
            <Switch title="Dark Mode: " state={darkMode} setState={setDarkMode} key={"dark-mode-switch"} />
            <Switch title="Notifications: " state={notifications} setState={setNotifications} key={"notification-switch"} />
        </div>
    )
}