/* Author: Tor Sdayur */

import { useState } from 'react';
import '../styles/DistPicker.css'

export default function DistPicker({onKeyDown})
{
    const [input, setInput] = useState('');

    function onChange(currInput, setInput) {
        let inputtedLetter = currInput.slice(-1);
        let validLetters = "0123456789."
    
        currInput = validLetters.includes(inputtedLetter) ? currInput : currInput.slice(0, -1);
        setInput(currInput);
    }

    return (
        <input
            id="dist-field"
            type="text"
            value={input}
            placeholder='Enter distance (miles)'
            onChange={(e) => onChange(e.target.value, setInput)}
            onKeyDown={(e) => onKeyDown(e.key, input)}
        >
        </input>
    );
}