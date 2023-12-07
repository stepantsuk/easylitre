import styled from 'styled-components/macro'

import { mainColors } from '../../ui-kit/sharedStyles'

export const AppHeaderFrame = styled.div`
`

export const AppHeaderContainer = styled.div`
  padding: 10px 0;
  background-color: ${mainColors.primaryAccent};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const AppTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  color: ${mainColors.text};
`