import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements'

const { height, width } = Dimensions.get('window');
const minItemWidth = (width - 11) / 2.45; //at first (width - 15) / 2
const maxItemWidth = (width - 15) / 2;


//TODO: when select another choice change the previous selected one to gray
export default class AnswerChoices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    }

    _onPress = async () => {
        if (this.props.currentPatientAnswer.title !== this.props.answer.title) {
            //Press already selected answer
            if (this.state.selected === true) {
                this.setState({
                    selected: !this.state.selected
                })
                this.props._setCurrentPatientAnswer("")
            }
            else {
                //not select any choice
                if (!this.props.alreadyChooseAnswer) {
                    if (!this.props.currentPatientAnswer.title) {
                        this.setState({
                            selected: !this.state.selected
                        })
                        this.props._setChoiceCurrentAnswer(this.props.answer, "add")
                        this.props._toggleAlreadyChooseAnswer(true)
                    }

                }
                else {
                    //already select
                    ToastAndroid.showWithGravityAndOffset('สามารถเลือกได้เพียง 1 คำตอบ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                }
            }

        }
        //Press on same answer
        //It will delete only if the previous answer equals to pressed answer
        else {
            this.setState({
                selected: !this.state.selected
            })
            this.props._setChoiceCurrentAnswer(this.props.answer, "delete")
            this.props._toggleAlreadyChooseAnswer(false)
            //have to delete in answer for the page
        }

    }

    render() {
        return (
            <Button
                title={this.props.answer.title}
                onPress={this._onPress}
                buttonStyle={styles.button}
                fontFamily="Kanit-Regular"
                rounded
                raised
                color={this.state.selected ? "#FFFFFF" : "#9CD8B9"}
                backgroundColor={this.state.selected ? "#9CD8B9" : '#FFFFFF'}
                icon={this.state.selected ? { name: 'check', type: 'evilicon' } : null}
                containerViewStyle={{ backgroundColor: 'transparent' }} />
        )
    }

}

const styles = {
    button: {
        margin: 3,
        flex: 1,
        borderColor: "#9CD8B9",
        borderWidth: 2
        // minWidth: minItemWidth,
        // maxWidth: minItemWidth
    }
}