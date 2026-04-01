// CustomCursor.jsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateCursorType = (event) => {
            const target = event.target;
            const isPointerElement =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isPointerElement);
        };

        const hideCursor = () => setIsHidden(true);
        const showCursor = () => setIsHidden(false);

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseover', updateCursorType);
        document.addEventListener('mouseenter', showCursor);
        document.addEventListener('mouseleave', hideCursor);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseover', updateCursorType);
            document.removeEventListener('mouseenter', showCursor);
            document.removeEventListener('mouseleave', hideCursor);
            document.body.style.cursor = 'default';
        };
    }, []);

    if (isHidden) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            {/* Main cursor - similar to screenshot style */}
            <div
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out ${isPointer ? 'scale-75 opacity-70' : 'scale-100 opacity-100'
                    }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                {/* Outer circle with border */}
                <div className="w-8 h-8 border-2 border-white rounded-full shadow-lg"></div>

                {/* Inner dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
            </div>

            {/* Optional: Pulse animation effect */}
            <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                <div className="w-6 h-6 border border-white rounded-full opacity-30 animate-ping"></div>
            </div>
        </div>
    );
};

export default CustomCursor;