import {useSelector} from "react-redux";

function Roulette() {
    const products = useSelector((state) => state.product)

    return (
        <>
            {products.map(product => (
                <div key={product.id} className="card">
                    <h1>{ product.category }</h1>
                    <p>Блюдо: {product.name}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </>
    );
}

export default Roulette;

