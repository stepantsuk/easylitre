import type { TProductItem } from '../App/App'
import { lexics } from '../../config'
import { ProductItem } from '../ProductItem'
import {
  ProductsContainer,
  DividerLine,
  ProductsListTitle,
  ProductsListContainer,
} from './styled'

type TProductsList = {
  products: Array<TProductItem>,
  onDeleteProduct: (idProduct: number) => void,
}

export const ProductsList = ({
  products,
  onDeleteProduct,
}: TProductsList) => {
  const { productsListTitle } = lexics

  const isProductsEmpty = products.length === 0

  const additionalLexic = isProductsEmpty ? 'пусто...' : ''

  return (
    <ProductsContainer>
      <DividerLine />
      <ProductsListTitle>
        {`${productsListTitle} ${additionalLexic}`}
      </ProductsListTitle>
      <ProductsListContainer>
        {
          (!isProductsEmpty)
          && products.map(({
            count,
            id,
            name,
            price,
            weight,
          }) => (
            <ProductItem
              key={id}
              count={count}
              id={id}
              name={name}
              price={price}
              weight={weight}
              onDeleteProduct={onDeleteProduct}
            />))
        }
        {/* <ProductItem /> */}
      </ProductsListContainer>
    </ProductsContainer>
  )
}