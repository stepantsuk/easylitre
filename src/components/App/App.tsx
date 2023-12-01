import { useState } from 'react'

import {
  AppWrapper,
  Container,
  ContentWrapper,
} from './styled'

import {
  lexics,
  DEFAULT_COUNT,
  DEFAULT_PRICE,
  DEFAULT_WEIGHT,
} from '../../config'

import { InputValue } from '../InputValue'
import { ResultPrice } from '../ResultValue'

export type TInputField = {
  countValue: number,
  field: string,
  lexic: string,
}

type TInputFields = {
  price: TInputField,
  weight: TInputField,
  volume: TInputField,
}

export const App = () => {
  const [price, setPrice] = useState<number>(DEFAULT_PRICE)
  const [weight, setWeight] = useState<number>(DEFAULT_WEIGHT)
  const [count, setCount] = useState<number>(DEFAULT_COUNT)

  const handleSetPrice = (str: string) => {
    setPrice(parseFloat(str))
  }

  const handleSetWeight = (str: string) => {
    setWeight(parseFloat(str))
  }

  const handleSetCount = (str: string) => {
    setCount(parseFloat(str))
  }

  const {
    count: countLexic,
    price: priceLexic,
    weight: weightLexic,
    priceCount,
    priceWeight,
  } = lexics

  return (
    <AppWrapper>
      <Container>
        <ContentWrapper>
          <InputValue
            countValue={price}
            isPrice={true}
            handleSetPriceAmount={handleSetPrice}
            lexic={priceLexic}
          />
          <InputValue
            countValue={weight}
            handleSetPriceAmount={handleSetWeight}
            lexic={weightLexic}
          />
          <InputValue
            countValue={count}
            handleSetPriceAmount={handleSetCount}
            lexic={countLexic}
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
        </ContentWrapper>
      </Container>
    </AppWrapper>
  );
}

