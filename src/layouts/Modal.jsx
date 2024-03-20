import { useState } from "react";
import { ButtonWithSvg } from "../components/ButtonWithSvg";
import { SETTINGS, PROFILE, LOGOUT } from "../constants/consts";
import { Settings } from "./Settings";
import { Profile } from "./Profile";
import { Logout } from "./Logout";

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
                    view === SETTINGS && <Settings />
                }
                {
                    view === PROFILE && <Profile />
                }
                {
                    view === LOGOUT && <Logout />
                }
            </div>
        </div>
    );
}