import type { TProductItem } from '../App/App'
import { lexics } from '../../config'
import { ResultPrice } from '../ResultValue'
import {
  ProductItemContainer,
  ProductTitle,
  ProductName,
  ProductDelete,
  ProductValues,
} from './styled'

type TProduct = {
  onDeleteProduct: (idProduct: number) => void,
} & TProductItem

export const ProductItem = ({
  count,
  id,
  name,
  price,
  weight,
  onDeleteProduct,
}: TProduct) => {
  const {
    priceWeight,
    priceCount,
  } = lexics

  return (
    <ProductItemContainer>
      <ProductTitle>
        <ProductName>
          {name}
        </ProductName>
        <ProductDelete
          onClick={() => onDeleteProduct(id)}
        >
          X
        </ProductDelete>
      </ProductTitle>
      <ProductValues>
        <ResultPrice
          countValue={weight}
          lexic={priceWeight}
          price={price}
        />
        <ResultPrice
          countValue={count}
          lexic={priceCount}
          price={price}
        />
      </ProductValues>
    </ProductItemContainer>
  )
}