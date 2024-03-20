import { useState } from "react";
import { ButtonWithSvg } from "../components/ButtonWithSvg";
import { SETTINGS, PROFILE, LOGOUT } from "../constants/consts";
import { Settings } from "./Settings";
import { Profile } from "./Profile";
import { Logout } from "./Logout";
import { useStore } from "@nanostores/react";
import { isOpenModal } from "../provider/store";

export function Modal() {

    const [view, setView] = useState(SETTINGS);
    const isOpen = useStore(isOpenModal)


    function closeModal() {
        isOpenModal.set(false)
    }

    function handleModalClick(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the outer div
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div className="bg-white p-8 rounded-lg shadow-lg flex w-[800px] h-[350px]" onClick={handleModalClick}>
                <div className="w-1/5 pr-4 border-r-2 border-gray-200">
                    <ul className="h-full flex flex-col items-center justify-center">
                        <ButtonWithSvg svgName={SETTINGS} setView={setView} />
                        <ButtonWithSvg svgName={PROFILE} setView={setView}  />
                        <ButtonWithSvg svgName={LOGOUT}  setView={setView}  />
                    </ul>
                </div>
                <div className="w-4/5">
                    <div className="flex flex-col items-end">
                        <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
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
        </div>
    );
}