import React from 'react';

import Header from './components/Header';

const Home = ({ home }) => (
  <Header image={home.header_image} />
);

export default Home;
