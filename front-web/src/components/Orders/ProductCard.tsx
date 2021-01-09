import React from 'react';
import { Product } from '../../interface/types';
import { formatPrice } from './helpers';

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}



const ProductCard: React.FC<Props> = ({product,onSelectProduct, isSelected}:Props) => {
    return(
        <div 
        className={`order-card-container ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelectProduct(product)}
        >
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