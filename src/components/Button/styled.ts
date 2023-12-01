import styled from 'styled-components'

import { BUTTON_TYPE } from '../../config'
import { colors } from '../../ui-kit/sharedStyles'

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  color: ${colors.primary5};
`

export const ButtonFrame = styled.button`
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
`