import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'

const { height, width } = Dimensions.get('window');
const minItemWidth = (width - 10) / 2.45; //at first (width - 15) / 2
const maxItemWidth = (width - 15) / 2;

export default class AnswerGeneralChoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            showTextInput: false,
            text: ""
        }
    }

    //Only อื่นๆ button
    _toggleTextInput = () => {
        this.setState({
            showTextInput: !this.state.showTextInput
        });
    }

    //Only อื่นๆ button
    _onChangeText = (text) => {
        this.setState({ text })
        this.props._setOtherPatientAnswer(text)
    }

    //Only อื่นๆ button
    _renderTextInput = () => {
        if (this.state.showTextInput) {
            return (
                <TextInput
                    onChangeText={this._onChangeText}
                    value={this.state.text}
                    placeholder={"อื่นๆ (โปรดระบุ)"} />
            );
        } else {
            return null;
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
                this.props._setAnswerNumberSelected(answerNumberSelected)
                if (this.props.choices.item.type === "o") {
                    this._toggleTextInput()
                    this.props._setCurrentPatientAnswer(this.props.choices.item)
                }
                else {
                    this.props._setCurrentPatientAnswer(this.props.choices.item)
                }


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
            this.props._setAnswerNumberSelected(answerNumberSelected)
            if (this.props.choices.item.type === "o") {
                this._toggleTextInput()
                this.props._setCurrentPatientAnswer("")
            }
            else {
                this.props._setCurrentPatientAnswer("")
            }
        }
    }

    render() {
        return (
            <View>
                {this.props.choices.item.title === "อื่นๆ" ?
                    (
                        <View>
                            <Button
                                title={this.props.choices.item.title}
                                onPress={this._onPress}
                                buttonStyle={styles.button}
                                fontFamily="Kanit-Regular"
                                rounded
                                raised
                                backgroundColor={this.state.selected ? "#80cdc0" : 'gray'}
                            />
                            {this._renderTextInput()}
                        </View>
                    ) :
                    (
                        <Button
                            title={this.props.choices.item.title}
                            onPress={this._onPress}
                            buttonStyle={styles.button}
                            fontFamily="Kanit-Regular"
                            rounded
                            raised
                            backgroundColor={this.state.selected ? "#80cdc0" : 'gray'}
                        />
                    )}

            </View>
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
        borderWidth: 2,
    }
}