import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, Image, TouchableHighlight, NativeModules, ListView, TextInput, ToastAndroid, ScrollView, Picker, FlatList, Dimensions } from 'react-native';
import { BottomNavigation, COLOR, ThemeProvider, Toolbar, Card, Checkbox, RadioButton, Icon, IconToggle } from 'react-native-material-ui';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'
import questionSource from '../UcareData/PITShow/FormQuestions2'
import Question from '../components/Question.symptom'
import AnswerChoices from '../components/AnswerChoices.symptom'
import AnswerMultiChoices from '../components/AnswerMultiChoices.symptom'
var _ = require('lodash');

const { height, width } = Dimensions.get('window');


export default class SymptomTakingScreen extends Component {
    // constructor(props) {
    //     super(props)
    //     this.listView = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2,
    //     });

    //     this.state = {
    //         currentQuestion: questionsSource[0],
    //         currentAnswers: this.listView.cloneWithRows(questionsSource[0].answer),
    //         currentPatientAnswer: "",
    //         allPatientAnswer: [],
    //         multiChoiceCurrentAnswer: [],
    //         otherPatientAnswer: "",
    //         caseID: "",
    //         chiefComplaint: "",
    //         point: 1
    //     }
    //     console.log("constructor_ ", this.state)

    //     // this.props.navigator.setStyle({
    //     //     navBarTextColor: '#ffffff',navBarBackgroundColor: '#80cdc0',navBarHeight:50,navBarTextFontSize:20,navBarSubtitleFontSize:12,navBarButtonColor:"white"
    //     // });

    // }

    // _goToConfirm() {


    //     // this.props.navigator
    //     //     .push(
    //     //     {
    //     //         screen: 'example.ConfirmCaseScreen',
    //     //         animationType: 'fade',
    //     //         title: "ยืนยันอาการ",
    //     //         passProps: { patientCase: this.state.allPatientAnswer, chiefComplaint: this.state.chiefComplaint },
    //     //         navigatorStyle: {
    //     //             navBarBackgroundColor: '#7ec8ba',
    //     //             navBarTextColor: '#ffffff'
    //     //         },
    //     //     })

    // }


    // _next() {
    //     console.log(this.state)
    //     var addPoint = this.state.point + 1
    //     this.setState({ point: addPoint })
    //     if (this.state.currentQuestion.type == "Choice") {
    //         if (this.state.currentPatientAnswer != "") {
    //             console.log("answer checked,checking answer type")
    //             if (this.state.currentQuestion.emergency) {

    //                 // this.props.navigator.push({
    //                 //     screen: 'example.EmergencyScreen', animationType: 'fade', title: "ฉุกเฉิน",
    //                 //     navigatorStyle: { navBarBackgroundColor: '#7ec8ba', navBarTextColor: '#ffffff' },
    //                 // })

    //             }

    //             else if (this.state.currentPatientAnswer.title != "ข้าม" && this.state.currentPatientAnswer.type == "c") {
    //                 var arrayvar = this.state.allPatientAnswer
    //                 arrayvar.push("" + this.state.currentQuestion.title + ": " + this.state.currentPatientAnswer.title)
    //                 this.setState({ allPatientAnswer: arrayvar })

    //             }
    //             else if (this.state.currentPatientAnswer.type == "o") {
    //                 if (this.state.otherPatientAnswer != "") {
    //                     var arrayvar = this.state.allPatientAnswer
    //                     arrayvar.push("" + this.state.currentQuestion.title + ": " + this.state.otherPatientAnswer)
    //                     this.setState({ allPatientAnswer: arrayvar })
    //                 }
    //                 else {
    //                     ToastAndroid.showWithGravityAndOffset('โปรดระบุอาการอื่นๆ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300);
    //                 }
    //             }
    //             else if (this.state.currentPatientAnswer.type == "T") {
    //                 if (this.state.otherPatientAnswer != "" && this.state.timeUnit != "") {
    //                     var arrayvar = this.state.allPatientAnswer
    //                     arrayvar.push("" + this.state.currentQuestion.title + ": " + this.state.otherPatientAnswer + " " + this.state.timeUnit)
    //                     this.setState({ allPatientAnswer: arrayvar })
    //                 }
    //                 else {
    //                     ToastAndroid.showWithGravityAndOffset('โปรดระบุข้อมูลให้ครบ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300);
    //                 }
    //                 //mock


    //                 if (this.state.currentQuestion.next != "end" && this.state.otherPatientAnswer != "" && this.state.timeUnit != "") {

    //                     var nextQuestionPoint = this.state.currentQuestion.next
    //                     console.log(nextQuestionPoint)
    //                     this.setState({ currentQuestion: questionsSource[nextQuestionPoint] })
    //                     this.setState({ currentAnswers: this.state.currentAnswers.cloneWithRows(questionsSource[nextQuestionPoint].answer) })
    //                     console.log("All answers = ", this.state.allPatientAnswer)
    //                     console.log("other patient answer = ", this.state.otherPatientAnswer)
    //                     this.setState({ currentPatientAnswer: "", otherPatientAnswer: "", multiChoiceCurrentAnswer: [], timeUnit: "" })

    //                 }
    //                 else if (this.state.currentQuestion.next == "end") {
    //                     this._goToConfirm()
    //                 }


    //             }
    //             if (this.state.currentQuestion.question == "โปรดระบุอาการสำคัญ") {
    //                 console.log("first question")
    //                 if (this.state.currentPatientAnswer.next == "end") {
    //                     // this.props.navigator
    //                     //     .push(
    //                     //     {
    //                     //         screen: 'example.ConfirmCaseScreen',
    //                     //         animationType: 'fade',
    //                     //         title: "ยืนยันอาการ",
    //                     //         passProps: { patientCase: this.state.allPatientAnswer, chiefComplaint: this.state.otherPatientAnswer },
    //                     //         navigatorStyle: {
    //                     //             navBarBackgroundColor: '#7ec8ba',
    //                     //             navBarTextColor: '#ffffff'
    //                     //         },
    //                     //     })
    //                 }
    //                 else {
    //                     this.setState({ chiefComplaint: this.state.currentPatientAnswer.title })
    //                     var nextQuestionPoint = this.state.currentPatientAnswer.next
    //                     console.log(nextQuestionPoint)
    //                     this.setState({ currentQuestion: questionsSource[nextQuestionPoint] })
    //                     this.setState({ currentAnswers: this.state.currentAnswers.cloneWithRows(questionsSource[nextQuestionPoint].answer) })
    //                     console.log(this.state.allPatientAnswer)

    //                 }

    //             }
    //             else if (this.state.currentQuestion.emergency != true) {
    //                 if (this.state.currentQuestion.next != "end" && this.state.currentPatientAnswer.type != "T") {

    //                     var nextQuestionPoint = this.state.currentQuestion.next

    //                     this.setState({ currentQuestion: questionsSource[nextQuestionPoint] })
    //                     this.setState({ currentAnswers: this.state.currentAnswers.cloneWithRows(questionsSource[nextQuestionPoint].answer) })

    //                 }
    //                 else if (this.state.currentQuestion.next == "end" && this.state.currentPatientAnswer.type != "T") {
    //                     this._goToConfirm()
    //                 }
    //                 else if (this.state.currentQuestion.emergency != true && this.state.currentPatientAnswer.type != "T") {
    //                     this._goToConfirm()
    //                 }
    //             }
    //             this.setState({
    //                 multiChoiceCurrentAnswer: [],
    //                 otherPatientAnswer: "",
    //                 currentPatientAnswer: "",
    //             })
    //         }
    //         else {
    //             ToastAndroid.showWithGravityAndOffset('โปรดเลือกคำตอบ 1 ข้อ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300);
    //         }
    //     }
    //     else { //สำหรับmultiChoice
    //         if (this.state.multiChoiceCurrentAnswer != "" && _.indexOf(this.state.multiChoiceCurrentAnswer, "ข้าม") == -1) {
    //             var arrayvar = this.state.allPatientAnswer
    //             arrayvar.push("" + this.state.currentQuestion.title + ": " + this.state.multiChoiceCurrentAnswer + " " + this.state.otherPatientAnswer)
    //             this.setState({
    //                 allPatientAnswer: arrayvar,
    //                 multiChoiceCurrentAnswer: [],
    //                 otherPatientAnswer: "",
    //                 currentPatientAnswer: ""
    //             })
    //         }
    //         if (this.state.currentQuestion.next != "end") { //ใช้ตำแหน่งของตัวสุดท้ายในอาเรย์ กรณีที่เจอEกับUจะได้เอาตัวที่เป็น0 ไปก่อน
    //             var nextQuestionPoint = this.state.currentQuestion.next
    //             console.log(nextQuestionPoint)
    //             this.setState({ currentQuestion: questionsSource[nextQuestionPoint] })
    //             this.setState({ currentAnswers: this.state.currentAnswers.cloneWithRows(questionsSource[nextQuestionPoint].answer) })
    //             console.log(this.state.allPatientAnswer)
    //             this.setState({ currentPatientAnswer: "", otherPatientAnswer: "", multiChoiceCurrentAnswer: [] })
    //         }
    //         else if (this.state.currentQuestion.answer[this.state.currentQuestion.answer.length - 1].next == "end") {
    //             console.log(this.state.allPatientAnswer)

    //             this._goToConfirm()

    //         }
    //         else {
    //             this._goToConfirm()
    //         }


    //     }
    // }

    // // _skip(){    if(this.state.currentQuestion.question=="โปรดระบุอาการสำคัญ"){
    // //                 ToastAndroid.showWithGravity(
    // //                     "โปรดระบุอาการสำคัญ",
    // //                     ToastAndroid.SHORT,
    // //                     ToastAndroid.CENTER
    // //                 );
    // //             }
    // //             else if(this.state.currentQuestion.next!="end"){
    // //                 var nextQuestionPoint=this.state.currentQuestion.next
    // //                 console.log(nextQuestionPoint)
    // //                 this.setState({currentQuestion:questionsSource[nextQuestionPoint]})
    // //                 this.setState({currentAnswers:this.state.currentAnswers.cloneWithRows(questionsSource[nextQuestionPoint].answer)})
    // //                 console.log(this.state.allPatientAnswer)
    // //                 this.setState({currentPatientAnswer:"",otherPatientAnswer:"",multiChoiceCurrentAnswer:[],timeUnit:""})
    // //             }
    // //             else if(this.state.currentQuestion.next=="end"){

    // //                 this._goToConfirm()
    // //                 this.setState({currentPatientAnswer:"",otherPatientAnswer:"",multiChoiceCurrentAnswer:[],timeUnit:""})

    // //             } 


    // // }



    // render() {
    //     return (
    //         <ThemeProvider uiTheme={uiTheme} >

    //             <View style={{ margin: 10 }} >
    //                 <View style={{ borderColor: 'gray', borderBottomWidth: 1 }} >
    //                     <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{this.state.currentQuestion.question}</Text>
    //                     <Text style={{ fontSize: 12, color: "black", marginBottom: 10 }} >{(this.state.currentQuestion.type == 'Choice') ? "(เลือกได้ 1 ข้อ)" : "(เลือกได้หลายข้อ)"}</Text>
    //                     <RadioButton label="Checked by default" checked value="Value" />
    //                 </View>

    //             </View>
    //             <ScrollView style={{ flex: 9 }}>
    //                 {this.state.currentQuestion.answer.map((answer, idx) => {

    //                     if (this.state.currentQuestion.type == "Choice") {
    //                         if (answer.type == "c" || answer.type == "E" || answer.type == "U") {
    //                             return (

    //                                 <RadioButton key={idx}
    //                                     label={answer.title}

    //                                     checkedIcon="radio-button-checked"
    //                                     uncheckedIcon="radio-button-unchecked"
    //                                     checked={this.state.currentPatientAnswer.title == answer.title}
    //                                     value={answer.title}
    //                                     onCheck={() => this.setState({
    //                                         currentPatientAnswer: answer,
    //                                         otherPatientAnswer: ""
    //                                     })} />
    //                             )
    //                         }
    //                         else if (answer.type == "o") {
    //                             return <View key={idx} style={{ flexDirection: "row" }}>

    //                                 <RadioButton key={answer.title}
    //                                     style={{ flex: 5 }}
    //                                     label={answer.title}
    //                                     checked={this.state.currentPatientAnswer.title == answer.title}
    //                                     value={answer.title}
    //                                     onCheck={() => this.setState({ currentPatientAnswer: answer, })} />
    //                                 <TextInput style={{ flex: 5 }}
    //                                     onChangeText={(otherPatientAnswer) => {
    //                                         this.setState({ otherPatientAnswer })
    //                                         this.setState({ currentPatientAnswer: answer })
    //                                     }
    //                                     }
    //                                     value={this.state.otherPatientAnswer}
    //                                     placeholder={answer.title + " โปรดระบุ"}
    //                                 /></View>
    //                         }
    //                         else if (answer.type == "T") {
    //                             return <View key={idx} style={{ flexDirection: "row", margin: 10 }}>

    //                                 <View style={{ flex: 5 }}>
    //                                     <Text>ระยะเวลา</Text>
    //                                     <TextInput style={{ flex: 5 }}
    //                                         keyboardType="numeric"
    //                                         onChangeText={(otherPatientAnswer) => {
    //                                             this.setState({ otherPatientAnswer })
    //                                             this.setState({ currentPatientAnswer: answer })
    //                                         }}
    //                                     />
    //                                 </View>
    //                                 <View style={{ flex: 5 }}>
    //                                     <Text>หน่วยเวลา</Text>
    //                                     <Picker
    //                                         selectedValue={this.state.timeUnit}
    //                                         onValueChange={(itemValue, itemIndex) => this.setState({ timeUnit: itemValue })}>
    //                                         <Picker.Item label="โปรดระบุหน่วยเวลา" value="" />
    //                                         <Picker.Item label="นาที" value="นาที" />
    //                                         <Picker.Item label="ชั่วโมง" value="ชั่วโมง" />
    //                                         <Picker.Item label="วัน" value="วัน" />
    //                                         <Picker.Item label="เดือน" value="เดือน" />
    //                                         <Picker.Item label="ปี" value="ปี" />
    //                                     </Picker>
    //                                 </View>
    //                             </View>
    //                         }

    //                         else {
    //                             return null
    //                         }

    //                     }
    //                     else if (this.state.currentQuestion.type == "multiChoice") {
    //                         if (answer.type == "c" || answer.type == "E" || answer.type == "U") {
    //                             var name = answer.title

    //                             return (

    //                                 <RadioButton key={idx}
    //                                     label={answer.title}
    //                                     checkedIcon="radio-button-checked"
    //                                     uncheckedIcon="radio-button-unchecked"
    //                                     checked={_.indexOf(this.state.multiChoiceCurrentAnswer, answer.title) != -1}
    //                                     value={answer.title}
    //                                     onCheck={() => {

    //                                         var arry = []
    //                                         arry = this.state.multiChoiceCurrentAnswer
    //                                         console.log(arry)
    //                                         if (_.indexOf(arry, answer.title) == -1) {
    //                                             arry.push(answer.title)
    //                                             arry = _.uniq(arry)
    //                                             console.log(arry)
    //                                         }
    //                                         else {

    //                                             console.log("else" + _.remove(arry, function (n) { return n == answer.title }))
    //                                         }

    //                                         this.setState({ multiChoiceCurrentAnswer: _.uniq(arry) })
    //                                         console.log(this.state.multiChoiceCurrentAnswer)
    //                                     }} />
    //                             )
    //                         }
    //                         else if (answer.type == "o" || answer.type == "T") {
    //                             return (<View key={idx} style={{ flexDirection: "row" }}>
    //                                 <RadioButton key={answer.title}
    //                                     style={{ flex: 5 }}
    //                                     label={answer.title}
    //                                     checked={this.state.otherPatientAnswer}
    //                                     value={answer.title}
    //                                     onCheck={() => this.setState({ currentPatientAnswer: answer, })} />
    //                                 <TextInput style={{ flex: 5 }}
    //                                     onChangeText={(otherPatientAnswer) => {
    //                                         this.setState({ otherPatientAnswer })
    //                                     }
    //                                     }
    //                                     value={this.state.otherPatientAnswer}
    //                                     placeholder={"" + answer.title + " (โปรดระบุ)"}
    //                                 />

    //                             </View>)
    //                         }


    //                         else {
    //                             return null
    //                         }

    //                     }

    //                 })}

    //             </ScrollView>


    //             <Text></Text>
    //             <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
    //                 {this.state.currentQuestion.question == "โปรดระบุอาการสำคัญ" ?
    //                     <Button title="ข้ามคำถามนี้"
    //                         disabledStyle={{ backgroundColor: "#F8F9FB" }}
    //                         color="#F8F9FB"
    //                         disabled={true}
    //                         //onPress={this._skip.bind(this)} 
    //                         rounded
    //                         backgroundColor="#80cdc0" />
    //                     : <Button title="ข้ามคำถามนี้"
    //                         //onPress={this._skip.bind(this)} 
    //                         rounded backgroundColor="#80cdc0" />
    //                 }

    //                 <Button
    //                     title="     ต่อไป    "
    //                     onPress={this._next.bind(this)}
    //                     rounded
    //                     backgroundColor="#80cdc0" />

    //             </View>
    //             <Text></Text>

    //         </ThemeProvider >

    //     )
    // }

    constructor(props) {
        super(props)
        this.state = {
            questionNumber: 1,
            answerNumberSelected: 0,
            allPatientAnswers: [],
            caseID: "",
            currentPatientAnswer: "",
            currentQuestion: questionSource.chiefQuestion,
            multipleChoiceCurrentAnswer: [],
            questionHistory: [questionSource.chiefQuestion],
            questionBasedOnChiefComplaint: "",
            chiefComplaint: "" //main symptom
        }
    }

    _setCurrentPatientAnswer = async (currentPatientAnswer) => {
        await this.setState({ currentPatientAnswer })
        console.log("current answer = ", this.state.currentPatientAnswer)
    }

    _setMultipleChoiceCurrentAnswer = async (answer) => {
        //This answer is not in state yet
        if (this.state.multipleChoiceCurrentAnswer.indexOf(answer) !== -1) {
            this.setState({ multipleChoiceCurrentAnswer: answer })
        }

        console.log("multiple current answer = ", this.state.multipleChoiceCurrentAnswer)
    }

    _setAnswerNumberSelected = async (answerNumberSelected) => {
        await this.setState({ answerNumberSelected })
    }

    _next = async () => {
        console.log("next")
        if (this.state.currentPatientAnswer !== "") {
            //Patient has emergency symptom
            if (this.state.currentPatientAnswer.type === "E") {
                ToastAndroid.showWithGravityAndOffset('ฉุกเฉิน', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                
                //KOPAI
                // this.props.navigator.push({
                //     screen: 'example.EmergencyScreen', animationType: 'fade', title: "ฉุกเฉิน",
                //     navigatorStyle: { navBarBackgroundColor: '#7ec8ba', navBarTextColor: '#ffffff' },
                // })
            }
            else {
                let questionNumber = this.state.questionNumber + 1
                let next = this.state.currentPatientAnswer.next
                let history = this.state.questionHistory
                history.push(this.state.currentQuestion)
                let allPatientAnswers = this.state.allPatientAnswers
                allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.currentPatientAnswer.title)
                let nextQuestion
                if (this.state.currentQuestion.question === "โปรดระบุอาการสำคัญ") {
                    nextQuestion = questionSource[next].question_1
                    this.setState({
                        chiefComplaint: this.state.currentPatientAnswer.title,
                        questionBasedOnChiefComplaint: questionSource[next]
                    })
                }
                else {
                    nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                    console.log("______", this.state.questionBasedOnChiefComplaint)
                }
                console.log("next question ", next, nextQuestion)
                await this.setState({
                    questionNumber,
                    questionHistory: _.uniq(history),
                    currentQuestion: nextQuestion,
                    currentPatientAnswer: "",
                    allPatientAnswers,
                    answerNumberSelected: 0,
                })
                console.log("next ", this.state)
                // if (questionNumber >= 1) {
                //     this.setState({
                //         questionNumber
                //     })
                // }
            }

        }
        else if (this.state.currentQuestion.question === "โปรดระบุอาการสำคัญ" && this.state.currentPatientAnswer !== "") {
            ToastAndroid.showWithGravityAndOffset('กรุณาเลือกอาการสำคัญ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
        }

    }

    _back = () => {
        let prevQuestion = this.state.questionHistory.pop()
        let questionNumber = this.state.questionNumber - 1
        if (prevQuestion.title === "อาการสำคัญ") {

        }
        this.setState({
            currentQuestion: prevQuestion,
            questionNumber
        })
        console.log("prev question ", prevQuestion)
    }

    _skip = () => {

    }

    //TODO: it doesn't look good when device is in landscape mode
    _renderGeneralQuestions = () => {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.container}>
                    <ScrollView style={{ flex: 1, flexGrow: 1 }} >
                        <Question question={questionSource.chiefQuestion} />
                        <FlatList
                            style={{ flex: 1 }}
                            data={questionSource.chiefQuestion.answer}
                            numColumns={2}
                            keyExtractor={(item, index) => item.title}
                            renderItem={(item, index) => (
                                <AnswerChoices
                                    question={questionSource.chiefQuestion}
                                    choices={item}
                                    currentPatientAnswer={this.state.currentPatientAnswer}
                                    answerNumberSelected={this.state.answerNumberSelected}
                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                    _setAnswerNumberSelected={this._setAnswerNumberSelected} />
                            )}
                        />
                        <Button
                            title="     ต่อไป    "
                            onPress={this._next}
                            rounded
                            raised
                            backgroundColor="#80cdc0"
                            buttonStyle={styles.nextButton} />
                    </ScrollView>
                </View>

            </ThemeProvider >
        )
    }

    _renderSpecificQuestions = () => {


        return (
            <View style={styles.containerSpecific}>
                <ScrollView>
                    <Question question={this.state.currentQuestion} />
                    { //Check type of question
                        (
                            () => {
                                if (this.state.currentQuestion.type === "MultiChoice") {
                                    return this.state.currentQuestion.answer.map((answer, index) => (
                                        <AnswerMultiChoices
                                            answer={answer}
                                            key={answer.title}
                                            currentPatientAnswer={this.state.currentPatientAnswer}
                                            multipleChoiceCurrentAnswer={this.state.multipleChoiceCurrentAnswer}
                                            answerNumberSelected={this.state.answerNumberSelected}
                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                            _setAnswerNumberSelected={this._setAnswerNumberSelected} />

                                    ))
                                }
                            }
                        )() //immediately-invoked function expreesion, so I can use if-else in JSX
                    }
                    <View style={styles.containerButton}>
                        <Button
                            title="     ย้อนกลับ    "
                            onPress={this._back}
                            rounded
                            raised
                            backgroundColor="#80cdc0"
                            buttonStyle={styles.nextButton} />
                        {
                            //Next button
                            this.state.currentQuestion.next !== "end" ?
                                <Button
                                    title="     ต่อไป    "
                                    onPress={this._next}
                                    rounded
                                    raised
                                    backgroundColor="#80cdc0"
                                    buttonStyle={styles.nextButton} /> :
                                <Button
                                    title="     ยืนยัน    "
                                    onPress={this._next}
                                    rounded
                                    raised
                                    backgroundColor="#80cdc0"
                                    buttonStyle={styles.nextButton} />
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }

    render() {
        if (this.state.questionNumber === 1)
            return this._renderGeneralQuestions()
        else
            return this._renderSpecificQuestions()
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around', //if space-evenly, it will look good in landscape, but in portrait the AnswerChoices will exceed the device's screen
        alignItems: "stretch", //it alignItems = center, scrollview will not expand full width 
        margin: 10,

    },
    containerSpecific: {
        flex: 1,
        justifyContent: 'center', //if space-evenly, it will look good in landscape, but in portrait the AnswerChoices will exceed the device's screen
        alignItems: "stretch", //it alignItems = center, scrollview will not expand full width 
        margin: 10,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    nextButton: {
        marginVertical: 30
    }
})

const uiTheme = {
    palette: {
        primaryColor: "#7ec8ba",

    },
    toolbar: {
        container: {
            height: 45
        }
    }

}
