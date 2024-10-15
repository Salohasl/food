import React, { useState } from 'react';
import {Link} from "react-router-dom";

export function Button() {
    const [roulette, setRoulette] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);

    function handleClick() {
        setRoulette(!roulette);
        setButtonsVisible(false);
    }

    return (
        <div className="product-button">
            {buttonsVisible && (
                <>
                    <Link to="/products">
                        <button onClick={handleClick}>Завтрак</button>
                    </Link>
                    <button onClick={handleClick}>Обед</button>
                    <button onClick={handleClick}>Ужин</button>
                    <button onClick={handleClick}>Сегодня только доставка</button>
                    <button onClick={handleClick}>Хочется праздника</button>
                    <button onClick={handleClick}>Не пойму, чего хочется</button>
                </>
            )}
        </div>
    );
}
