import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, NativeModules, ListView, TextInput, ToastAndroid, ScrollView, Picker } from 'react-native';

export default question = ({ question }) => {
    return (
        <View>
            <Text style={styles.text}>{question.question}</Text>
            <Text style={styles.subText} >{(question.type == 'Choice') ? "(เลือกได้ 1 ข้อ)" : "(เลือกได้หลายข้อ)"}</Text>
        </View>
    )
}

const styles = {
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'left',
        fontFamily: 'Kanit-Regular'
    },
    subText: {
        fontSize: 13, 
        textAlign: 'left',
        fontFamily: 'Kanit-Light',
        color: 'rgba(0, 0, 0, 0.6)', 
        marginBottom: 10
    }
}