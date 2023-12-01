import styled, { css } from 'styled-components'

import { BUTTON_TYPE } from '../../config'
import { colors } from '../../ui-kit/sharedStyles'

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  color: ${colors.primary5};
`

type TButtonFrame = {
  disabled?: boolean,
  lexic?: string,
}

export const ButtonFrame = styled.button<TButtonFrame>`
  position: relative;
  padding: 2px;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  white-space: nowrap;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid ${colors.primary5};

  ${({ lexic, disabled }) => {
    switch (true) {
      case disabled:
        return css`
          {
            border-color: ${colors.neutral6};
            background-color: ${colors.neutral3};
            color: ${colors.neutral6};
            cursor: auto;
          }
        `
      case lexic === BUTTON_TYPE.addProduct:
        return css`
          {
            border-color: ${colors.green5};
            /* background-color: ${colors.green1}; */
            color: ${colors.green5};
          }
        `
      case lexic === BUTTON_TYPE.cleanCalc:
        return css`
          {
            border-color: ${colors.red4};
            /* background-color: ${colors.red1}; */
            color: ${colors.red4};
          }
        `
      default:
        return '';
    }
  }}
`