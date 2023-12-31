import styled from 'styled-components/macro'

import { mobileBreakpoint } from '../../ui-kit/sharedStyles'


export const AppWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
`

export const Container = styled.div`
  width: 769px;
  margin: 0 auto;
  
  @media screen and (max-width: ${mobileBreakpoint}) {
    width: 90%;
  }
`

export const ContentWrapper = styled.div`
`
