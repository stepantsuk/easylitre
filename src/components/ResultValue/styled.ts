import styled, { css } from 'styled-components/macro'

import { mainColors } from '../../ui-kit/sharedStyles'

type TInputPriceAmount = {
  isProductItem?: boolean
}

export const InputPriceAmount = styled.div<TInputPriceAmount>`
  flex: 40%;
  padding: 2px;
  font-weight: 600;
  color: ${mainColors.primaryText};
  border: 1px solid ${mainColors.primaryText};
  text-align: center;
  border-radius: 14px;

  ${({ isProductItem }) => {
    if (isProductItem) {
      return css`
        background-color: ${mainColors.text};
      `
    }
  }}
`