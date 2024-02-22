import React from "react";

export default function AlertButton ({message, children}) {
    const handleClick = () => {
        alert(message);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>        
);};