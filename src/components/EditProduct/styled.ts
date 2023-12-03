import styled from 'styled-components/macro'

import { colors } from '../../ui-kit/sharedStyles'
import {
  ContentWrapper,
  Container,
} from '../App/styled'

export const EditContainer = styled(Container)`
  /* border: 1px solid ${colors.primary5};
  background-color: ${colors.neutral5} */
`

export const EditProductContainer = styled(ContentWrapper)`
  padding: 5px;
  min-height: auto;
  justify-content: center;
  background-color: ${colors.neutral2};
`

export const EditProductButtons = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid ${colors.primary5};
`

export const ButtonsTitle = styled.div`
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
`