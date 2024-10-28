import { useSelector } from "react-redux";
import {useEffect, useState} from "react";

function Product({ category }) {
    const products = useSelector((state) => state.product);

    const filteredProducts = products.filter(product => product.category === category);

    const [randomProduct, setRandomProduct] = useState(null);

    const getRandomProduct = () => {
        if (filteredProducts.length > 0) {
            const random = filteredProducts[Math.floor(Math.random() * filteredProducts.length)];
            setRandomProduct(random);
        } else {
            setRandomProduct(null);
        }
    };

    useEffect(() => {
        getRandomProduct();
    }, [filteredProducts]);

    return (
        <>
            {randomProduct ? (
                <div key={randomProduct.id} className="card">
                    <h1>{randomProduct.category}</h1>
                    <p>Блюдо: {randomProduct.name}</p>
                    <p>{randomProduct.description}</p>
                </div>
            ) : (
                <p>Опачки(....</p>
            )}
            <button onClick={getRandomProduct}>Еще</button>
        </>
    );
}

export default Product;
