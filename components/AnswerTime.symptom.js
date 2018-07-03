import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ToastAndroid, TouchableOpacity, Dimensions, Picker } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

export default class AnswerTime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: "",
            timeUnit: "",
            date: "",
            showTimePicker: false,
            selected: false
        }
    }

    //TODO: Can click only 1 choice

    _toggleTimePicker = () => {
        this.setState({
            showTimePicker: !this.state.showTimePicker
        });
    }
    _setTime = (time) => {
        this.setState({ time })
        this.props._setTime(time)
        this.props._setCurrentPatientAnswer(this.props.answer)
    }
    _setTimeUnit = (timeUnit) => {
        this.setState({ timeUnit })
        this.props._setTimeUnit(timeUnit)
    }

    _onDateChange = (date) => {
        this.setState({ date })
        this.props._setDate(date)
        this.props._setCurrentPatientAnswer(this.props.answer)
    }

    _onTimePickerChange = (time) => {
        this.setState({ time })
        this.props._setTime(time)
        this.props._setCurrentPatientAnswer(this.props.answer)
    }

    _onPressTimePickerButton = () => {
        this._toggleTimePicker()
        this.setState({ selected: !this.state.selected })
    }

    _renderDatePicker() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <DatePicker
                    mode='date'
                    style={{ flex: 1 }}
                    date={this.state.date}
                    format='DD/MM/YYYY'
                    placeholder="กรุณาระบุวันที่"
                    minDate="01/01/1960"
                    maxDate={new Date()}
                    style={styles.elementContainer}
                    customStyles={styles.customStyles}
                    onDateChange={this._onDateChange}
                />
            </View>
        )
    }

    _renderTimePicker() {
        if (this.state.showTimePicker) {
            return (
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <DatePicker
                        mode='time'
                        style={{ flex: 1 }}
                        date={this.state.time}
                        format="HH:mm"
                        placeholder="กรุณาระบุเวลา"
                        minuteInterval={10}
                        style={styles.elementContainer}
                        customStyles={styles.customStyles}
                        onDateChange={this._onTimePickerChange}
                    />
                </View>
            );
        } else {
            return null;
        }
    }

    _renderTimePickerButton() {
        return (
            <View>
                <Button
                    title={this.props.answer.title}
                    onPress={this._onPressTimePickerButton}
                    buttonStyle={styles.button}
                    rounded
                    raised
                    color={this.state.selected ? "#9CD8B9" : '#FFFFFF'}
                    backgroundColor={this.state.selected ? "#9CD8B9" : '#FFFFFF'}
                    fontFamily="Kanit-Regular" />
                {this._renderTimePicker()}
            </View>
        )
    }

    _renderPicker() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    {
                        this.props.answer.title === "ระยะเวลา" ?
                            (
                                <Picker selectedValue={this.state.time} onValueChange={(itemValue, itemIndex) => this._setTime(itemValue)} style={styles.picker}>
                                    <Picker.Item label="เวลา" value="" />
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                    <Picker.Item label="4" value="4" />
                                    <Picker.Item label="5" value="5" />
                                    <Picker.Item label="6" value="6" />
                                    <Picker.Item label="7" value="7" />
                                    <Picker.Item label="8" value="8" />
                                    <Picker.Item label="9" value="9" />
                                    <Picker.Item label="10" value="10" />
                                    <Picker.Item label="11" value="11" />
                                    <Picker.Item label="12" value="12" />
                                    <Picker.Item label="13" value="13" />
                                    <Picker.Item label="14" value="14" />
                                    <Picker.Item label="15" value="15" />
                                    <Picker.Item label="16" value="16" />
                                    <Picker.Item label="17" value="17" />
                                    <Picker.Item label="18" value="18" />
                                    <Picker.Item label="19" value="19" />
                                    <Picker.Item label="20" value="20" />
                                    <Picker.Item label="21" value="21" />
                                    <Picker.Item label="22" value="22" />
                                    <Picker.Item label="23" value="23" />
                                    <Picker.Item label="24" value="24" />
                                    <Picker.Item label="25" value="25" />
                                    <Picker.Item label="26" value="26" />
                                    <Picker.Item label="27" value="27" />
                                    <Picker.Item label="28" value="28" />
                                    <Picker.Item label="29" value="29" />
                                    <Picker.Item label="30" value="30" />
                                    <Picker.Item label="31" value="31" />
                                    <Picker.Item label="32" value="32" />
                                    <Picker.Item label="33" value="33" />
                                    <Picker.Item label="34" value="34" />
                                    <Picker.Item label="35" value="35" />
                                    <Picker.Item label="36" value="36" />
                                    <Picker.Item label="37" value="37" />
                                    <Picker.Item label="38" value="38" />
                                    <Picker.Item label="39" value="39" />
                                    <Picker.Item label="40" value="40" />
                                    <Picker.Item label="41" value="41" />
                                    <Picker.Item label="42" value="42" />
                                    <Picker.Item label="43" value="43" />
                                    <Picker.Item label="44" value="44" />
                                    <Picker.Item label="45" value="45" />
                                    <Picker.Item label="46" value="46" />
                                    <Picker.Item label="47" value="47" />
                                    <Picker.Item label="48" value="48" />
                                    <Picker.Item label="49" value="49" />
                                    <Picker.Item label="50" value="50" />
                                    <Picker.Item label="51" value="51" />
                                    <Picker.Item label="52" value="52" />
                                    <Picker.Item label="53" value="53" />
                                    <Picker.Item label="54" value="54" />
                                    <Picker.Item label="55" value="55" />
                                    <Picker.Item label="56" value="56" />
                                    <Picker.Item label="57" value="57" />
                                    <Picker.Item label="58" value="58" />
                                    <Picker.Item label="59" value="59" />
                                    <Picker.Item label="60" value="60" />
                                </Picker>
                            ) : this.props.answer.title === "วันเดือนปี" ?
                                (
                                    <Picker selectedValue={this.state.time} onValueChange={(itemValue, itemIndex) => this._setTime(itemValue)} style={styles.picker}>
                                        <Picker.Item label="เวลา" value="" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                        <Picker.Item label="10" value="10" />
                                        <Picker.Item label="11" value="11" />
                                        <Picker.Item label="12" value="12" />
                                        <Picker.Item label="13" value="13" />
                                        <Picker.Item label="14" value="14" />
                                        <Picker.Item label="15" value="15" />
                                        <Picker.Item label="16" value="16" />
                                        <Picker.Item label="17" value="17" />
                                        <Picker.Item label="18" value="18" />
                                        <Picker.Item label="19" value="19" />
                                        <Picker.Item label="20" value="20" />
                                        <Picker.Item label="21" value="21" />
                                        <Picker.Item label="22" value="22" />
                                        <Picker.Item label="23" value="23" />
                                        <Picker.Item label="24" value="24" />
                                        <Picker.Item label="25" value="25" />
                                        <Picker.Item label="26" value="26" />
                                        <Picker.Item label="27" value="27" />
                                        <Picker.Item label="28" value="28" />
                                        <Picker.Item label="29" value="29" />
                                        <Picker.Item label="30" value="30" />
                                        <Picker.Item label="31" value="31" />
                                    </Picker>
                                ) : this.props.answer.title === "วันเดือน" ?
                                    (
                                        <Picker selectedValue={this.state.time} onValueChange={(itemValue, itemIndex) => this._setTime(itemValue)} style={styles.picker}>
                                            <Picker.Item label="เวลา" value="" />
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                            <Picker.Item label="7" value="7" />
                                            <Picker.Item label="8" value="8" />
                                            <Picker.Item label="9" value="9" />
                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="11" value="11" />
                                            <Picker.Item label="12" value="12" />
                                            <Picker.Item label="13" value="13" />
                                            <Picker.Item label="14" value="14" />
                                            <Picker.Item label="15" value="15" />
                                            <Picker.Item label="16" value="16" />
                                            <Picker.Item label="17" value="17" />
                                            <Picker.Item label="18" value="18" />
                                            <Picker.Item label="19" value="19" />
                                            <Picker.Item label="20" value="20" />
                                            <Picker.Item label="21" value="21" />
                                            <Picker.Item label="22" value="22" />
                                            <Picker.Item label="23" value="23" />
                                            <Picker.Item label="24" value="24" />
                                            <Picker.Item label="25" value="25" />
                                            <Picker.Item label="26" value="26" />
                                            <Picker.Item label="27" value="27" />
                                            <Picker.Item label="28" value="28" />
                                            <Picker.Item label="29" value="29" />
                                            <Picker.Item label="30" value="30" />
                                            <Picker.Item label="31" value="31" />
                                        </Picker>
                                    ) : null
                    }

                </View>
                <View style={{ flex: 1 }}>
                    {this.props.answer.title === "ระยะเวลา" ?
                        (
                            <Picker
                                selectedValue={this.state.timeUnit}
                                onValueChange={(itemValue, itemIndex) => this._setTimeUnit(itemValue)} style={styles.picker}>
                                <Picker.Item label="หน่วยเวลา" value="" />
                                <Picker.Item label="นาที" value="นาที" />
                                <Picker.Item label="ชั่วโมง" value="ชั่วโมง" />
                                <Picker.Item label="วัน" value="วัน" />
                                <Picker.Item label="เดือน" value="เดือน" />
                                <Picker.Item label="ปี" value="ปี" />
                            </Picker>
                        ) : this.props.answer.title === "วันเดือนปี" ?
                            (
                                <Picker
                                    selectedValue={this.state.timeUnit}
                                    onValueChange={(itemValue, itemIndex) => this._setTimeUnit(itemValue)} style={styles.picker}>
                                    <Picker.Item label="หน่วยเวลา" value="" />
                                    <Picker.Item label="วัน" value="วัน" />
                                    <Picker.Item label="เดือน" value="เดือน" />
                                    <Picker.Item label="ปี" value="ปี" />
                                </Picker>
                            ) : this.props.answer.title === "วันเดือน" ?
                                (
                                    <Picker
                                        selectedValue={this.state.timeUnit}
                                        onValueChange={(itemValue, itemIndex) => this._setTimeUnit(itemValue)} style={styles.picker}>
                                        <Picker.Item label="หน่วยเวลา" value="" />
                                        <Picker.Item label="วัน" value="วัน" />
                                        <Picker.Item label="เดือน" value="เดือน" />
                                    </Picker>
                                ) : null
                    }

                </View>
            </View>
        )
    }

    render() {
        if (this.props.answer.title === "วว/ดด/ปปปป")
            return this._renderDatePicker()
        else if (this.props.answer.title === "เวลา")
            return this._renderTimePickerButton()
        else
            return this._renderPicker()
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        flex: 1,
        borderColor: "#9CD8B9",
        borderWidth: 2,
    },
    customStyles: {
        dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 5
        },
        dateText: {
            marginLeft: 30
        },

    },
    picker: {
        color: "#9CD8B9"
    }
};