import * as i from 'types';
import React from 'react';

import Header from './components/Header';
import ImageGroup from 'common/ImageGroup';

const Home: React.FC<HomeProps> = (props) => (
  <div>
    <Header image={props.home.header_image} />
    <ImageGroup images={props.home.images} />
  </div>
);

type HomeProps = {
  home: {
    header_image: i.Image;
    images: i.Image[];
  }
};

export default Home;
