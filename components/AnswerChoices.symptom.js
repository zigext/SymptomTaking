import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'

const { height, width } = Dimensions.get('window');
const minItemWidth = (width - 11) / 2.45; //at first (width - 15) / 2
const maxItemWidth = (width - 15) / 2;

export default class AnswerChoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    }

    _onPress = () => {
        //can  only choose 1 choice, choose for the first time
        if (this.props.currentPatientAnswer.title !== this.props.choices.item.title) {
            //for the first time 
            if (this.props.currentPatientAnswer === "" && this.props.answerNumberSelected === 0) {
                this.setState({
                    selected: !this.state.selected
                })
                let answerNumberSelected = 1
                this.props._setCurrentPatientAnswer(this.props.choices.item)
                this.props._setAnswerNumberSelected(answerNumberSelected)
            }
            else if (this.props.answerNumberSelected >= 1) {
                console.log("choose > 1 choice")
                ToastAndroid.showWithGravityAndOffset('กรุณาเลือก 1 ข้อ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }

        }
        //chose the same choice, disselect the choice
        else {
            this.setState({
                selected: !this.state.selected
            })
            let answerNumberSelected = 0
            this.props._setCurrentPatientAnswer("")
            this.props._setAnswerNumberSelected(answerNumberSelected)
        }
    }

    render() {
        return (
            <Button
                title={this.props.choices.item.title}
                onPress={this._onPress}
                buttonStyle={styles.button}
                fontFamily="Kanit-Regular"
                rounded
                raised
                backgroundColor={this.state.selected ? "#80cdc0" : 'gray'}
            />
        )
    }
}
const styles = {
    button: {
        margin: 3,
        flex: 1,
        minWidth: minItemWidth,
        maxWidth: minItemWidth,
        borderColor: "#80cdc0",
        borderWidth: 2
    }
}