"use client";

import { useEffect, useState } from "react";

export const ChristmasLights = () => {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setFrame((prev) => (prev + 1) % 2);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const colors = [
        { main: "#ff3030", glow: "#ff6060" }, // Red
        { main: "#30ff30", glow: "#60ff60" }, // Green
        { main: "#3060ff", glow: "#6090ff" }, // Blue
        { main: "#ffaa00", glow: "#ffc040" }, // Orange
        { main: "#ff30ff", glow: "#ff60ff" }, // Pink
        { main: "#ffff30", glow: "#ffff60" }, // Yellow
    ];

    return (
        <div className="absolute top-0 left-0 right-0 z-50  pointer-events-none max-w-155 mx-auto">
            {/*<div className="w-full h-0.5 bg-neutral-70000 mb-1" />*/}
            <div className="flex justify-between  px-2">
                {[...Array(12)].map((_, i) => {
                    const colorIndex = i % colors.length;
                    const isOn = (i + frame) % 2 === 0;
                    const color = colors[colorIndex];

                    return (
                        <div
                            key={i}
                            className="w-4 h-4 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: isOn ? color.main : "#2a2a2a",
                                boxShadow: isOn ? `0 0 12px 3px ${color.glow}, 0 0 20px 5px ${color.main}40` : "none",
                                opacity: isOn ? 1 : 0.6,
                                border: isOn ? `1px solid ${color.glow}` : "1px solid #1a1a1a",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};
