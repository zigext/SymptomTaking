import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Dimensions, FlatList } from 'react-native';
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
            text: "",
            choose: "",
            prevChoose: ""
        }
        this.prevTmp = ""
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
                    placeholder={"อื่นๆ (โปรดระบุ)"}
                    selectionColor="#9CD8B9"
                    placeholderTextColor="#9CD8B9" />
            );
        } else {
            return null;
        }
    }

   

    //with flatlist in component
    _onPress = async (item) => {
        await this.setState({
            choose: item.title,
        })

        console.log("choose", this.state.choose)
        //can  only choose 1 choice, 
        if (this.props.currentPatientAnswer.title !== this.state.choose) {
            this.setState({
                selected: true
            })
            this.props._setCurrentPatientAnswer(item)

            //other answer
            if (item.type === "o") {
                this._toggleTextInput()
            }
            // else if (this.state.prevChoose === "อื่นๆ") {
            //     this.setState({
            //         showTextInput: false
            //     })
            // }

        }
        //Choose the same choice
        else {
            if (item.type === "o") {
                this._toggleTextInput()
                this.setState({
                    selected: false
                })
            }
        }
    }

    //with flatlist in component
    render() {

        return (

            <FlatList
                style={{ flex: 1 }}
                data={this.props.answers}
                numColumns={2}
                keyExtractor={(item, index) => item.title}
                renderItem={(item, index) => {
                    if (item.item.type === "o") {
                        return (
                            <View  style={{ backgroundColor: 'transparent' }}>
                                <Button
                                    title={item.item.title}
                                    onPress={() => this._onPress(item.item)}
                                    buttonStyle={styles.button}
                                    fontSize={14}
                                    fontFamily="Kanit-Regular"
                                    rounded
                                    raised
                                    color={this.state.selected ? (this.state.choose === item.item.title ? "#FFFFFF" : "#9CD8B9") : '#9CD8B9'}
                                    backgroundColor={this.state.selected ? (this.state.choose === item.item.title ? "#9CD8B9" : "#FFFFFF") : '#FFFFFF'}
                                    containerViewStyle={{ backgroundColor: 'transparent' }}
                                />
                                {this._renderTextInput()}
                            </View>
                        )
                    }
                    else {
                        return (
                            <Button
                                title={item.item.title}
                                onPress={() => this._onPress(item.item)}
                                buttonStyle={styles.button}
                                fontSize={14}
                                fontFamily="Kanit-Regular"
                                rounded
                                raised
                                color={this.state.selected ? (this.state.choose === item.item.title ? "#FFFFFF" : "#9CD8B9") : '#9CD8B9'}
                                backgroundColor={this.state.selected ? (this.state.choose === item.item.title ? "#9CD8B9" : "#FFFFFF") : '#FFFFFF'}
                                containerViewStyle={{ backgroundColor: 'transparent' }}
                            />
                        )
                    }
                }
                }
            />

        )
    }

}

const styles = {
    button: {
        margin: 3,
        flex: 1,
        // flexWrap: "wrap",
        minWidth: minItemWidth,
        maxWidth: minItemWidth,
        borderColor: "#9CD8B9",
        borderWidth: 2,
    }
}