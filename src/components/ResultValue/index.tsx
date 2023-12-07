import {
  InputWrapper,
  InputLexica,
} from '../../ui-kit/commonStyles'

import { InputPriceAmount } from './styled'

type TResultPrice = {
  countValue: number,
  lexic: string,
  price: number,
  isProductItem?: boolean,
}

export const ResultPrice = ({
  countValue,
  lexic,
  price,
  isProductItem,
}: TResultPrice) => {
  const showDash = countValue === 0 || price === 0

  const getPrice = (priceItem: number, count: number) => {
    const price = priceItem / count

    return new Intl.NumberFormat(
      'ru-RU',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    ).format(price)
  }

  return (
    <InputWrapper>
      <InputLexica>
        {lexic}
      </InputLexica>
      <InputPriceAmount isProductItem={isProductItem}>
        {showDash
          ? '-'
          : getPrice(price, countValue)
        }
      </InputPriceAmount>
    </InputWrapper>
  )
}