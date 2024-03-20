import { useState } from "react";
import { ButtonWithSvg } from "../components/ButtonWithSvg";
import { SETTINGS, PROFILE, LOGOUT } from "../constants/consts";

export function Modal() {

    const [view, setView] = useState(SETTINGS);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg flex w-[800px] h-[350px]">
                <div className="w-1/5 pr-4 border-r-2 border-gray-200">
                    <ul className="h-full flex flex-col items-center justify-center">
                        <ButtonWithSvg svgName={SETTINGS} setView={setView} />
                        <ButtonWithSvg svgName={PROFILE} setView={setView}  />
                        <ButtonWithSvg svgName={LOGOUT}  setView={setView}  />
                    </ul>
                </div>
                {
                    view === SETTINGS && <div className="w-4/5 ml-4">
                        <h2>Settings</h2>
                        <p>Dark mode: <span>On</span></p>
                        <p>Notifications: <span>On</span></p>
                    </div>
                }
                {
                    view === PROFILE && <div className="w-4/5 ml-4">
                        <h2>Profile</h2>
                        <p>Username: <span>John Doe</span></p>
                        <p>Email: <span> johndoegmail.com</span></p>
                    </div>
                }
                {
                    view === LOGOUT && <div className="w-4/5 ml-4">
                        <h2>Logout</h2>
                        <p>Are you sure you want to logout?</p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Yes</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-4">No</button>
                    </div>
                }
            </div>
        </div>
    );
}