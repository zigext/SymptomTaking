import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import Swipeable from 'react-native-swipeable'

const { height, width } = Dimensions.get('window');
const minItemWidth = (width - 11) / 2.45; //at first (width - 15) / 2
const maxItemWidth = (width - 15) / 2;

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
    <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

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
            //Press on same answer
            if (this.state.selected === true) {
                this.setState({
                    selected: !this.state.selected
                })
                this.props._setCurrentPatientAnswer("")
            }
            else {
                this.setState({
                    selected: !this.state.selected
                })
                this.props._setCurrentPatientAnswer(this.props.answer)
            }

        }
        //Press on same answer
        //It will delete only if the previous answer equals to pressed answer
        else {
            this.setState({
                selected: !this.state.selected
            })
            this.props._setCurrentPatientAnswer("")

        }
        // if (this.props.currentPatientAnswer.title !== this.props.key) {
        //     console.log("111")
        //     this.setState({
        //         selected: !this.state.selected
        //     })
        // }

    }

    render() {
        return (
            // <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
            //     <Text>My swipeable content</Text>
            // </Swipeable>
            <Button
                title={this.props.answer.title}
                onPress={this._onPress}
                buttonStyle={styles.button}
                fontFamily="Kanit-Regular"
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