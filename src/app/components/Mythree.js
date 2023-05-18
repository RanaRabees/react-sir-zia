"use client"

import { useState } from 'react';

export default function Mythree() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Rabees Hussain</h2><br />
            <Panel
                title="About Me"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                👻: * Rana Muhammad Rabees Hussain * :<br />
                I am full stack MERN MEAN REACT Native Windows Mac<br />
            </Panel>
            <Panel
                title=""
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                👻: * Rana Muhammad Rabees Hussain * :<br />
                I am full stack MERN MEAN REACT Native Windows Mac<br />
                WEB APP ANDROID IOS Games(2D 3D Unity & Core)<br />
                & Blockchain Metaverse developer.<br />
            </Panel><br />
        </>
    );
}

function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className="panel">
            <h3>{title}</h3><br />
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    More...
                </button>
            )}
        </section>
    );
}
