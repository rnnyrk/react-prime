import React from 'react';
import Logo from 'vectors/logo.svg';
import GithubLogo from 'images/github-logo.png';
import Anchor from 'common/Anchor';
import { PrimeHeader, PrimeContent, GithubLink } from './styled';

const Prime: React.FC = () => (
  <>
    <PrimeHeader>
      <Logo />
    </PrimeHeader>
    <PrimeContent>
      <p>
        Created by <Anchor href="https://github.com/JBostelaar">@JBostelaar</Anchor> and maintained
        by <Anchor href="https://labela.nl/">LabelA</Anchor>
      </p>
      <GithubLink href="https://github.com/JBostelaar/react-prime">
        <img src={GithubLogo} alt="github" />
      </GithubLink>
    </PrimeContent>
  </>
);

export default Prime;
