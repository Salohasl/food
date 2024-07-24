import React, { useState } from 'react';
import Roulette from './Roulette.jsx';

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
                    <button onClick={handleClick}>Попроще и побыстрее</button>
                    <button onClick={handleClick}>Настроение "Поваренок"</button>
                    <button onClick={handleClick}>Режим "Здоровое питание"</button>
                    <button onClick={handleClick}>Сегодня только доставка</button>
                    <button onClick={handleClick}>Хочется праздника</button>
                    <button onClick={handleClick}>Не пойму, чего хочется</button>
                </>
            )}
            {roulette && <Roulette />}
        </div>
    );
}
