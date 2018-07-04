/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
    StyleSheet,
    AsyncStorage
  Text,
  View
} from 'react-native';
import pictures from './json/pictures.json';

/*
* Import Components
*/

import Header from './components/Header';
import PhotoList from './components/PhotoList';
import Footer from './components/Footer';

export default class App extends Component {
    async componentDidMount() {
        await this.setItem('name', 'Richard');
        await this.getItem('name');
    }

    async setItem(key, value) {
        try {
              await AsyncStorage.setItem(key, value);
        } catch (err) {
                console.error(err);
        }
    }

    async getItem(key) {
            let item;
            try {
                    item = await AsyncStorage.getItem(key);
            } catch (err) {
                    console.error(err);
            }
            console.log('found item', item);
    }

render() {
  return (
                    <View style={styles.container}>
                            <Header />
                            <PhotoList
                                    photos={pictures}
                                    />
                            <Footer />
                    </View>
      );
    }
  }

// // const instructions = Platform.select({
// // //   ios: 'Press Cmd+R to reload,\n' +
// // //     'Cmd+D or shake for dev menu',
// // //   android: 'Double tap R on your keyboard to reload,\n' +
// // //     'Shake or press menu button for dev menu',
// // // });

// // // type Props = {};
// // export default class App extends Component<Props> {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.welcome}>
// //           Welcome to React Native!
// //         </Text>
// //         <Text style={styles.instructions}>
// //           To get started, edit App.js
// //         </Text>
// //         <Text style={styles.instructions}>
// //           {instructions}
// //         </Text>
// //       </View>
// //     );
// //   }
// // }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  },
});
