import { useState } from "react";

export function PhotoContainer({ pathPhoto }) {
    
    const [hover, setHover] = useState(false)
    
    return (
      <div className="relative w-[200px] h-[200px]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}  
      >
        <img
          src={pathPhoto}
          alt="photo"
          className="w-full h-full object-cover rounded-full"
        />

        {
            hover &&
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
            <div className="text-white text-center">
                <p>Cambiar</p>
            </div>
            </div>
        }
      </div>
    );
  }
  