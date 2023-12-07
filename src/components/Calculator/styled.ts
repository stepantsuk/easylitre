import styled from 'styled-components/macro'

import { mainColors } from '../../ui-kit/sharedStyles'

export const CalculatorFrame = styled.div`
  background-color: ${mainColors.lightPrimary};
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const CalculatorColumn = styled.div`
  padding: 5px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 5px;
`