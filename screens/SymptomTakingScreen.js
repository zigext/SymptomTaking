import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, Image, TouchableHighlight, NativeModules, ListView, TextInput, ToastAndroid, ScrollView, Picker, FlatList, Dimensions } from 'react-native';
import { BottomNavigation, COLOR, ThemeProvider, Toolbar, Checkbox, RadioButton, Icon, IconToggle, ListItem } from 'react-native-material-ui';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
import { Button, Avatar, Card } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import questionSource from '../UcareData/PITShow/FormQuestions2'
import Question from '../components/Question.symptom'
import AnswerGeneralChoices from '../components/AnswerGeneralChoices.symptom'
import AnswerChoices from '../components/AnswerChoices.symptom'
import AnswerMultiChoices from '../components/AnswerMultiChoices.symptom'
import AnswerTime from '../components/AnswerTime.symptom'
import AnswerOther from '../components/AnswerOther.symptom'
import User from '../UcareData/mockdata' //mock user from firebase => KOPAI
var _ = require('lodash');

const { height, width } = Dimensions.get('window');


export default class SymptomTakingScreen extends Component {
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
            chiefComplaint: "", //main symptom
            time: "",
            timeUnit: "",
            otherPatientAnswer: ""
        }
        //For separate choices into 2 cards
        this.len = questionSource.chiefQuestion.answer.length
        this.sortedChiefAnswer = questionSource.chiefQuestion.answer.slice()
        this.sortedChiefAnswer = this.sortedChiefAnswer.filter((answer) => answer.sex === "MF" || answer.sex === User.sex) //filter by sex
        this.sortedChiefAnswer = _.sortBy(this.sortedChiefAnswer, ['title'])
        this.firstHalfChiefAnswer = this.sortedChiefAnswer.slice(0, this.len / 2)
        this.secondHalfChiefAnswer = this.sortedChiefAnswer.slice(this.len / 2, this.len)

    }

    _setCurrentPatientAnswer = async (currentPatientAnswer) => {
        await this.setState({ currentPatientAnswer })
        console.log("current answer = ", this.state.currentPatientAnswer)
    }

    _setMultipleChoiceCurrentAnswer = async (answer, method) => {
        //user click new answer
        if (method === "add") {
            let newMultiple = this.state.multipleChoiceCurrentAnswer
            newMultiple.push(answer)
            await this.setState({
                multipleChoiceCurrentAnswer: _.uniq(newMultiple)
            })
        }
        //user click already selected answer
        else if (method === "delete") {
            let multipleChoiceCurrentAnswer = this.state.multipleChoiceCurrentAnswer
            removedMultipleChoice = multipleChoiceCurrentAnswer.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({ multipleChoiceCurrentAnswer: removedMultipleChoice })
        }
        console.log("multiple current answer = ", this.state.multipleChoiceCurrentAnswer)
    }

    _setAnswerNumberSelected = async (answerNumberSelected) => {
        await this.setState({ answerNumberSelected })
    }

    _setTime = async (time) => {
        this.setState({ time })
    }

    _setTimeUnit = (timeUnit) => {
        this.setState({ timeUnit })
    }

    _setOtherPatientAnswer = (otherPatientAnswer) => {
        this.setState({ otherPatientAnswer })
        console.log("otherPatientAnswer = ", this.state.otherPatientAnswer)
    }

    _next = async () => {
        //Choice
        if (this.state.currentQuestion.type === "Choice") {

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

                //Not emergency
                //choice answer
                else if (this.state.currentPatientAnswer.type === "c") {
                    let questionNumber = this.state.questionNumber + 1
                    let next = this.state.currentPatientAnswer.next
                    let history = this.state.questionHistory
                    history.push(this.state.currentQuestion)
                    let allPatientAnswers = this.state.allPatientAnswers
                    allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.currentPatientAnswer.title)
                    let nextQuestion

                    //only chief question
                    if (this.state.currentQuestion.question === "โปรดระบุอาการสำคัญ") {
                        nextQuestion = questionSource[next].question_1
                        this.setState({
                            chiefComplaint: this.state.currentPatientAnswer.title,
                            questionBasedOnChiefComplaint: questionSource[next]
                        })
                    }

                    //specific questions
                    else {
                        //last question
                        if (next === "end") {
                            await this.setState({
                                questionNumber: 1,
                                questionHistory: _.uniq(history),
                                currentQuestion: "",
                                currentPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                answerNumberSelected: 0,
                            })
                            this._goToConfirm()
                        }
                        else {
                            nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                        }

                    }

                    await this.setState({
                        questionNumber,
                        questionHistory: _.uniq(history),
                        currentQuestion: nextQuestion,
                        currentPatientAnswer: "",
                        multipleChoiceCurrentAnswer: [],
                        allPatientAnswers,
                        answerNumberSelected: 0,
                    })
                    console.log("next ", this.state)
                }

                //Other answer
                else if (this.state.currentPatientAnswer.type === "o") {
                    if (this.state.otherPatientAnswer !== "") {
                        let questionNumber = this.state.questionNumber + 1
                        let next = this.state.currentPatientAnswer.next
                        let history = this.state.questionHistory
                        history.push(this.state.currentQuestion)
                        let allPatientAnswers = this.state.allPatientAnswers
                        allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.otherPatientAnswer)
                        let nextQuestion

                        //only อื่นๆ in chief question
                        if (this.state.currentQuestion.question === "โปรดระบุอาการสำคัญ") {
                            if (next === "end") {
                                this.setState({
                                    chiefComplaint: this.state.otherPatientAnswer,
                                    allPatientAnswers,
                                    answerNumberSelected: 0,
                                    currentPatientAnswer: "",
                                    multipleChoiceCurrentAnswer: [],
                                    questionNumber: 1,
                                    questionHistory: _.uniq(history),
                                    currentQuestion: questionSource.chiefQuestion,
                                })
                                this._goToConfirm()
                            }

                        }
                    }
                }

                //Time answer
                //Time question
                else if (this.state.currentPatientAnswer.type === "T") {
                    if (this.state.time !== "" && this.state.timeUnit !== "") {

                        let questionNumber = this.state.questionNumber + 1
                        let next = this.state.currentQuestion.next
                        let history = this.state.questionHistory
                        history.push(this.state.currentQuestion)
                        let allPatientAnswers = this.state.allPatientAnswers
                        allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.time + " " + this.state.timeUnit)
                        //last question
                        if (next === "end") {
                            await this.setState({
                                questionNumber: 1,
                                questionHistory: _.uniq(history),
                                currentQuestion: "",
                                currentPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                answerNumberSelected: 0,
                                time: "",
                                timeUnit: ""
                            })
                            console.log(this.state)
                            this._goToConfirm()
                        }
                        //Still has next question
                        else if (next !== "end") {
                            let nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                            await this.setState({
                                questionNumber,
                                questionHistory: _.uniq(history),
                                currentQuestion: nextQuestion,
                                currentPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                answerNumberSelected: 0,
                                time: "",
                                timeUnit: ""
                            })
                            console.log(this.state)
                        }
                    }
                    else {
                        ToastAndroid.showWithGravityAndOffset('กรุณาเลือกเวลา', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                    }
                }

            }
            else if (this.state.currentQuestion.question === "โปรดระบุอาการสำคัญ") {
                ToastAndroid.showWithGravityAndOffset('กรุณาเลือกอาการสำคัญ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }

            //patient doesn't choose any answer
            else if (this.state.currentPatientAnswer === "" && this.state.currentQuestion.question !== "โปรดระบุอาการสำคัญ") {
                ToastAndroid.showWithGravityAndOffset('กรุณาตอบคำถาม', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }
        }

        //MultiChoice
        else if (this.state.currentQuestion.type === "MultiChoice") {
            if (_.isEmpty(this.state.multipleChoiceCurrentAnswer) === false) {

                //Emergency
                if (this.state.multipleChoiceCurrentAnswer.some((answer) => answer.type === "E")) {
                    //KOPAI
                    ToastAndroid.showWithGravityAndOffset('ฉุกเฉิน', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                }

                //Not emergency
                //TODO: answer type o & when type o AND female
                else {
                    //answer type c, M, F
                    if (this.state.currentPatientAnswer.type === "c" || this.state.currentPatientAnswer.type === "M" || this.state.currentPatientAnswer.type === "F") {
                        let questionNumber = this.state.questionNumber + 1
                        let next = this.state.currentPatientAnswer.next
                        let history = this.state.questionHistory
                        history.push(this.state.currentQuestion)
                        let allPatientAnswers = this.state.allPatientAnswers
                        let allAnswers = ""
                        this.state.multipleChoiceCurrentAnswer.map((answer) => allAnswers = allAnswers + answer.title + " ")
                        allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + allAnswers)
                        let nextQuestion
                        //Last question
                        if (next === "end") {
                            await this.setState({
                                questionNumber: 1,
                                questionHistory: _.uniq(history),
                                currentQuestion: "",
                                currentPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                answerNumberSelected: 0,
                            })
                            this._goToConfirm()
                        }
                        //Still has other questions
                        else {
                            nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                        }
                        await this.setState({
                            questionNumber,
                            questionHistory: _.uniq(history),
                            currentQuestion: nextQuestion,
                            currentPatientAnswer: "",
                            multipleChoiceCurrentAnswer: [],
                            allPatientAnswers,
                            answerNumberSelected: 0,
                        })
                        console.log("next ", this.state)
                    }

                    //type o
                    //user may choose some choices and key in other input
                    //TODO: handle when there're more than 1 o type answer in 1 question
                    else if (this.state.otherPatientAnswer !== "") {
                        let questionNumber = this.state.questionNumber + 1
                        let next = this.state.currentPatientAnswer.next
                        let history = this.state.questionHistory
                        history.push(this.state.currentQuestion)
                        let allPatientAnswers = this.state.allPatientAnswers
                        let allAnswers = ""
                        //user doesn't choose any choice except อื่นๆ
                        if (_.isEmpty(this.state.multipleChoiceCurrentAnswer) === true) {
                            allAnswers = allAnswers + " " + this.state.otherPatientAnswer
                            allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + allAnswers)
                        }
                        //user also choose other choices
                        else {
                            this.state.multipleChoiceCurrentAnswer.map((answer) => allAnswers = allAnswers + answer.title + " ")
                            allAnswers = allAnswers + " " + this.state.otherPatientAnswer
                            allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + allAnswers)
                        }

                        let nextQuestion
                        //Last question
                        if (next === "end") {
                            await this.setState({
                                questionNumber: 1,
                                questionHistory: _.uniq(history),
                                currentQuestion: "",
                                currentPatientAnswer: "",
                                otherPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                answerNumberSelected: 0,
                            })
                            this._goToConfirm()
                        }
                        //Still has other questions
                        else {
                            nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                        }
                        await this.setState({
                            questionNumber,
                            questionHistory: _.uniq(history),
                            currentQuestion: nextQuestion,
                            currentPatientAnswer: "",
                            otherPatientAnswer: "",
                            multipleChoiceCurrentAnswer: [],
                            allPatientAnswers,
                            answerNumberSelected: 0,
                        })
                        console.log("next ", this.state)
                    }

                }

            }
            //Patient doesn't answer
            else {
                ToastAndroid.showWithGravityAndOffset('กรุณาตอบคำถาม', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }
        }
    }

    _back = () => {
        let prevQuestion = this.state.questionHistory.pop()
        let questionNumber = this.state.questionNumber - 1
        //TODO
        if (prevQuestion.title === "อาการสำคัญ") {

        }
        this.setState({
            currentQuestion: prevQuestion,
            questionNumber
        })
    }

    //KOPAI go to confirm screen
    //when uncomment navigator it should has no error
    _goToConfirm = () => {
        ToastAndroid.showWithGravityAndOffset('คำถามสุดท้าย', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
        console.log("confirm ", this.state.chiefComplaint, this.state.allPatientAnswers)
        // this.props.navigator
        //     .push(
        //     {
        //         screen: 'example.ConfirmCaseScreen',
        //         animationType: 'fade',
        //         title: "ยืนยันอาการ",
        //         passProps: { patientCase: this.state.allPatientAnswer, chiefComplaint: this.state.chiefComplaint },
        //         navigatorStyle: {
        //             navBarBackgroundColor: '#7ec8ba',
        //             navBarTextColor: '#ffffff'
        //         },
        //     })
    }

    //TODO: it doesn't look good when device is in landscape mode
    //Change to card with swiper
    _renderGeneralQuestions = () => {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.container}>
                    {/*<ScrollView style={{ flex: 1, flexGrow: 1 }} >*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar
                            medium
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }} //KOPAI Change to User.photoURL
                            activeOpacity={0.7}
                        />
                        {/*KOPAI: Change to user real data*/}
                        <Text style={{ fontSize: 18, fontFamily: 'Kanit-Regular', color: 'black', marginLeft: 5 }}>{`${User.name.title} ${User.name.firstName} ${User.name.lastName}`}</Text>
                    </View>

                    <View style={{ margin: 10 }}>
                        <Question question={questionSource.chiefQuestion} />
                    </View>

                    <Swiper
                        style={styles.wrapper}
                        dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                        activeDot={<View style={{ backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                        paginationStyle={{ bottom: 10 }}
                        loop={false}>
                        <View style={styles.card}>
                            <AnswerGeneralChoices
                                question={questionSource.chiefQuestion}
                                answers={this.firstHalfChiefAnswer}
                                currentPatientAnswer={this.state.currentPatientAnswer}
                                answerNumberSelected={this.state.answerNumberSelected}
                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                _setAnswerNumberSelected={this._setAnswerNumberSelected}
                                _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                            {/*<FlatList
                                style={{ flex: 1 }}
                                data={this.firstHalfChiefAnswer}
                                numColumns={2}
                                keyExtractor={(item, index) => item.title}
                                renderItem={(item, index) => (
                                    <AnswerGeneralChoices
                                        question={questionSource.chiefQuestion}
                                        choices={item}
                                        currentPatientAnswer={this.state.currentPatientAnswer}
                                        answerNumberSelected={this.state.answerNumberSelected}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                        _setAnswerNumberSelected={this._setAnswerNumberSelected}
                                        _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                                )
                                }

                            />*/}
                        </View>

                        <View style={styles.card}>
                            <AnswerGeneralChoices
                                question={questionSource.chiefQuestion}
                                answers={this.secondHalfChiefAnswer}
                                currentPatientAnswer={this.state.currentPatientAnswer}
                                answerNumberSelected={this.state.answerNumberSelected}
                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                _setAnswerNumberSelected={this._setAnswerNumberSelected}
                                _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                            {/*<FlatList
                                style={{ flex: 1 }}
                                data={this.secondHalfChiefAnswer}
                                numColumns={2}
                                keyExtractor={(item, index) => item.title}
                                renderItem={(item, index) => (
                                    <AnswerGeneralChoices
                                        question={questionSource.chiefQuestion}
                                        choices={item}
                                        currentPatientAnswer={this.state.currentPatientAnswer}
                                        answerNumberSelected={this.state.answerNumberSelected}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                        _setAnswerNumberSelected={this._setAnswerNumberSelected}
                                        _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                                )}
                            />*/}
                        </View>

                    </Swiper>

                    <Button
                        icon={{ name: 'arrow-right', type: 'material-community' }}
                        onPress={this._next}
                        rounded
                        raised
                        backgroundColor="#80cdc0"
                        buttonStyle={styles.nextButton}
                    />
                    {/*</ScrollView>*/}
                </View>
            </ThemeProvider >
        )
    }

    //TODO: render 1 choice
    _renderSpecificQuestions = () => {

        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.containerSpecific}>
                    <ScrollView>
                        <Question question={this.state.currentQuestion} />
                        { //Check type of question
                            (
                                () => {
                                    if (this.state.currentQuestion.type === "MultiChoice") {
                                        return this.state.currentQuestion.answer.map((answer, index) => {
                                            //Answer is choice or emergency or specific gender
                                            if (answer.type === "c" || answer.type === "E" || (answer.type === User.info.sex) || (answer.type === "o")) {
                                                if (answer.type === "o") {
                                                    return (
                                                        <AnswerOther
                                                            answer={answer}
                                                            key={answer.title}
                                                            currentPatientAnswer={this.state.currentPatientAnswer}
                                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                                            _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer}
                                                            _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <AnswerMultiChoices
                                                            answer={answer}
                                                            key={answer.title}
                                                            currentPatientAnswer={this.state.currentPatientAnswer}
                                                            multipleChoiceCurrentAnswer={this.state.multipleChoiceCurrentAnswer}
                                                            answerNumberSelected={this.state.answerNumberSelected}
                                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                                            _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer}
                                                            _setAnswerNumberSelected={this._setAnswerNumberSelected} />
                                                    )
                                                }
                                            }
                                        }
                                        )
                                    }
                                    else if (this.state.currentQuestion.type === "Choice") {
                                        //Time question
                                        if (this.state.currentQuestion.answer[0].type === "T") {
                                            return (
                                                <AnswerTime
                                                    answer={this.state.currentQuestion.answer[0]}
                                                    _setTime={this._setTime}
                                                    _setTimeUnit={this._setTimeUnit}
                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer} />
                                            )
                                        }
                                        //Choice and Other 
                                        else {
                                            return this.state.currentQuestion.answer.map((answer, index) => {
                                                if (answer.type === "c" || answer.type === "E") {
                                                    return (
                                                        <AnswerChoices
                                                            answer={answer}
                                                            key={answer.title}
                                                            currentPatientAnswer={this.state.currentPatientAnswer}
                                                            answerNumberSelected={this.state.answerNumberSelected}
                                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                                            _setAnswerNumberSelected={this._setAnswerNumberSelected} />
                                                    )
                                                }
                                            })
                                        }
                                    }

                                }
                            )() //immediately-invoked function expreesion, so I can use if-else in JSX
                        }
                        <View style={styles.containerButton}>
                            <Button
                                icon={{ name: 'arrow-left', type: 'material-community' }}
                                onPress={this._back}
                                rounded
                                raised
                                backgroundColor="#80cdc0"
                                buttonStyle={styles.nextButton} />
                            {
                                //Next button
                                this.state.currentQuestion.next !== "end" ?
                                    <Button
                                        icon={{ name: 'arrow-right', type: 'material-community' }}
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
            </ThemeProvider>
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
    containerMultipleChoice: {
        flexDirection: 'row'
    },
    nextButton: {
        marginVertical: 30,
        alignSelf: 'flex-end'
    },
    card: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 10,
    },
    wrapper: {

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
