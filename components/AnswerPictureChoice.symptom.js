import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, ScrollView, Dimensions, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements'

//อื่นๆ button and textInput
export default class AnswerPictureChoice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
        }
    }

    _onPress = () => {
        //not select any choice
        if (!this.props.alreadyChooseAnswer) {
            this.setState({
                selected: !this.state.selected
            })
            this.props._setChoiceCurrentAnswer(this.props.answer, "add")
            this.props._toggleAlreadyChooseAnswer(true)
        }
        //already selected
        else {
            if (this.state.selected) {
                this.setState({
                    selected: !this.state.selected
                })
                // this.props._setCurrentPatientAnswer("")
                this.props._setChoiceCurrentAnswer(this.props.answer, "delete")
                this.props._toggleAlreadyChooseAnswer(false)
            }
            else {
                ToastAndroid.showWithGravityAndOffset('สามารถเลือกได้เพียง 1 คำตอบ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={this.state.selected ? styles.buttonSelected : styles.button} onPress={this._onPress}>
                    <Image source={this.props.answer.img} style={styles.img} resizeMode="contain" />
                    <Text style={styles.text}>{this.props.answer.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    button: {
        // margin: 3,
        // flex: 1,
        // borderColor: "#9CD8B9",
        // borderWidth: 2,
        backgroundColor: 'grey',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    buttonSelected: {
        // margin: 3,
        // flex: 1,
        // borderColor: "#9CD8B9",
        // borderWidth: 2,
        backgroundColor: '#9CD8B9',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    text: {
        color: '#ffffff',
        fontFamily: 'Kanit-Regular',
        fontSize: 16,
        textAlign: 'center'
    },
    img: {
        width: 140,
        height: 140,
        marginBottom: 10
    }
}