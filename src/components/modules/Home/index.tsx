import React from 'react';

import Header from './components/Header';

const Home: React.FC<HomeProps> = (props) => (
  <Header image={props.home.header_image} />
);

type HomeProps = {
  home: {
    header_image: {
      large: string;
      alt: string;
    }
  }
};

export default Home;
