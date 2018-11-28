// eslint-disable-next-line react/require-extension
import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imgJokenPo = require('../../img/jokenpo.png');

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={imgJokenPo} />
      </View>
    );
  }
}

export default Topo;
