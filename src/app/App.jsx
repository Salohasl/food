import './styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page from "../pages/Page.jsx";
import {ProductsList} from "../pages/ProductsList.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Page />,
    },
    {
        path: '/products',
        element: <ProductsList />,
    },
]);

function App() {
    return <div className={'main'}>
            <RouterProvider router={router} />
          </div>
}

export default App