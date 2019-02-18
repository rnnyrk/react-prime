import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';

import { getHome } from 'ducks/home';

import ImageGroup from 'common/ImageGroup';
import Header from './components/Header';
import { compose } from 'redux';
import { withRouter } from 'react-router';

class Home extends React.Component<HomeProps> {
  componentDidMount() {
    this.props.getHome();
  }

  render() {
    if (this.props.home.loading) return <div>loading...</div>;

    return (
      <div>
        <Header image={this.props.home.data.header_image} />
        <ImageGroup images={this.props.home.data.images} />
      </div>
    );
  }
}

type HomeProps = i.RouteComponentProps & {
  home: i.HomeState;
  getHome: i.GetHomeAction;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  home: state.home,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getHome })
)(Home);
