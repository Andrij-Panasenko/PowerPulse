import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DietBlockContainer } from './DietCardsList.styled';

import { getAllProducts } from '../../../redux/products/operations';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import {
  selectAllProducts,
  selectIsLoading,
} from '../../../redux/products/selectors';
import { Loader } from '../../Loader/Loader';

import { EmptyProductsListMessage } from '../EmptyProductsListMessage/EmptyProductsListMessage';
import { SelectUser } from '../../../redux/profile/selectors';

export const DietCardsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userBloodType = useSelector(SelectUser).blood;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector(selectAllProducts);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <DietBlockContainer>
          {products.map((item) => (
            <ProductsItem key={item._id} value={item} blood={userBloodType} />
          ))}
          {products.length === 0 && !isLoading && <EmptyProductsListMessage />}
        </DietBlockContainer>
      )}
    </>
  );
};
