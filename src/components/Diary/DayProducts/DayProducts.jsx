import { NotFoundProducts } from '../NotFoundProducts/NotFoundProducts';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import { ProductItem } from '../ProductItem/ProductItem';
import {
  DairyProductsField,
  ListOfProducts,
  ProdLink,
} from './DayProducts.styled';

import sprite from '../../../assets/sprite.svg';
import { ExersTitle } from '../DayExercises/DayExercises.styled';
import { HeadOfField } from '../HeadOfField.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDiaryProducts } from '../../../redux/diary/operations';
import {
  selectDiaryProducts,
  selectIsLoading,
} from '../../../redux/diary/selectors';
import { Token } from '../../../redux/profile/selectors';
import { useMediaQuery } from '@mui/material';
import { Loader } from '../../Loader/Loader.jsx';
import TableProducts from '../DairyDayDayproductsForTabletAndDesktop/DairyDayDayproductsForTabletAndDesktop';

export const ProductsTable = () => {
  const dispatch = useDispatch();
  const token = useSelector(Token);

  const isLoading = useSelector(selectIsLoading); //temporary

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  const initialDate = useSelector((state) => state.diary.initialDate);

  useEffect(() => {
    const request = {
      token,
      date: initialDate,
    };
    dispatch(fetchDiaryProducts(request));
  }, [dispatch, token, initialDate]);
  const products = useSelector(selectDiaryProducts);
  return (
    <DairyProductsField>
      <HeadOfField>
        <ExersTitle>Products</ExersTitle>
        <ProdLink to="/products">Add Product</ProdLink>
        <svg width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-red-raw'} />
        </svg>
      </HeadOfField>
      {isLoading ? (
        <Loader />
      ) : isMobileScreen ? (
        <>
          {products.length > 0 ? (
            <ListOfProducts>
              {products.map((i) => (
                <ProductItem key={i._id} prop={i} />
              ))}
            </ListOfProducts>
          ) : (
            <PositionCorrectorDiv>
              <NotFoundProducts />
            </PositionCorrectorDiv>
          )}
        </>
      ) : (
        <>
          {products.length > 0 ? (
            <>
              <TableProducts />
            </>
          ) : (
            <PositionCorrectorDiv>
              <NotFoundProducts />
            </PositionCorrectorDiv>
          )}
        </>
      )}
    </DairyProductsField>
  );
};

export default ProductsTable;
