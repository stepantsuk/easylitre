import { useState } from 'react'

import {
  AppWrapper,
  Container,
  ContentWrapper,
  AppTitle,
} from './styled'

import {
  lexics,
  DEFAULT_COUNT,
  DEFAULT_PRICE,
  DEFAULT_WEIGHT,
  DEFAULT_PRODUCT_TITLE,
  BUTTON_TYPE,
  VALUE_TYPE,
} from '../../config'

import { InputValue } from '../InputValue'
import { ResultPrice } from '../ResultValue'
import { InputProductName } from '../InputProductName'
import { ProductsList } from '../ProductsList'
import { Button } from '../Button'

export type TInputField = {
  countValue: number,
  field: string,
  lexic: string,
}

// type TInputFields = {
//   price: TInputField,
//   weight: TInputField,
//   volume: TInputField,
// }

export type TProductItem = {
  count: number,
  name: string,
  price: number,
  weight: number,
  id: number,
}

export type THandleSet = {
  fn: React.Dispatch<React.SetStateAction<number>>,
  str: string,
}

export const App = () => {
  const [products, setProducts] = useState<Array<TProductItem>>([])

  const [price, setPrice] = useState<number>(DEFAULT_PRICE)
  const [weight, setWeight] = useState<number>(DEFAULT_WEIGHT)
  const [count, setCount] = useState<number>(DEFAULT_COUNT)
  const [productName, setProductName] = useState<string>(DEFAULT_PRODUCT_TITLE)

  const handleSet = ({
    fn,
    str,
  }: THandleSet) => {
    fn(parseFloat(str))
  }

  const cleanCount = () => {
    setPrice(DEFAULT_PRICE)
    setWeight(DEFAULT_WEIGHT)
    setCount(DEFAULT_COUNT)
    setProductName(DEFAULT_PRODUCT_TITLE)
  }

  const disabledSaveProduct = !(!!price && !!(weight || count))
  const disabledCleanCalc = !(!!price || !!weight || !!count || !!productName)

  const {
    countType,
    priceType,
    weightType,
  } = VALUE_TYPE

  const handleSaveProduct = () => {
    const product: TProductItem = {
      count: count,
      id: Date.now(),
      name: productName ? productName : 'Без названия',
      price: price,
      weight: weight,
    }
    setProducts([...products, product])
    cleanCount()
  }

  const handleDeleteProduct = (idProduct: number) => {
    const filtredProducts = products.filter(({ id }) => idProduct !== id)
    setProducts(filtredProducts)
  }

  const {
    count: countLexic,
    price: priceLexic,
    weight: weightLexic,
    priceCount,
    priceWeight,
    productTitle,
    appTitle,
  } = lexics

  const {
    addProduct,
    cleanCalc,
  } = BUTTON_TYPE

  return (
    <AppWrapper>
      <Container>
        <ContentWrapper>
          <AppTitle>
            {appTitle}
          </AppTitle>
          <InputValue
            countValue={price}
            isPrice={true}
            handleSetPriceAmount={(str) => handleSet({ fn: setPrice, str })}
            lexic={priceLexic}
            valueType={priceType}
          />
          <InputValue
            countValue={weight}
            handleSetPriceAmount={(str) => handleSet({ fn: setWeight, str })}
            lexic={weightLexic}
            valueType={weightType}
          />
          <InputValue
            countValue={count}
            handleSetPriceAmount={(str) => handleSet({ fn: setCount, str })}
            lexic={countLexic}
            valueType={countType}
          />
          <ResultPrice
            countValue={weight / 1000}
            lexic={priceWeight}
            price={price}
          />
          <ResultPrice
            countValue={count}
            lexic={priceCount}
            price={price}
          />
          <InputProductName
            handleSetName={setProductName}
            lexic={productTitle}
            productName={productName}
          />
          <Button
            disabled={disabledSaveProduct}
            onClick={handleSaveProduct}
            buttonType={addProduct}
          />
          <Button
            disabled={disabledCleanCalc}
            onClick={cleanCount}
            buttonType={cleanCalc}
          />
          <ProductsList
            products={products}
            onDeleteProduct={handleDeleteProduct}
          />
        </ContentWrapper>
      </Container>
    </AppWrapper>
  );
}

