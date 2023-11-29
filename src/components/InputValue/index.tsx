import {
  BaseSyntheticEvent,
  KeyboardEvent,
  useState,
} from 'react'

import { KEYBOARD_KEYS } from '../../config/index'
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

  const onChangePriceAmount = (e: BaseSyntheticEvent) => {
    const inputValue = e.target.value
    const regExp = /^[0-9]+([.][0-9]+)?/
    if (regExp.test(inputValue) || inputValue === '') {
      handleSetPriceAmount(Number(inputValue).toFixed(2))
      setPriceAmount(inputValue)
    }
  }

  const finishEditingPriceAmount = () => {
    if (priceAmount !== '') {
      setPriceAmount('')
    }

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
              type='number'
              step={isPrice ? '0.01' : '1'}
              min='0'
              value={priceAmount}
              lang='ru'
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