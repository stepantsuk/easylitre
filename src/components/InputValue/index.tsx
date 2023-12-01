import {
  BaseSyntheticEvent,
  KeyboardEvent,
  useState,
} from 'react'

import {
  KEYBOARD_KEYS,
  REGEX_DECIMAL,
  REGEX_INTEGER,
} from '../../config/index'
import { dotToComma } from '../../helpers/dotToComma'
import { useModal } from '../../hooks/useModal'
import {
  InputWrapper,
  InputLexica,
  Input,
  InputPriceAmount,
} from './styled'

type TInputValue = {
  countValue: number,
  handleSetPriceAmount: (str: string) => void,
  isPrice?: boolean,
  lexic: string,
}

export const InputValue = ({
  countValue,
  handleSetPriceAmount,
  isPrice,
  lexic,
}: TInputValue) => {
  const [priceAmount, setPriceAmount] = useState<string>('')

  const {
    close: endEditing,
    isOpen: isEditing,
    open: startEditing,
  } = useModal()

  const regExp = isPrice ? REGEX_DECIMAL : REGEX_INTEGER

  const onChangePriceAmount = (e: BaseSyntheticEvent) => {
    const inputValue = dotToComma(e.target.value)
    // const inputValue = e.target.value
    console.log('inputValue', inputValue)
    console.log('REGEX_DECIMAL.test(inputValue)', REGEX_DECIMAL.test(inputValue))


    if (regExp.test(inputValue)) {
      handleSetPriceAmount(Number(inputValue.replace(',', '.')).toFixed(2))
      setPriceAmount(inputValue);
    }
  }

  const finishEditingPriceAmount = () => {
    setPriceAmount('')

    endEditing()
  }

  const keyDown = (e: KeyboardEvent) => {
    if (e.key === KEYBOARD_KEYS.enter) {
      finishEditingPriceAmount()
    } else if (e.key === KEYBOARD_KEYS.escape) {
      endEditing()
    }
  }

  return (
    <InputWrapper>
      <InputLexica>
        {lexic}
      </InputLexica>
      {
        isEditing
          ? (
            <Input
              autoFocus={isEditing}
              onBlur={finishEditingPriceAmount}
              onChange={onChangePriceAmount}
              onInput={onChangePriceAmount}
              onKeyDown={keyDown}
              inputMode='numeric'
              // type='number'
              // step={isPrice ? '0.01' : '1'}
              // min='0'
              value={priceAmount}
            // lang='ru'
            />
          )
          : (
            <InputPriceAmount
              onClick={startEditing}
            >
              {isPrice
                ? dotToComma(countValue.toFixed(2))
                : countValue
              }
            </InputPriceAmount>
          )
      }

    </InputWrapper>
  )
}