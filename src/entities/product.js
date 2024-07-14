export async function fetchCategories() {
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