import React, { useState, useEffect } from 'react';

const Reset = () => {
    const [username, setUsername] = useState('timoteayang')

    const handleClick = () => {
        const newUsername = prompt(('whats ya name'))
        setUsername(newUsername)
    }

    return(
        <>
            <div>{username}</div>
            <button onClick={handleClick}>Reset Study</button>
        </>
    )
}

export default Reset;