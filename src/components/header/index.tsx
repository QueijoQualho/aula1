import React from "react";

interface HeaderProps {
    title?: string;
    textColor?: string;
    bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "default", textColor = "#000", bgColor = "#fff" }: HeaderProps) => {

    const myStyle = {
        backgroundColor: bgColor,
        color: textColor
    };

    return (
        <header style={myStyle}>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Header;
