import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{flex:1, flexDirection: 'row',  justifyContent: 'center', backgroundColor: 'aqua'}}>
        <View>
          <Text style = {{marginTop: 100, fontWeight: 'bold', alignContent: 'center', fontSize: 14, backgroundColor: 'white'
        }}>Aguante MUSE!!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
