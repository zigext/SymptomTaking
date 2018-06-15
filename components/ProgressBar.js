import React, { Component } from "react"
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native"
import * as Progress from 'react-native-progress'

export default class ProgressBar extends Component {
    render() {
        return (
            <Progress.Bar
                progress={this.props.progress}
                width={200}
                color="#80cdc0"
                unfilledColor="rgba(0,0,0,.5)"
                borderWidth={0} />
        )
    }

}

