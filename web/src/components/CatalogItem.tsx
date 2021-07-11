import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';

import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps): JSX.Element {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(
    (prod: IProduct) => {
      dispatch(addProductToCartRequest(prod));
    },
    [dispatch],
  );

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>{' '}
      <button type="button" onClick={() => handleAddProductToCart(product)}>
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>falta de estoque!</span>
      )}
    </article>
  );
}
