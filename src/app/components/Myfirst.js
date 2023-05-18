"use client"

import { useState } from 'react';

export default function Myfirst() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Bro Enter Your Text!');
    if (isSent) {
        return <h1>Yahoo Welcome In My Website Welcome Welcome 😁😁 Please 😊😊 !</h1>
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}

function sendMessage(message) {
    // ...
}


