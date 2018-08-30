import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, Image, TouchableHighlight, NativeModules, ListView, TextInput, KeyboardAvoidingView, ToastAndroid, ImageBackground, ScrollView, Picker, FlatList, Dimensions } from 'react-native';
import { BottomNavigation, COLOR, ThemeProvider, Icon, IconToggle, ListItem } from 'react-native-material-ui';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
import { Button, Avatar, Card } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import questionSource from '../UcareData/PITShow/FormQuestions4'
import pages from '../UcareData/PITShow/Pages'
import Question from '../components/Question.symptom'
import AnswerGeneralChoices from '../components/AnswerGeneralChoices.symptom'
import ProgressBar from '../components/ProgressBar'
import QuestionDisplay from '../components/QuestionDisplay2'
import User from '../UcareData/mockdata' //mock user from firebase => KOPAI

var _ = require('lodash')

//TODO: how to check if user answer both questions

export default class SymptomTakingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionNumber: 1,
            answerNumberSelected: 0,
            allPatientAnswers: [],
            caseID: "",
            currentPatientAnswer: "",
            answersForThePage: [], //store 1 or 2 answer from each page 
            currentQuestion: questionSource.chiefQuestion,
            questionHistory: [questionSource.chiefQuestion],
            pageHistory: [],
            questionBasedOnChiefComplaint: "",
            chiefComplaint: "", //main symptom
            progress: 0,
            currentQuestionSet: [],
            currentPage: "",
            pagesBasedOnChiefComplaint: "",
            check: [false, false]
        }
        //For separate choices into 2 cards
        this.len = questionSource.chiefQuestion.answer.length
        this.sortedChiefAnswer = questionSource.chiefQuestion.answer.slice()
        this.sortedChiefAnswer = this.sortedChiefAnswer.filter((answer) => answer.sex === "MF" || answer.sex === User.info.sex) //filter by sex
        this.sortedChiefAnswer = _.sortBy(this.sortedChiefAnswer, ['title'])
        this.firstHalfChiefAnswer = this.sortedChiefAnswer.slice(0, this.len / 2)
        this.secondHalfChiefAnswer = this.sortedChiefAnswer.slice(this.len / 2, this.len)

        this.lenOfSpecificQuestion

    }

    _setAnswersForThePage = async (answer, method) => {

        if (method === "add") {
            let answersForThePage = this.state.answersForThePage
            answersForThePage.push(answer)
            await this.setState({
                answersForThePage: _.uniq(answersForThePage) //TODO: make it deep check
            })
        }
        else if (method === "delete") {
            let answersForThePage = this.state.answersForThePage
            removedArray = answersForThePage.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({
                answersForThePage: _.compact(removedArray) //remove falsy value
            })
        }

        console.log("answer for the page = ", this.state.answersForThePage)
    }

    _setCurrentPatientAnswer = async (currentPatientAnswer) => {
        await this.setState({ currentPatientAnswer })
        console.log("current answer = ", this.state.currentPatientAnswer)
    }

    _setCheck = (index, value) => {
        let check = this.state.check
        check[index] = value
        this.setState({
            check
        })
    }

    // _setMultipleChoiceCurrentAnswer = async (answer, method) => {
    //     //user click new answer
    //     if (method === "add") {
    //         let newMultiple = this.state.multipleChoiceCurrentAnswer
    //         newMultiple.push(answer)
    //         await this.setState({
    //             multipleChoiceCurrentAnswer: _.uniq(newMultiple)
    //         })
    //     }
    //     //user click already selected answer
    //     else if (method === "delete") {
    //         let multipleChoiceCurrentAnswer = this.state.multipleChoiceCurrentAnswer
    //         removedMultipleChoice = multipleChoiceCurrentAnswer.filter((selectedAnswer) => {
    //             return selectedAnswer.title !== answer.title
    //         })
    //         await this.setState({ multipleChoiceCurrentAnswer: removedMultipleChoice })
    //     }
    //     console.log("multiple current answer = ", this.state.multipleChoiceCurrentAnswer)
    // }

    _setAnswerNumberSelected = async (answerNumberSelected) => {
        await this.setState({ answerNumberSelected })
    }

    // _setTime = async (time) => {
    //     this.setState({ time })
    // }

    // _setTimeUnit = (timeUnit) => {
    //     this.setState({ timeUnit })
    // }

    _setOtherPatientAnswer = (otherPatientAnswer) => {
        this.setState({ otherPatientAnswer })
        console.log("otherPatientAnswer = ", this.state.otherPatientAnswer)
    }


    //Progress shows when ask specific questions
    _calculateProgress = () => {
        let numberOfDoneQuestion = this.state.questionNumber - 1 //Because it include chiefQuestion
        let progress = (numberOfDoneQuestion * 1.0) / this.lenOfSpecificQuestion
        this.setState({ progress })
    }

    _next = async () => {
        //Chief question
        if (this.state.currentQuestion.title === "อาการสำคัญ") {
            if (this.state.currentPatientAnswer !== "") {
                let questionNumber = this.state.questionNumber + 1
                let next = this.state.currentPatientAnswer.next
                let history = this.state.questionHistory
                history.push(this.state.currentQuestion)

                //อื่นๆ
                if (next === "end") {
                    let allPatientAnswers = this.state.allPatientAnswers
                    allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.otherPatientAnswer)

                    await this.setState({
                        chiefComplaint: this.state.otherPatientAnswer,
                        allPatientAnswers,
                        answersForThePage: [],
                        answerNumberSelected: 0,
                        currentPatientAnswer: "",
                        multipleChoiceCurrentAnswer: [],
                        otherPatientAnswer: "",
                        questionNumber: 1,
                        questionHistory: _.uniq(history),
                        pageHistory: [],
                        currentQuestion: questionSource.chiefQuestion,
                        time: "",
                        timeUnit: "",
                        date: "",
                        progress: 0
                    })
                    this._goToConfirm()
                }

                //Choose pre-defined choice
                else {
                    let nextPage = pages[next].page_1
                    let nextQuestionNames = nextPage.questionSet
                    let nextQuestionSet = []
                    //find questions in that page
                    nextQuestionNames.map((name) => {
                        Object.entries(questionSource[next]).forEach(
                            ([key, value]) => {
                                if (key === name) {
                                    nextQuestionSet.push(value)
                                }
                            }
                        )
                    })

                    console.log("next page = ", nextPage)
                    console.log("next Qset= ", nextQuestionSet)
                    let allPatientAnswers = this.state.allPatientAnswers
                    allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.currentPatientAnswer.title)
                    let pageHistory = this.state.pageHistory
                    pageHistory.push(pages[next].page_1) 

                    await this.setState({
                        chiefComplaint: this.state.currentPatientAnswer.title,
                        questionBasedOnChiefComplaint: questionSource[next],
                        pagesBasedOnChiefComplaint: pages[next],
                        questionNumber,
                        questionHistory: _.uniq(history),
                        pageHistory: _.uniq(pageHistory),
                        currentQuestion: nextQuestionSet,
                        currentQuestionSet: nextQuestionSet,
                        currentPage: pages[next].page_1,
                        currentPatientAnswer: "",
                        multipleChoiceCurrentAnswer: [],
                        answersForThePage: [],
                        allPatientAnswers,
                        otherPatientAnswer: "",
                        answerNumberSelected: 0,
                    })
                    this.lenOfSpecificQuestion = Object.keys(this.state.questionBasedOnChiefComplaint).length
                    console.log("len for progress = ", this.lenOfSpecificQuestion)
                    console.log("_next = ", this.state)
                }
            }
            else {
                ToastAndroid.showWithGravityAndOffset('กรุณาระบุอาการสำคัญ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }
        }

        //user has answered
        else if (_.isEmpty(this.state.answersForThePage) === false) {
            //Emergency
            if (this.state.answersForThePage.some((answer) => answer.type === "E" || answer.type === "EM"|| answer.type === "EF"|| answer.type === "U"|| answer.type === "UM"|| answer.type === "UF")) {
                this._goToEmergency()
            }

            //Not emergency
            else {
                //each questionSet and its answers will point to next questionSet, 
                //so I can choose any answer in that page's answers
                //already handle in case of emergency & urgency 
                let groupAnswers = _.chain(this.state.answersForThePage)
                    .groupBy("question")
                    .toPairs()
                    .map(function (currentItem) {
                        return _.zipObject(['questionTitle', 'answers'], currentItem)
                    })
                    .value()
                groupAnswers = groupAnswers.filter((answer) => answer.questionTitle !== "undefined")

                //user doesn't answer all the questions in page
                if (groupAnswers.length !== this.state.currentQuestionSet.length) {
                    ToastAndroid.showWithGravityAndOffset('กรุณาตอบคำถามให้ครบ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                    return
                }

                let questionNumber = this.state.questionNumber + this.state.currentQuestionSet.length
                let history = this.state.questionHistory
                history.push(this.state.currentQuestionSet)
                let pageHistory = this.state.pageHistory
                pageHistory.push(this.state.currentPage)
                let nextQuestionSet = []
                let nextPage

                //have special answer that will go to another direction
                if (_.includes(_.keys(this.state.currentPage), "nextSpecial")) {
                    console.log("nextSpecial")
                    this.state.currentPage.nextSpecial.map((answer) => {
                        this.state.answersForThePage.map((a) => {
                            if (answer.title === a.title) {
                                nextPage = answer.next
                                console.log("special = ", nextPage, answer.title, this.state.currentPatientAnswer.title)
                            }
                        })

                    })
                    if (!nextPage) {
                        nextPage = this.state.currentPage.nextNormal.next
                    }
                }
                //normal answer
                else {
                    console.log("nextNormal")
                    nextPage = this.state.currentPage.nextNormal.next
                }

                let allPatientAnswers = this.state.allPatientAnswers
                groupAnswers.map((group) => {
                    let str = ""
                    str = str + group.questionTitle + ": "
                    group.answers.map((answer) => {
                        str = str + " " + answer.title
                    })
                    str = str.replace('อื่นๆ', '') //remove the word อื่นๆ
                    str = str.replace('วว/ดด/ปปปป', '')
                    str = str.replace('วันเดือนปี', '')
                    str = str.replace('วันเดือน', '')
                    str = str.replace('เวลา', '')
                    str = str.replace('ถ่ายรูป', '')
                    allPatientAnswers.push(str)
                })
                console.log("all answer = ", allPatientAnswers)


                //last question
                if (nextPage === "end") {
                    await this.setState({
                        questionNumber: 1,
                        questionHistory: _.uniq(history),
                        pageHistory: _.uniq(pageHistory),
                        questionBasedOnChiefComplaint: "",
                        pagesBasedOnChiefComplaint: "",
                        currentQuestion: "",
                        currentQuestionSet: [],
                        currentPage: "",
                        otherPatientAnswer: "",
                        allPatientAnswers,
                        answersForThePage: [],
                        answerNumberSelected: 0,
                        progress: 0
                    })
                    this._goToConfirm()
                }
                //have next questionSet
                else if (nextPage !== "end") {
                    let questionBasedOnSexCount = 0
                    let nextPageObj = this.state.pagesBasedOnChiefComplaint[nextPage]
                    let nextQuestionNames = nextPageObj.questionSet
                    let nextQuestionSet = []
                    //find questions in that page
                    nextQuestionNames.map(async (name) => {
                        Object.entries(this.state.questionBasedOnChiefComplaint).forEach(
                            async ([key, value]) => {
                                if (key === name) {
                                    //question which specific sex
                                    if (value.hasOwnProperty("sex")) {
                                        //user has the right sex
                                        if (value.sex === User.info.sex) {
                                            nextQuestionSet.push(value)
                                        }
                                        //user doesn't have the right sex
                                        
                                        else {
                                            // console.log("COUNT = ", questionBasedOnSexCount, nextQuestionNames.length)
                                            // questionBasedOnSexCount++
                                            // //if both of the question in the next page are based on sex
                                            // if (questionBasedOnSexCount === nextQuestionNames.length) {
                                            //     let nextPageObjAfterSkip = this.state.pagesBasedOnChiefComplaint[nextPageObj.nextNormal.next]
                                            //     console.log("__", nextPageObjAfterSkip)
                                            //     let nextQuestionNamesAfterSkip = nextPageObjAfterSkip.questionSet
                                            //     let nextQuestionSetAfterSkip = []
                                            //     nextQuestionNamesAfterSkip.map((name) => {
                                            //         Object.entries(ุthis.state.questionBasedOnChiefComplaint).forEach(
                                            //             ([key, value]) => {
                                            //                 if (key === name) {
                                            //                     nextQuestionSetAfterSkip.push(value)
                                            //                 }
                                            //             }
                                            //         )
                                            //     })
                                            //     let test = this.state.pagesBasedOnChiefComplaint[nextPageObj.nextNormal.next]
                                            //     console.log("YO = ", nextQuestionSetAfterSkip, this.state.pagesBasedOnChiefComplaint[nextPageObj.nextNormal.next])
                                            //     await this.setState({
                                            //         questionNumber,
                                            //         questionHistory: _.uniq(history),
                                            //         pageHistory: _.uniq(page),
                                            //         allPatientAnswers,
                                            //         answersForThePage: [],
                                            //         currentQuestion: nextQuestionSetAfterSkip,
                                            //         currentQuestionSet: nextQuestionSetAfterSkip,
                                            //         currentPage: test,
                                            //         otherPatientAnswer: ""
                                            //     })
                                            //     console.log("SKIP = ", this.state)
                                            //     await this.refs.questionDisplay.reset()
                                            //     this._calculateProgress()
                                            //     return
                                            // }
                                            //skip this question (skip page)
                                        }
                                    }
                                    //does not specific
                                    else {
                                        nextQuestionSet.push(value)
                                    }
                                }
                            }
                        )
                    })
                    
                    let currentPage = this.state.currentPage
                    await this.setState({
                        questionNumber,
                        questionHistory: _.uniq(history),
                        pageHistory: _.uniq(pageHistory),
                        allPatientAnswers,
                        answersForThePage: [],
                        currentQuestion: nextQuestionSet,
                        currentQuestionSet: nextQuestionSet,
                        currentPage: this.state.pagesBasedOnChiefComplaint[nextPage],
                        otherPatientAnswer: ""
                    })

                    await this.refs.questionDisplay.reset()
                    this._calculateProgress()

                    console.log("next ", this.state)
                }

            }
        }
        //user doesn't answer
        else if (_.isEmpty(this.state.answersForThePage) === true) {
            ToastAndroid.showWithGravityAndOffset('กรุณาตอบคำถามให้ครบ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
        }
    }

    _back = async () => {
        let pageHistory = this.state.pageHistory
        let prevPage = pageHistory.pop()
        let prevQuestionSet = this.state.questionHistory.pop()
        let questionNumber = this.state.questionNumber - prevQuestionSet.length
        //When only chiefQuestion are left in allPatientAnswers
        if (this.state.allPatientAnswers.length <= 1) {
            await this.setState({
                currentQuestion: prevQuestionSet,
                currentQuestionSet: prevQuestionSet,
                questionNumber: 1, //back to chiefQuestion
                allPatientAnswers: [],
                progress: 0,
                currentPatientAnswer: "",
                multipleChoiceCurrentAnswer: [],
                otherPatientAnswer: "",
                time: "",
                timeUnit: "",
                chiefComplaint: ""
            })
        }
        // //When there are more
        else {
            let allPatientAnswers = this.state.allPatientAnswers
            if (prevQuestionSet.length === 1)
                allPatientAnswers.pop()
            else if (prevQuestionSet.length === 2) {
                allPatientAnswers.pop()
                allPatientAnswers.pop()
            }
            await this.setState({
                currentQuestion: prevQuestionSet,
                currentQuestionSet: prevQuestionSet,
                currentPage: prevPage,
                pageHistory,
                questionNumber,
                allPatientAnswers,
                currentPatientAnswer: "",
                multipleChoiceCurrentAnswer: [],
                otherPatientAnswer: "",
                time: "",
                timeUnit: ""
            })
            this._calculateProgress()
        }

      
        console.log("back ", this.state)
    }

    //KOPAI: go to emrgency screen
    _goToEmergency = () => {
        ToastAndroid.showWithGravityAndOffset('ฉุกเฉิน', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
        // this.props.navigator.push({
        //     screen: 'example.EmergencyScreen', animationType: 'fade', title: "ฉุกเฉิน",
        //     navigatorStyle: { navBarBackgroundColor: '#7ec8ba', navBarTextColor: '#ffffff' },
        // })
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

    _renderGeneralQuestions = () => {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/bg.png')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                            <View style={{ borderWidth: 2, borderColor: '#FFFFFF', height: 90, width: 90, borderRadius: 45, alignItems: 'center', justifyContent: 'center' }}>
                                <Avatar
                                    large
                                    rounded
                                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }} //KOPAI Change to User.photoURL
                                    activeOpacity={0.7}
                                    avatarStyle={{ borderColor: "#FFFFFF", borderWidth: 2 }}
                                />
                            </View>

                            {/*KOPAI: Change to user real data*/}
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Kanit-Regular', color: '#FFFFFF', marginLeft: 15 }}>{`${User.name.title} ${User.name.firstName} ${User.name.lastName}`}</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'Kanit-Regular', color: '#FFFFFF', marginLeft: 15 }}>{`ID :  ${User.nationalID}`}</Text>
                            </View>
                        </View>



                        <Swiper
                            style={styles.wrapper}
                            dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                            activeDot={<View style={{ backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                            paginationStyle={{ bottom: 10 }}
                            loop={false}>
                            <View style={styles.card}>
                                <View style={{ margin: 10 }}>
                                    <Question question={questionSource.chiefQuestion} />
                                </View>
                                <AnswerGeneralChoices
                                    question={questionSource.chiefQuestion}
                                    answers={this.firstHalfChiefAnswer}
                                    currentPatientAnswer={this.state.currentPatientAnswer}
                                    answerNumberSelected={this.state.answerNumberSelected}
                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                    _setAnswerNumberSelected={this._setAnswerNumberSelected}
                                    _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                            </View>

                            <View style={styles.card}>
                                <View style={{ margin: 10 }}>
                                    <Question question={questionSource.chiefQuestion} />
                                </View>
                                <AnswerGeneralChoices
                                    question={questionSource.chiefQuestion}
                                    answers={this.secondHalfChiefAnswer}
                                    currentPatientAnswer={this.state.currentPatientAnswer}
                                    answerNumberSelected={this.state.answerNumberSelected}
                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                    _setAnswerNumberSelected={this._setAnswerNumberSelected}
                                    _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                            </View>

                        </Swiper>

                        <Button
                            rightIcon={{ name: 'ios-arrow-forward-outline', type: 'ionicon', color: '#60ADA6' }}
                            title="ถัดไป"
                            fontFamily="Kanit-Regular"
                            onPress={this._next}
                            rounded
                            raised
                            color="#60ADA6"
                            backgroundColor="#FFFFFF"
                            buttonStyle={styles.nextButton}
                            containerViewStyle={{ backgroundColor: 'transparent' }}
                        />
                    </ImageBackground>
                </View>
            </ThemeProvider >
        )
    }

    //TODO: render multiChoice in direction row
    _renderSpecificQuestions = () => {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <KeyboardAvoidingView style={styles.containerSpecific}>
                    <ScrollView style={{ flex: 1 }}>

                        <QuestionDisplay
                            ref="questionDisplay"
                            questionSet={this.state.currentQuestionSet}
                            answersForThePage={this.state.answersForThePage}
                            check={this.state.check}
                            _setAnswersForThePage={this._setAnswersForThePage} />

                        <View style={styles.containerProgress}>
                            <ProgressBar progress={this.state.progress} />
                        </View>

                        <View style={styles.containerButton}>
                            <Button
                                icon={{ name: 'ios-arrow-back-outline', type: 'ionicon', color: '#60ADA6' }}
                                title="ย้อนกลับ"
                                fontFamily="Kanit-Regular"
                                onPress={this._back}
                                rounded
                                raised
                                color="#60ADA6"
                                backgroundColor="#FFFFFF"
                                buttonStyle={styles.nextButton}
                                containerViewStyle={{ backgroundColor: 'transparent' }} />
                            {
                                //Next button
                                this.state.currentPage.nextNormal.next !== "end" ?
                                    <Button
                                        rightIcon={{ name: 'ios-arrow-forward-outline', type: 'ionicon', color: '#60ADA6' }}
                                        title="ถัดไป"
                                        fontFamily="Kanit-Regular"
                                        onPress={this._next}
                                        rounded
                                        raised
                                        color="#60ADA6"
                                        backgroundColor="#FFFFFF"
                                        buttonStyle={styles.nextButton}
                                        containerViewStyle={{ backgroundColor: 'transparent' }} /> :
                                    <Button
                                        rightIcon={{ name: 'ios-arrow-forward-outline', type: 'ionicon', color: '#60ADA6' }}
                                        title="ยืนยัน"
                                        fontFamily="Kanit-Regular"
                                        onPress={this._next}
                                        rounded
                                        raised
                                        color="#60ADA6"
                                        backgroundColor="#FFFFFF"
                                        buttonStyle={styles.nextButton}
                                        containerViewStyle={{ backgroundColor: 'transparent' }} />
                            }
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
        // margin: 10,

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
        alignItems: 'flex-end',
        backgroundColor: 'transparent'
    },
    containerProgress: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    containerMultipleChoice: {
        flexDirection: 'row'
    },
    nextButton: {
        marginVertical: 30,
        alignSelf: 'flex-end',
        borderColor: '#60ADA6',
        borderWidth: 2
    },
    card: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: "#FFFFFF",
        margin: 10
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
