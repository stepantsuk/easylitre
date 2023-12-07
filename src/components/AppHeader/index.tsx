import { lexics } from '../../config'

import { Container } from '../../ui-kit/commonStyles'
import {
  AppHeaderFrame,
  AppHeaderContainer,
  AppTitle,
} from './styled'

export const AppHeader = () => {
  const { appTitle } = lexics

  return (
    <AppHeaderFrame>
      <AppHeaderContainer>
        <Container>
          <AppTitle>
            {appTitle}
          </AppTitle>
        </Container>
      </AppHeaderContainer>
    </AppHeaderFrame>
  )
}