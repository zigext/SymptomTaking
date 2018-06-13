import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'

const { height, width } = Dimensions.get('window');
const minItemWidth = (width - 11) / 2.45; //at first (width - 15) / 2
const maxItemWidth = (width - 15) / 2;

export default class AnswerMultipleChoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    }

    _onPress = () => {
        if (this.props.currentPatientAnswer.title !== this.props.answer.title) {
            this.setState({
                selected: !this.state.selected
            })
            this.props._setCurrentPatientAnswer(this.props.answer)
        }
        else {
            this.setState({
                selected: !this.state.selected
            })
            this.props._setCurrentPatientAnswer("")
        }

    }

    render() {
        return (
            <Button
                title={this.props.answer.title}
                onPress={this._onPress}
                buttonStyle={styles.button}
                rounded
                raised
                backgroundColor={this.state.selected ? "#80cdc0" : 'gray'}
                icon={this.state.selected ? { name: 'check', type: 'evilicon' } : null} />
        )
    }

}

const styles = {
    button: {
        margin: 3,
        flex: 1,
        // minWidth: minItemWidth,
        // maxWidth: minItemWidth
    }
}