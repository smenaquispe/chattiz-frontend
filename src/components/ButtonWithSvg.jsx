import { useState } from "react"

export function ButtonWithSvg({svgName, setView, view}) {

    const [svg, setSvg] = useState(svgName);

    return (
        <button className={`h-1/3 flex flex-col justify-center w-full items-center hover:bg-purple-500 transition duration-150 ease-in-out rounded-md ${view === svgName ? 'bg-gray-200 text-white' : 'text-gray-500'}`}
            onMouseEnter={() => setSvg(`${svgName}-hover`)}
            onMouseLeave={() => setSvg(`${svgName}`)}
            onClick={() => setView(svgName)}
        >
            <img src={`${svg}.svg`} alt="settings" className="w-8 h-8" />
        </button>
    )
}