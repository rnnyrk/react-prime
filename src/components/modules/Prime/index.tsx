import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';

import { getData } from 'ducks/data';
import Logo from 'vectors/logo.svg';
import GithubLogo from 'images/github-logo.png';
import Anchor from 'common/Anchor';
import { PrimeHeader, PrimeContent, GithubLink, PrimeButton } from './styled';

const Prime: React.FC<PrimeProps> = ({ data, getData }) => (
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

      <p>
        {data.data.success
          ? 'Installation successful!'
          : (
            <PrimeButton onClick={getData}>
              {data.loading ? 'Installing...' : 'Install Redux'}
            </PrimeButton>
          )
        }
      </p>
    </PrimeContent>
  </>
);

type PrimeProps = {
  data: i.DataState;
  getData: i.GetDataThunk;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getData })(Prime);
