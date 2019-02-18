import React from 'React';

import { HeaderContainer } from './styled';

const Header = (props) => (
  <HeaderContainer>
    <img src={props.image.large} alt={props.image.alt} />
  </HeaderContainer>
);

export default Header;
