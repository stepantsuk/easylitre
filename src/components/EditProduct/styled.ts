import styled from 'styled-components/macro'

import { mainColors } from '../../ui-kit/sharedStyles'
import { ContentWrapper } from '../App/styled'
import { Container } from '../../ui-kit/commonStyles'

export const EditContainer = styled(Container)``

export const EditProductContainer = styled(ContentWrapper)`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: auto;
  justify-content: center;
  background-color: ${mainColors.text};
  border-radius: 14px;
`

export const EditProductButtons = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 14px;
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