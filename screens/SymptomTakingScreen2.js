// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Navigator, Image, TouchableHighlight, NativeModules, ListView, TextInput, ToastAndroid, ScrollView, Picker, FlatList, Dimensions } from 'react-native';
// import { BottomNavigation, COLOR, ThemeProvider, Toolbar, Checkbox, RadioButton, Icon, IconToggle, ListItem } from 'react-native-material-ui';
// import VectorIcon from 'react-native-vector-icons/MaterialIcons'
// import { Button, Avatar, Card } from 'react-native-elements'
// import Swiper from 'react-native-swiper'
// import questionSource from '../UcareData/PITShow/FormQuestions3'
// import Question from '../components/Question.symptom'
// import AnswerGeneralChoices from '../components/AnswerGeneralChoices.symptom'
// import AnswerChoices from '../components/AnswerChoices.symptom'
// import AnswerMultiChoices from '../components/AnswerMultiChoices.symptom'
// import AnswerTime from '../components/AnswerTime.symptom'
// import AnswerOther from '../components/AnswerOther.symptom'
// import ProgressBar from '../components/ProgressBar'
// import QuestionDisplay from '../components/QuestionDisplay'
// import User from '../UcareData/mockdata' //mock user from firebase => KOPAI

// var _ = require('lodash')

// //TODO: how to check if user answer both questions

// export default class SymptomTakingScreen extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             questionNumber: 1,
//             answerNumberSelected: 0,
//             allPatientAnswers: [],
//             caseID: "",
//             currentPatientAnswer: "",
//             answersForThePage: [], //store 1 or 2 answer from each page 
//             currentQuestion: questionSource.chiefQuestion,
//             questionHistory: [questionSource.chiefQuestion],
//             questionBasedOnChiefComplaint: "",
//             chiefComplaint: "", //main symptom
//             progress: 0,
//             currentQuestionSet: []
//         }
//         //For separate choices into 2 cards
//         this.len = questionSource.chiefQuestion.answer.length
//         this.sortedChiefAnswer = questionSource.chiefQuestion.answer.slice()
//         this.sortedChiefAnswer = this.sortedChiefAnswer.filter((answer) => answer.sex === "MF" || answer.sex === User.info.sex) //filter by sex
//         this.sortedChiefAnswer = _.sortBy(this.sortedChiefAnswer, ['title'])
//         this.firstHalfChiefAnswer = this.sortedChiefAnswer.slice(0, this.len / 2)
//         this.secondHalfChiefAnswer = this.sortedChiefAnswer.slice(this.len / 2, this.len)

//         this.lenOfSpecificQuestion

//     }

//     _setAnswersForThePage = async (answer, method) => {

//         if (method === "add") {
//             let answersForThePage = this.state.answersForThePage
//             answersForThePage.push(answer)
//             await this.setState({
//                 answersForThePage: _.uniq(answersForThePage)
//             })
//         }
//         else if (method === "delete") {
//             let answersForThePage = this.state.answersForThePage
//             removedArray = answersForThePage.filter((selectedAnswer) => {
//                 return selectedAnswer.title !== answer.title
//             })
//             await this.setState({
//                 answersForThePage: _.compact(removedArray) //remove falsy value
//             })
//         }

//         console.log("answer for the page = ", this.state.answersForThePage)
//     }

//     _setCurrentPatientAnswer = async (currentPatientAnswer) => {
//         await this.setState({ currentPatientAnswer })
//         console.log("current answer = ", this.state.currentPatientAnswer)
//     }

//     // _setMultipleChoiceCurrentAnswer = async (answer, method) => {
//     //     //user click new answer
//     //     if (method === "add") {
//     //         let newMultiple = this.state.multipleChoiceCurrentAnswer
//     //         newMultiple.push(answer)
//     //         await this.setState({
//     //             multipleChoiceCurrentAnswer: _.uniq(newMultiple)
//     //         })
//     //     }
//     //     //user click already selected answer
//     //     else if (method === "delete") {
//     //         let multipleChoiceCurrentAnswer = this.state.multipleChoiceCurrentAnswer
//     //         removedMultipleChoice = multipleChoiceCurrentAnswer.filter((selectedAnswer) => {
//     //             return selectedAnswer.title !== answer.title
//     //         })
//     //         await this.setState({ multipleChoiceCurrentAnswer: removedMultipleChoice })
//     //     }
//     //     console.log("multiple current answer = ", this.state.multipleChoiceCurrentAnswer)
//     // }

//     _setAnswerNumberSelected = async (answerNumberSelected) => {
//         await this.setState({ answerNumberSelected })
//     }

//     // _setTime = async (time) => {
//     //     this.setState({ time })
//     // }

//     // _setTimeUnit = (timeUnit) => {
//     //     this.setState({ timeUnit })
//     // }

//     _setOtherPatientAnswer = (otherPatientAnswer) => {
//         this.setState({ otherPatientAnswer })
//         console.log("otherPatientAnswer = ", this.state.otherPatientAnswer)
//     }

//     // _setDate = (date) => {
//     //     this.setState({ date })
//     // }
//     //Progress shows when ask specific questions
//     _calculateProgress = () => {
//         let numberOfDoneQuestion = this.state.questionNumber - 1 //Because it include chiefQuestion
//         let progress = (numberOfDoneQuestion * 1.0) / this.lenOfSpecificQuestion
//         this.setState({ progress })
//     }

//     _next = async () => {
//         //Chief question
//         if (this.state.currentQuestion.title === "อาการสำคัญ") {
//             if (this.state.currentPatientAnswer !== "") {
//                 let questionNumber = this.state.questionNumber + 1
//                 let next = this.state.currentPatientAnswer.next
//                 let history = this.state.questionHistory
//                 history.push(this.state.currentQuestion)

//                 //อื่นๆ
//                 if (next === "end") {
//                     let allPatientAnswers = this.state.allPatientAnswers
//                     allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.otherPatientAnswer)

//                     await this.setState({
//                         chiefComplaint: this.state.otherPatientAnswer,
//                         allPatientAnswers,
//                         answersForThePage: [],
//                         answerNumberSelected: 0,
//                         currentPatientAnswer: "",
//                         multipleChoiceCurrentAnswer: [],
//                         otherPatientAnswer: "",
//                         questionNumber: 1,
//                         questionHistory: _.uniq(history),
//                         currentQuestion: questionSource.chiefQuestion,
//                         time: "",
//                         timeUnit: "",
//                         date: "",
//                         progress: 0
//                     })
//                     this._goToConfirm()
//                 }

//                 //Choose pre-defined choice
//                 else {
//                     let nextQuestion = Object.keys(questionSource[next])[0]
//                     nextQuestion = questionSource[next][nextQuestion]
//                     console.log("next question = ", nextQuestion)
//                     let allPatientAnswers = this.state.allPatientAnswers
//                     allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.currentPatientAnswer.title)

//                     await this.setState({
//                         chiefComplaint: this.state.currentPatientAnswer.title,
//                         questionBasedOnChiefComplaint: questionSource[next],
//                         questionNumber,
//                         questionHistory: _.uniq(history),
//                         currentQuestion: nextQuestion,
//                         currentQuestionSet: nextQuestion,
//                         currentPatientAnswer: "",
//                         multipleChoiceCurrentAnswer: [],
//                         answersForThePage: [],
//                         allPatientAnswers,
//                         otherPatientAnswer: "",
//                         answerNumberSelected: 0,
//                     })
//                     this.lenOfSpecificQuestion = Object.keys(this.state.questionBasedOnChiefComplaint).length
//                     console.log('this.state.questionBasedOnChiefComplaint = ', this.state.questionBasedOnChiefComplaint)
//                     console.log("len for progress = ", this.lenOfSpecificQuestion)
//                     console.log("_next = ", this.state)
//                 }
//             }
//             else {
//                 ToastAndroid.showWithGravityAndOffset('กรุณาระบุอาการสำคัญ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
//             }
//         }

//         //user has answered
//         else if (_.isEmpty(this.state.answersForThePage) === false) {
//             //Emergency
//             if (this.state.answersForThePage.some((answer) => answer.type === "E" || answer.type === "U")) {
//                 this._goToEmergency()
//             }

//             //Not emergency
//             else {
//                 //each questionSet and its answers will point to next questionSet, 
//                 //so I can choose any answer in that page's answers
//                 //already handle in case of emergency & urgency 
//                 let groupAnswers = _.chain(this.state.answersForThePage)
//                     .groupBy("question")
//                     .toPairs()
//                     .map(function (currentItem) {
//                         return _.zipObject(['questionTitle', 'answers'], currentItem)
//                     })
//                     .value()
//                 console.log("groupAnswer ", groupAnswers)

//                 let pageAnswers = this.state.answersForThePage
//                 let lastAnswer = pageAnswers.pop()
//                 let questionNumber = this.state.questionNumber + 1
//                 let next = lastAnswer.next
//                 let history = this.state.questionHistory
//                 history.push(this.state.currentQuestionSet)
//                 let allPatientAnswers = this.state.allPatientAnswers
//                 let nextQuestionSet

//                 let allAnswers = this.state.allPatientAnswers
//                 groupAnswers.map((group) => {
//                     let str = ""
//                     str = str + group.questionTitle + ": "
//                     group.answers.map((answer) => {
//                         str = str + " " + answer.title
//                     })
//                     allAnswers.push(str)
//                 })
//                 console.log("all answer = ", allAnswers)


//                 //last question
//                 if (next === "end") {
//                     await this.setState({
//                         questionNumber: 1,
//                         questionHistory: _.uniq(history),
//                         currentQuestion: "",
//                         currentQuestionSet: [],
//                         otherPatientAnswer: "",
//                         allPatientAnswers: allAnswers,
//                         answerNumberSelected: 0,
//                         progress: 0
//                     })
//                     this._goToConfirm()
//                 }
//                 //have next questionSet
//                 else if (next !== "end") {
//                     nextQuestionSet = this.state.questionBasedOnChiefComplaint[next]
                    
//                     await this.setState({
//                         questionNumber,
//                         questionHistory: _.uniq(history),
//                         allPatientAnswers: allAnswers,
//                         currentQuestion: nextQuestionSet,
//                         currentQuestionSet: nextQuestionSet
//                     })
//                     await this.refs.questionDisplay.reset()
//                     this._calculateProgress()
                    
//                     console.log("next ", this.state)
//                 }

//             }
//         }
//         //user doesn't answer
//         else if (_.isEmpty(this.state.answersForThePage) === true) {
//             ToastAndroid.showWithGravityAndOffset('กรุณาตอบคำถามให้ครบ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
//         }
//     }

//     _back = async () => {
//         let prevQuestion = this.state.questionHistory.pop()
//         let questionNumber = this.state.questionNumber - 1
//         //When only chiefQuestion left in allPatientAnswers
//         if (this.state.allPatientAnswers.length <= 1) {
//             await this.setState({
//                 currentQuestion: prevQuestion,
//                 questionNumber,
//                 allPatientAnswers: [],
//                 progress: 0,
//                 currentPatientAnswer: "",
//                 multipleChoiceCurrentAnswer: [],
//                 otherPatientAnswer: "",
//                 time: "",
//                 timeUnit: "",
//                 chiefComplaint: ""
//             })
//         }
//         //When there are more
//         else {
//             let allPatientAnswers = this.state.allPatientAnswers
//             allPatientAnswers.pop()
//             await this.setState({
//                 currentQuestion: prevQuestion,
//                 questionNumber,
//                 allPatientAnswers,
//                 currentPatientAnswer: "",
//                 multipleChoiceCurrentAnswer: [],
//                 otherPatientAnswer: "",
//                 time: "",
//                 timeUnit: ""
//             })
//             this._calculateProgress()
//         }
//         console.log("back ", this.state)
//     }

//     //KOPAI: go to emrgency screen
//     _goToEmergency = () => {
//         ToastAndroid.showWithGravityAndOffset('ฉุกเฉิน', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
//         // this.props.navigator.push({
//         //     screen: 'example.EmergencyScreen', animationType: 'fade', title: "ฉุกเฉิน",
//         //     navigatorStyle: { navBarBackgroundColor: '#7ec8ba', navBarTextColor: '#ffffff' },
//         // })
//     }

//     //KOPAI go to confirm screen
//     //when uncomment navigator it should has no error
//     _goToConfirm = () => {
//         ToastAndroid.showWithGravityAndOffset('คำถามสุดท้าย', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
//         console.log("confirm ", this.state.chiefComplaint, this.state.allPatientAnswers)
//         // this.props.navigator
//         //     .push(
//         //     {
//         //         screen: 'example.ConfirmCaseScreen',
//         //         animationType: 'fade',
//         //         title: "ยืนยันอาการ",
//         //         passProps: { patientCase: this.state.allPatientAnswer, chiefComplaint: this.state.chiefComplaint },
//         //         navigatorStyle: {
//         //             navBarBackgroundColor: '#7ec8ba',
//         //             navBarTextColor: '#ffffff'
//         //         },
//         //     })
//     }

//     //TODO: it doesn't look good when device is in landscape mode
//     _renderGeneralQuestions = () => {
//         return (
//             <ThemeProvider uiTheme={uiTheme}>
//                 <View style={styles.container}>

//                     {/*<ScrollView style={{ flex: 1, flexGrow: 1 }} >*/}
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <Avatar
//                             medium
//                             rounded
//                             source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }} //KOPAI Change to User.photoURL
//                             activeOpacity={0.7}
//                         />
//                         {/*KOPAI: Change to user real data*/}
//                         <Text style={{ fontSize: 18, fontFamily: 'Kanit-Regular', color: 'black', marginLeft: 5 }}>{`${User.name.title} ${User.name.firstName} ${User.name.lastName}`}</Text>
//                     </View>

//                     <View style={{ margin: 10 }}>
//                         <Question question={questionSource.chiefQuestion} />
//                     </View>

//                     <Swiper
//                         style={styles.wrapper}
//                         dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
//                         activeDot={<View style={{ backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
//                         paginationStyle={{ bottom: 10 }}
//                         loop={false}>
//                         <View style={styles.card}>
//                             <AnswerGeneralChoices
//                                 question={questionSource.chiefQuestion}
//                                 answers={this.firstHalfChiefAnswer}
//                                 currentPatientAnswer={this.state.currentPatientAnswer}
//                                 answerNumberSelected={this.state.answerNumberSelected}
//                                 _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
//                                 _setAnswerNumberSelected={this._setAnswerNumberSelected}
//                                 _setOtherPatientAnswer={this._setOtherPatientAnswer} />
//                         </View>

//                         <View style={styles.card}>
//                             <AnswerGeneralChoices
//                                 question={questionSource.chiefQuestion}
//                                 answers={this.secondHalfChiefAnswer}
//                                 currentPatientAnswer={this.state.currentPatientAnswer}
//                                 answerNumberSelected={this.state.answerNumberSelected}
//                                 _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
//                                 _setAnswerNumberSelected={this._setAnswerNumberSelected}
//                                 _setOtherPatientAnswer={this._setOtherPatientAnswer} />
//                         </View>

//                     </Swiper>

//                     <Button
//                         icon={{ name: 'arrow-right', type: 'material-community' }}
//                         onPress={this._next}
//                         rounded
//                         raised
//                         backgroundColor="#80cdc0"
//                         buttonStyle={styles.nextButton}
//                     />
//                     {/*</ScrollView>*/}
//                 </View>
//             </ThemeProvider >
//         )
//     }

//     //TODO: render multiChoice in direction row
//     _renderSpecificQuestions = () => {
//         return (
//             <ThemeProvider uiTheme={uiTheme}>
//                 <View style={styles.containerSpecific}>
//                     <ScrollView style={{flex: 1}}>
//                         <QuestionDisplay
//                             ref="questionDisplay"
//                             questionSet={this.state.currentQuestionSet}
//                             answersForThePage={this.state.answersForThePage}
//                             _setAnswersForThePage={this._setAnswersForThePage} />

//                         <View style={styles.containerProgress}>
//                             <ProgressBar progress={this.state.progress} />
//                         </View>

//                         <View style={styles.containerButton}>
//                             <Button
//                                 icon={{ name: 'arrow-left', type: 'material-community' }}
//                                 onPress={this._back}
//                                 rounded
//                                 raised
//                                 backgroundColor="#80cdc0"
//                                 buttonStyle={styles.nextButton} />
//                             {
//                                 //Next button
//                                 this.state.currentQuestion.next !== "end" ?
//                                     <Button
//                                         icon={{ name: 'arrow-right', type: 'material-community' }}
//                                         onPress={this._next}
//                                         rounded
//                                         raised
//                                         backgroundColor="#80cdc0"
//                                         buttonStyle={styles.nextButton} /> :
//                                     <Button
//                                         title="     ยืนยัน    "
//                                         onPress={this._next}
//                                         rounded
//                                         raised
//                                         backgroundColor="#80cdc0"
//                                         buttonStyle={styles.nextButton} />
//                             }
//                         </View>
//                     </ScrollView>
//                 </View>
//             </ThemeProvider>
//         )
//     }

//     render() {
//         if (this.state.questionNumber === 1)
//             return this._renderGeneralQuestions()
//         else
//             return this._renderSpecificQuestions()
//     }

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-around', //if space-evenly, it will look good in landscape, but in portrait the AnswerChoices will exceed the device's screen
//         alignItems: "stretch", //it alignItems = center, scrollview will not expand full width
//         margin: 10,

//     },
//     containerSpecific: {
//         flex: 1,
//         justifyContent: 'center', //if space-evenly, it will look good in landscape, but in portrait the AnswerChoices will exceed the device's screen
//         alignItems: "stretch", //it alignItems = center, scrollview will not expand full width
//         margin: 10,
//     },
//     containerButton: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-end'
//     },
//     containerProgress: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 20
//     },
//     containerMultipleChoice: {
//         flexDirection: 'row'
//     },
//     nextButton: {
//         marginVertical: 30,
//         alignSelf: 'flex-end'
//     },
//     card: {
//         flex: 1,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderBottomWidth: 0,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 1,
//         // marginLeft: 5,
//         // marginRight: 5,
//         // marginTop: 10,
//     },
//     wrapper: {

//     }
// })

// const uiTheme = {
//     palette: {
//         primaryColor: "#7ec8ba",

//     },
//     toolbar: {
//         container: {
//             height: 45
//         }
//     }

// }
