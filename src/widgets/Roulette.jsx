import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

async function fetchCategories() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

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

