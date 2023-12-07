import {
  lexics,
  BUTTON_TYPE,
  VALUE_TYPE,
} from '../../config'

import { InputValue } from '../InputValue'
import { ResultPrice } from '../ResultValue'
import { InputProductName } from '../InputProductName'
import { Button } from '../../ui-kit/Button'
import { Container } from '../../ui-kit/commonStyles'
import {
  CalculatorFrame,
  CalculatorColumn,
} from './styled'

type TCalculator = {
  count: number,
  onCleanCount: () => void,
  onSaveProduct: () => void,
  onSetPrice: (str: string) => void,
  onSetWeight: (str: string) => void,
  onSetCount: (str: string) => void,
  onSetProductName: (str: string) => void,
  price: number,
  productName: string,
  weight: number,
}

export const Calculator = ({
  count,
  onCleanCount,
  onSaveProduct,
  onSetPrice,
  onSetWeight,
  onSetCount,
  onSetProductName,
  price,
  productName,
  weight,
}: TCalculator) => {
  const {
    count: countLexic,
    price: priceLexic,
    weight: weightLexic,
    priceCount,
    priceWeight,
    productTitle,
  } = lexics

  const {
    countType,
    priceType,
    weightType,
  } = VALUE_TYPE

  const {
    addProduct,
    cleanCalc,
  } = BUTTON_TYPE

  const disabledSaveProduct = !(!!price && !!(weight || count))
  const disabledCleanCalc = !(!!price || !!weight || !!count || !!productName)

  return (
    <CalculatorFrame>
      <Container>
        <CalculatorColumn>
          <InputValue
            countValue={price}
            isPrice={true}
            handleSetPriceAmount={onSetPrice}
            lexic={priceLexic}
            valueType={priceType}
          />
          <InputValue
            countValue={weight}
            handleSetPriceAmount={onSetWeight}
            lexic={weightLexic}
            valueType={weightType}
          />
          <InputValue
            countValue={count}
            handleSetPriceAmount={onSetCount}
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
            handleSetName={onSetProductName}
            lexic={productTitle}
            productName={productName}
          />
          <Button
            disabled={disabledSaveProduct}
            onClick={onSaveProduct}
            buttonType={addProduct}
          />
          <Button
            disabled={disabledCleanCalc}
            onClick={onCleanCount}
            buttonType={cleanCalc}
          />
        </CalculatorColumn>
      </Container>
    </CalculatorFrame>
  )
}
