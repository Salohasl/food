import axios from "axios";

export async function fetchCategories() {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        return response.data; // Возвращаем только данные ответа
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}