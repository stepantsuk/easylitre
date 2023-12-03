import styled from 'styled-components/macro'

import { colors } from '../../ui-kit/sharedStyles'

export const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 2px;
  gap: 2px;
  border: 1px solid ${colors.primary5};
  width: 100%;
  color: ${colors.primary5};
`

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`

export const ProductName = styled.div`
  padding-left: 2px;
  flex: 1;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductTitleRightBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`

export const ProductEditBtn = styled.div`
  border-bottom: 1px solid ${colors.primary5};
`

export const ProductDelete = styled.div`
  display: flex;
  width: 21px;
  height: 21px;
  justify-content: center;
  align-items: center;
  color: ${colors.red4};
  background-color: ${colors.red1};
  border: 2px solid ${colors.red4};
  cursor: pointer;
`

export const ProductValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const InputLexica = styled.div`
  padding: 3px;
  flex: 50%;
  text-align: left;
  color: ${colors.primary5};
  border-bottom: 1px solid ${colors.primary5};
`
