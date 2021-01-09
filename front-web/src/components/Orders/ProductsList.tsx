import { Product } from "../../interface/types";
import ProductCard from "./ProductCard"

type Props = {
    products: Product[]
}

const ProductsList: React.FC<Props> = ({products}:Props) =>{
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
               {products.map(product =>(
                   <ProductCard key={product.id} product={product}/>
               ))}
            </div>
        </div>
    );
}
export default ProductsList;