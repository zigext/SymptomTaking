import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements'

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
                    placeholder={ this.props.answer.title + " (โปรดระบุ)"} />
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View>
                {this.props.answer.type === "o" ?
                    (
                        <View>
                            <Button
                                title={this.props.answer.title}
                                onPress={this._onPress}
                                buttonStyle={styles.button}
                                rounded
                                raised
                                backgroundColor={this.state.selected ? "#80cdc0" : 'gray'}
                                icon={this.state.selected ? { name: 'check', type: 'evilicon' } : null} />

                            {this._renderTextInput()}
                        </View>
                    ) :
                    (
                        <TextInput
                            onChangeText={(text) => { this.setState({ text }) }}
                            value={this.state.text}
                            placeholder={"อื่นๆ (โปรดระบุ)"} />
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