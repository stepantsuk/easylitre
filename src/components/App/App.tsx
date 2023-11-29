import { useState } from 'react'

import {
  AppWrapper,
  Container,
  ContentWrapper,
} from './styled'

import { lexics } from '../../config'

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

const DEFAULT_PRICE = 0
const DEFAULT_WEIGHT = 0
const DEFAULT_COUNT = 0


export const App = () => {
  // const [inputFields, setInputFields] = useState<TInputFields>(DEFAULT_STATE)

  // const inputFieldsArray = Object.values(inputFields)

  // const handleChangeValue = (amount: number, field: string) => {
  //   setInputFields({
  //     ...inputFields,
  //     [field]: {
  //       ...inputFields.price,
  //       countValue: amount,
  //     },
  //   })
  // }

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

