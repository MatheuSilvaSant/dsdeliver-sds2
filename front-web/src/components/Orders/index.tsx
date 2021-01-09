import React, { useEffect, useState } from "react";
import { OrderLocationdata, Product } from "../../interface/types";
import { fetchProducts } from "../Api/api";
import OrderLocation from "./OrderLocation";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import './styles.css';

const Orders: React.FC = () =>  {

    const [products, setProducts] = useState<Product[]>([]);  
    const [orderLocation,setOrderLocation] = useState<OrderLocationdata>(); 

    useEffect(()=> {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return(
    <div className="orders-container">
        <StepsHeader />
        <ProductsList products={products} />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
    );
}

export default Orders;