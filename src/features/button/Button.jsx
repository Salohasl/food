import React, {useState} from 'react';
import Product from "../../widgets/Product.jsx";

export function Button() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    function handleClick(category) {
        setSelectedCategory(category);
    }

    return (
        <div className="product-button">
            { !selectedCategory ?
                <>
                    <button onClick={() => handleClick("Завтрак")}>Завтрак</button>
                    <button onClick={() => handleClick("Обед/Ужин")}>Обед/Ужин</button>
                    <button onClick={() => handleClick("Доставка")}>Сегодня только доставка</button>
                    <button onClick={() => handleClick("Праздник")}>Хочется праздника</button>
                    <button onClick={() => handleClick("Непонятно")}>Не пойму, чего хочется</button>
                </>
                : <Product category={selectedCategory}/>}
        </div>
    );
}
