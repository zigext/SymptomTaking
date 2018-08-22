/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BottomNavigation, COLOR, ThemeProvider, Toolbar, Card, Checkbox, RadioButton, Icon, IconToggle } from 'react-native-material-ui';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
import SymptomTakingScreen from './screens/SymptomTakingScreen'
import SymptomTakingScreen2 from './screens/SymptomTakingScreen2'
import SymptomTakingScreen3 from './screens/SymptomTakingScreen3'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>

        <SymptomTakingScreen3 />

      </ThemeProvider>
    );
  }
}

  const uiTheme = {
    palette: {
      primaryColor: "#7ec8ba",
      
    },
    toolbar: {
      container: {
        height: 45
      }
    }

  }
