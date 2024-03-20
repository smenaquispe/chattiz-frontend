import { ButtonWithSvg } from "../components/ButtonWithSvg";

export function Modal() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg flex w-[800px] h-[350px]">
                <div className="w-1/5 border-r-2 border-gray-200">
                    <ul className="h-full flex flex-col items-center justify-center">
                        <ButtonWithSvg svgName={"settings"} />
                        <ButtonWithSvg svgName={"profile"} />
                        <ButtonWithSvg svgName={"logout"} />
                    </ul>
                </div>
                <div className="w-4/5 ml-4">
                    <h2>Profile</h2>
                    <p>Username: <span>John Doe</span></p>
                    <p>Email: <span> johndoegmail.com</span></p>
                </div>
            </div>
        </div>
    );
}