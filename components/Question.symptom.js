import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, NativeModules, ListView, TextInput, ToastAndroid, ScrollView, Picker } from 'react-native';

export default question = ({ question }) => {
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.bar}></View>
                <Text style={styles.text}>{question.question}</Text>
            </View>
            {
                (question.title !== "อาการสำคัญ") ?
                    (question.type == 'Choice') ?
                        (<Text style={styles.subText} >(เลือกได้ 1 ข้อ)</Text>)
                        : (<Text style={styles.subText} >(เลือกได้หลายข้อ)</Text>)
                    : null
            }
            {/*<Text style={styles.subText} >{(question.type == 'Choice') ? "(เลือกได้ 1 ข้อ)" : "(เลือกได้หลายข้อ)"}</Text>*/}
        </View>
    )
}

const styles = {
    text: {
        color: '#60ADA6',
        fontSize: 18,
        textAlign: 'left',
        fontFamily: 'Kanit-Regular'
    },
    subText: {
        fontSize: 14,
        textAlign: 'left',
        fontFamily: 'Kanit-Light',
        color: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 10
    },
    bar: {
        backgroundColor: '#60ADA6',
        width: 4,
        marginRight: 10
    },
    row: {
        flexDirection: 'row'
    }
}