import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {fetchCategories} from "../entities/product.js";



function Roulette() {
    const [categories, setCategories] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        async function fetchData() {
            const data = await fetchCategories();
            setCategories(data.categories);
        }
        fetchData();
    }, []);

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index} className="roulette-category">
                    <h3>{t(category.strCategory)}</h3>
                    <img src={category.strCategoryThumb} alt={category.strCategory} />
                </div>
            ))}
        </div>
    );
}

export default Roulette;

