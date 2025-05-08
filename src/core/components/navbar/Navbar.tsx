import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Styled from './styled'

export const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.Avatar />
      <Styled.NavbarDate>Today, 3rd Dec</Styled.NavbarDate>
      <Styled.SearchIcon icon={faMagnifyingGlass} />
    </Styled.NavbarContainer>
  );
}