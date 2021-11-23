import React from "react";
import Contact from "./Contact";
import Info from "./Info";

export default function MainContent(){
    return (
        <div className="main">
            <Contact />
            <Info />
        </div>
    );
}