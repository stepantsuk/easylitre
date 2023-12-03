import styled from 'styled-components'

import { colors } from '../../ui-kit/sharedStyles'

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 5px;
  width: 100%;
`

export const DividerLine = styled.div`
  margin-top: 5px;
  height: 2px;
  width: 100%;
  background-color: ${colors.primary5};
`

export const ProductsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductsListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 6px;
  color: ${colors.primary5};
  font-weight: 600;
`

export const ProductsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 5px;
  width: 100%;
  /* padding: 5px; */
  /* border: 1px solid ${colors.primary5} */
`