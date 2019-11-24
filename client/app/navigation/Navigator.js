import {createAppContainer} from 'react-navigation';
import React from 'react';
import Authentication from './AuthenticationNavigator';

export const AppContainer = createAppContainer(Authentication);

export default class Navigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}