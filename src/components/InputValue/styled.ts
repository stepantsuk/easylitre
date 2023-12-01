import styled from 'styled-components'

import { colors } from '../../ui-kit/sharedStyles'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  padding: 5px;
`

export const InputLexica = styled.div`
  padding: 3px;
  flex: 50%;
  text-align: center;
  color: ${colors.primary5};
  border-bottom: 1px solid ${colors.primary5};
`

export const InputPriceAmount = styled.div`
  flex: 50%;
  padding: 3px;
  font-weight: 600;
  color: ${colors.neutral0};
  background-color: ${colors.primary5};
  text-align: center;
  cursor: pointer;
`

export const Input = styled.input`
  min-width: 0;
  flex: 50%;
  padding: 2px;
  text-align: center;
  color: ${colors.primary5};
  border: 1px solid ${colors.primary5};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`