import React from 'react';
import { Product } from '../../interface/types';

type Props = {
    product: Product;
}

function formatPrice(price:number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits:2,
    });

    return formatter.format(price);
}

const ProductCard: React.FC<Props> = ({product}:Props) => {
    return(
        <div className="order-card-container">
          <h3 className="order-card-title">
                {product.name}
                <img src={product.imageUri} className="order-card-image" alt={product.name}/>
                <h3 className="order-card-price">
                  {formatPrice(product.price)}
                </h3>
                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>
                       {product.description}
                    </p>
                </div>
          </h3>
        </div>
    );
}

export default ProductCard;