import { DietCardsList } from './DietCardsList/DietCardsList';
import { ProductsFilter } from './ProductsFilter/ProductsFilter';
import { ProductsLayout } from './ProductsLayOut/ProductsLayOut';

export const Products = () => {
  return (
    <ProductsLayout>
      <div>
        <ProductsFilter />
        <DietCardsList />
      </div>
    </ProductsLayout>
  );
};
