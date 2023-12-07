import styled from 'styled-components/macro'

import {
  mobileBreakpoint,
  mainColors,
} from './sharedStyles'

export const Container = styled.div`
  width: 769px;
  margin: 0 auto;
  
  @media screen and (max-width: ${mobileBreakpoint}) {
    width: 90%;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`

export const InputLexica = styled.div`
  padding: 3px;
  flex: 60%;
  text-align: left;
  color: ${mainColors.primaryText};
`

export const InputPriceAmount = styled.div`
  flex: 40%;
  padding: 3px;
  font-weight: 600;
  color: white;

  background-color: ${mainColors.primaryAccent};
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 14px;
`

export const InputNum = styled.input`
  min-width: 0;
  flex: 40%;
  padding: 2px;
  text-align: center;
  color: ${mainColors.primaryText};
  border: 1px solid ${mainColors.primaryText};
  border-radius: 14px;
`