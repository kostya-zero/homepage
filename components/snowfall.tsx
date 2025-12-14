"use client";
import { Snowfall as ReactSnowfall } from "react-snowfall";

export default function Snowfall() {
    return (
        <ReactSnowfall
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
            }}
        />
    );
}
