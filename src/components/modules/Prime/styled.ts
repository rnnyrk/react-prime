import styled, { css } from 'styled-components';
import Anchor from 'common/Anchor';

export const PrimeHeader = styled.header`
  text-align: center;
  padding: 50px 10px;
  margin: 0 0 50px;
  background: ${(props) => props.theme.black};

  & > svg {
    width: 250px;
  }
`;

export const PrimeContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
`;

export const GithubLink = styled(Anchor)`
  width: 20px;
  height: 20px;
  display: inline-block;

  & > img {
    width: 100%;
  }
`;

export const PrimeButton = styled.button<PrimeButtonProps>`
  padding: 10px;
  border-radius: 2px;
  border: 0;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;

  ${(props) => props.invert ? css`
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.prime};
  ` : css`
    background-color: ${(props) => props.theme.prime};
    color: ${(props) => props.theme.black};
  `}
`;

type PrimeButtonProps = {
  invert?: boolean;
};
