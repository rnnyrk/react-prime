import React from 'React';

import { HeaderContainer } from './styled';

const Header: React.FC<HeaderProps> = (props) => (
  <HeaderContainer>
    <img src={props.image.large} alt={props.image.alt} />
  </HeaderContainer>
);

type HeaderProps = {
  image: {
    large: string;
    alt: string;
  }
};

export default Header;
