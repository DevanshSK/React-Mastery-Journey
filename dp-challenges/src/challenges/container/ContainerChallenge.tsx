import axios from "axios";
import "./challenge.css"
import DataSource from "./shared/DataSource"
import ProductList from "./ProductList";

const getServerData = (url: string) => async () => {
    const response = await axios.get(url);
    return response.data;
};

const ContainerChallenge = () => {
    return (
        <div className='p-5'>
            <h1>Welcome to the Fake Store</h1>
            <DataSource
                getDataFunc={getServerData("https://fakestoreapi.com/products")}
                resourceName="products"
            >
                <ProductList />
            </DataSource>
        </div>
    )
}

export default ContainerChallenge