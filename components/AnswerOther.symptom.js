import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements'

//อื่นๆ button and textInput
export default class AnswerOther extends Component {
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
    _onPress = async () => {
        //MultiChoice
        if (this.props._setMultipleChoiceCurrentAnswer) {
            if (this.props.currentPatientAnswer.title !== this.props.answer.title) {
                //Press on same answer
                //Delete the answer in currentMultipleChoice if the pressed answer is not the previous one
                if (this.state.selected === true) {
                    this.setState({
                        selected: !this.state.selected
                    })
                    this._toggleTextInput()
                    this.props._setCurrentPatientAnswer("")
                    this.props._setMultipleChoiceCurrentAnswer(this.props.answer, "delete")
                }
                else {
                    this.setState({
                        selected: !this.state.selected
                    })
                    this._toggleTextInput()
                    this.props._setCurrentPatientAnswer(this.props.answer)
                    this.props._setMultipleChoiceCurrentAnswer(this.props.answer, "add")
                }

            }
            //Press on same answer
            //It will delete only if the previous answer equals to pressed answer
            else {
                this.setState({
                    selected: !this.state.selected
                })
                this._toggleTextInput()
                this.props._setCurrentPatientAnswer("")
                this.props._setMultipleChoiceCurrentAnswer(this.props.answer, "delete")

            }
        }
        //Choice
        else {
            await this.setState({
                selected: !this.state.selected
            })
            this._toggleTextInput()
            if (this.state.selected) {
                this.props._setCurrentPatientAnswer(this.props.answer)
            }
            else {
                this.props._setCurrentPatientAnswer("")
            }
        }


    }

    _onChangeText = (text) => {
        this.setState({ text })
        // this.props._setOtherPatientAnswer(text)
        this.props._setCurrentPatientAnswer(this.props.answer)
    }

    _onEndEditing = () => {
        let text = this.state.text
        console.log("text = ", text)
        this.props._setOtherPatientAnswer(text)
    }

    //Only อื่นๆ button
    _renderTextInput = () => {
        if (this.state.showTextInput) {
            return (
                <TextInput
                    onEndEditing={this._onEndEditing}
                    onChangeText={this._onChangeText}
                    value={this.state.text}
                    placeholder={this.props.answer.title + " (โปรดระบุ)"}
                    maxLength={100}
                    multiline />
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View>
                {this.props.answer.title === "อื่นๆ" ?
                    (
                        <View>
                            <Button
                                title={this.props.answer.title}
                                onPress={this._onPress}
                                buttonStyle={styles.button}
                                rounded
                                raised
                                backgroundColor={this.state.selected ? "#80cdc0" : 'gray'}
                                icon={this.state.selected ? { name: 'check', type: 'evilicon' } : null}
                                fontFamily="Kanit-Regular" />

                            {this._renderTextInput()}
                        </View>
                    ) :
                    (
                        <TextInput
                            onChangeText={this._onChangeText}
                            value={this.state.text}
                            placeholder={this.props.answer.title}
                            maxLength={100}
                            keyboardType={this.props.answer.category === "quantity" ? "numeric" : "default"} />
                    )
                }
            </View>
        )
    }
}

const styles = {
    button: {
        margin: 3,
        flex: 1,
    }
}