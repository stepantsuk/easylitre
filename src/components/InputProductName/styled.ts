import styled from 'styled-components'
import { colors } from '../../ui-kit/sharedStyles'

export const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  padding: 5px;
`

export const ProductNameLexica = styled.div`
  padding: 3px;
  flex: 30%;
  text-align: left;
  color: ${colors.primary5};
  border-bottom: 1px solid ${colors.primary5};
`

export const ProductNameValue = styled.div`
  flex: 70%;
  padding: 3px;
  font-weight: 400;
  color: ${colors.neutral0};
  background-color: ${colors.primary5};
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductNameInput = styled.input`
  min-width: 0;
  flex: 70%;
  padding: 2px;
  text-align: center;
  color: ${colors.primary5};
  border: 1px solid ${colors.primary5};
`

