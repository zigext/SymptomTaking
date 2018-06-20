import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, Image, TouchableHighlight, NativeModules, ListView, TextInput, ToastAndroid, ScrollView, Picker, FlatList, Dimensions } from 'react-native';
import { BottomNavigation, COLOR, ThemeProvider, Toolbar, Checkbox, RadioButton, Icon, IconToggle, ListItem } from 'react-native-material-ui';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'
import { Button, Avatar, Card } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import Swipeable from 'react-native-swipeable'
import questionSource from '../UcareData/PITShow/FormQuestions2'
import Question from '../components/Question.symptom'
import AnswerGeneralChoices from '../components/AnswerGeneralChoices.symptom'
import AnswerChoices from '../components/AnswerChoices.symptom'
import AnswerMultiChoices from '../components/AnswerMultiChoices.symptom'
import AnswerTime from '../components/AnswerTime.symptom'
import AnswerOther from '../components/AnswerOther.symptom'
import AnswerVasScore from '../components/AnswerVasScore.symptom'
import ProgressBar from '../components/ProgressBar'
import User from '../UcareData/mockdata' //mock user from firebase => KOPAI

var _ = require('lodash');

const { height, width } = Dimensions.get('window');


export default class SymptomTakingScreen extends Component {

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
            otherPatientAnswer: "",
            progress: 0
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

    _setTimeUnit = async (timeUnit) => {
        this.setState({ timeUnit })
    }

    _setOtherPatientAnswer = (otherPatientAnswer) => {
        this.setState({ otherPatientAnswer })
        console.log("otherPatientAnswer = ", this.state.otherPatientAnswer)
    }

    _setDate = (date) => {
        this.setState({ date })
        console.log("this.state.date = ", this.state.date)
    }
    //Progress shows when ask specific questions
    _calculateProgress = () => {
        let numberOfDoneQuestion = this.state.questionNumber - 1 //Because it include chiefQuestion
        let progress = (numberOfDoneQuestion * 1.0) / this.lenOfSpecificQuestion
        this.setState({ progress })
    }

    _next = async () => {
        //Choice
        if (this.state.currentQuestion.type === "Choice") {

            if (this.state.currentPatientAnswer !== "") {
                //Patient has emergency symptom
                if (this.state.currentPatientAnswer.type === "E" || this.state.currentPatientAnswer.type === "U") {
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
                        await this.setState({
                            chiefComplaint: this.state.currentPatientAnswer.title,
                            questionBasedOnChiefComplaint: questionSource[next],
                            questionNumber,
                            questionHistory: _.uniq(history),
                            currentQuestion: nextQuestion,
                            currentPatientAnswer: "",
                            multipleChoiceCurrentAnswer: [],
                            allPatientAnswers,
                            otherPatientAnswer: "",
                            answerNumberSelected: 0,
                        })
                        console.log("X ", this.state.questionBasedOnChiefComplaint, this.state.currentQuestion)
                        this.lenOfSpecificQuestion = Object.keys(this.state.questionBasedOnChiefComplaint).length
                        console.log("len for progress = ", this.lenOfSpecificQuestion)

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
                                otherPatientAnswer: "",
                                time: "",
                                timeUnit: "",
                                date: "",
                                answerNumberSelected: 0,
                                progress: 0
                            })
                            this._goToConfirm()
                        }
                        else {
                            nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                            await this.setState({
                                questionNumber,
                                questionHistory: _.uniq(history),
                                currentQuestion: nextQuestion,
                                currentPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                otherPatientAnswer: "",
                                allPatientAnswers,
                                time: "",
                                timeUnit: "",
                                date: "",
                                answerNumberSelected: 0,
                            })
                            this._calculateProgress()
                            console.log("next ", this.state)
                        }

                    }

                    // await this.setState({
                    //     questionNumber,
                    //     questionHistory: _.uniq(history),
                    //     currentQuestion: nextQuestion,
                    //     currentPatientAnswer: "",
                    //     multipleChoiceCurrentAnswer: [],
                    //     allPatientAnswers,
                    //     answerNumberSelected: 0,
                    // })
                    // this._calculateProgress()
                    // console.log("next ", this.state)
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
                                await this.setState({
                                    chiefComplaint: this.state.otherPatientAnswer,
                                    allPatientAnswers,
                                    answerNumberSelected: 0,
                                    currentPatientAnswer: "",
                                    multipleChoiceCurrentAnswer: [],
                                    otherPatientAnswer: "",
                                    questionNumber: 1,
                                    questionHistory: _.uniq(history),
                                    currentQuestion: questionSource.chiefQuestion,
                                    time: "",
                                    timeUnit: "",
                                    date: "",
                                    progress: 0
                                })
                                this._goToConfirm()
                            }
                        }
                        //specific question
                        else {
                            //Last question
                            if (next === "end") {
                                await this.setState({
                                    allPatientAnswers,
                                    answerNumberSelected: 0,
                                    currentPatientAnswer: "",
                                    otherPatientAnswer: "",
                                    time: "",
                                    timeUnit: "",
                                    date: "",
                                    multipleChoiceCurrentAnswer: [],
                                    questionNumber: 1,
                                    questionHistory: _.uniq(history),
                                    currentQuestion: questionSource.chiefQuestion,
                                    progress: 0
                                })
                                this._goToConfirm()
                            }
                            //Not last
                            else {
                                nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                                await this.setState({
                                    allPatientAnswers,
                                    answerNumberSelected: 0,
                                    currentPatientAnswer: "",
                                    otherPatientAnswer: "",
                                    time: "",
                                    timeUnit: "",
                                    date: "",
                                    multipleChoiceCurrentAnswer: [],
                                    questionNumber,
                                    questionHistory: _.uniq(history),
                                    currentQuestion: nextQuestion,
                                })
                                this._calculateProgress()
                                console.log("next ", this.state)
                            }
                        }
                    }
                }

                //Time answer
                //Time question
                else if (this.state.currentPatientAnswer.type === "T") {
                    let questionNumber = this.state.questionNumber + 1
                    let next = this.state.currentQuestion.next
                    let history = this.state.questionHistory
                    history.push(this.state.currentQuestion)
                    let allPatientAnswers = this.state.allPatientAnswers
                    console.log("_____", this.state.currentPatientAnswer,this.state.time, this.state.timeUnit)
                    //date
                    if (this.state.currentPatientAnswer.title === "วว/ดด/ปปปป") {
                        if (this.state.date !== "") {
                            allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.date)
                        }
                        else {
                            ToastAndroid.showWithGravityAndOffset('กรุณาระบุวันที่', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                        }
                    }
                    //time
                    else if(this.state.currentPatientAnswer.title === "เวลา"){
                        if(this.state.time !== ""){
                            allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.time)
                        }
                    }
                    //time duration 
                    else if (this.state.time !== "" && this.state.timeUnit !== "") {
                        console.log("______________", this.state.time, this.state.timeUnit)
                        allPatientAnswers.push("" + this.state.currentQuestion.title + ": " + this.state.time + " " + this.state.timeUnit)
                    }
                    else {
                        ToastAndroid.showWithGravityAndOffset('กรุณาเลือกเวลา', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                        return
                    }

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
                            timeUnit: "",
                            date: "",
                            progress: 0
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
                            timeUnit: "",
                            date: ""
                        })
                        this._calculateProgress()
                        console.log(this.state)
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
                if (this.state.multipleChoiceCurrentAnswer.some((answer) => answer.type === "E" || answer.type === "U")) {
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
                                otherPatientAnswer: "",
                                time: "",
                                timeUnit: "",
                                date: "",
                                answerNumberSelected: 0,
                                progress: 0
                            })
                            this._goToConfirm()
                        }
                        //Still has other questions
                        else {
                            nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                            await this.setState({
                                questionNumber,
                                questionHistory: _.uniq(history),
                                currentQuestion: nextQuestion,
                                currentPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                otherPatientAnswer: "",
                                answerNumberSelected: 0,
                                time: "",
                                timeUnit: "",
                                date: "",
                            })
                            this._calculateProgress()
                            console.log("next ", this.state)
                        }

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
                            allAnswers = allAnswers.replace('อื่นๆ', '') //remove the word อื่นๆ
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
                                time: "",
                                timeUnit: "",
                                date: "",
                                answerNumberSelected: 0,
                                progress: 0
                            })
                            this._goToConfirm()
                        }
                        //Still has other questions
                        else {
                            nextQuestion = this.state.questionBasedOnChiefComplaint[next]
                            await this.setState({
                                questionNumber,
                                questionHistory: _.uniq(history),
                                currentQuestion: nextQuestion,
                                currentPatientAnswer: "",
                                otherPatientAnswer: "",
                                multipleChoiceCurrentAnswer: [],
                                allPatientAnswers,
                                time: "",
                                timeUnit: "",
                                date: "",
                                answerNumberSelected: 0,
                            })
                            this._calculateProgress()
                            console.log("next ", this.state)
                        }
                        // await this.setState({
                        //     questionNumber,
                        //     questionHistory: _.uniq(history),
                        //     currentQuestion: nextQuestion,
                        //     currentPatientAnswer: "",
                        //     otherPatientAnswer: "",
                        //     multipleChoiceCurrentAnswer: [],
                        //     allPatientAnswers,
                        //     answerNumberSelected: 0,
                        // })
                        // this._calculateProgress()
                        // console.log("next ", this.state)
                    }

                }

            }
            //Patient doesn't answer
            else {
                ToastAndroid.showWithGravityAndOffset('กรุณาตอบคำถาม', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
            }
        }
    }

    _back = async () => {
        let prevQuestion = this.state.questionHistory.pop()
        let questionNumber = this.state.questionNumber - 1
        //When only chiefQuestion left in allPatientAnswers
        if (this.state.allPatientAnswers.length <= 1) {
            await this.setState({
                currentQuestion: prevQuestion,
                questionNumber,
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
        //When there are more
        else {
            let allPatientAnswers = this.state.allPatientAnswers
            allPatientAnswers.pop()
            await this.setState({
                currentQuestion: prevQuestion,
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

    //TODO: render multiChoice in direction row
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
                                            if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex) || (answer.type === "o")) {
                                                if (answer.type === "o") {
                                                    return (
                                                        <AnswerOther
                                                            answer={answer}
                                                            key={`${this.state.currentQuestion.title} : ${answer.title}`}
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
                                                            key={`${this.state.currentQuestion.title} : ${answer.title}`}
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
                                        //TODO: time may not be the only answer of this question
                                        {/*if (this.state.currentQuestion.answer[0].type === "T") {
                                            return (
                                                <AnswerTime
                                                    answer={this.state.currentQuestion.answer[0]}
                                                    
                                                    _setTime={this._setTime}
                                                    _setTimeUnit={this._setTimeUnit}
                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer} 
                                                    _setDate={this._setDate} />
                                            )
                                        }
                                        else if(this.state.currentQuestion.answer[0].type === "V"){
                                            return (
                                                <AnswerVasScore />
                                            )
                                        }*/}
                                        //Choice and Other 

                                        return this.state.currentQuestion.answer.map((answer, index) => {
                                            if (answer.type === "c" || answer.type === "E" || answer.type === "U") {
                                                return (
                                                    <AnswerChoices
                                                        answer={answer}
                                                        key={`${this.state.currentQuestion.title} : ${answer.title}`}
                                                        currentPatientAnswer={this.state.currentPatientAnswer}
                                                        answerNumberSelected={this.state.answerNumberSelected}
                                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                                        _setAnswerNumberSelected={this._setAnswerNumberSelected} />
                                                )
                                            }
                                            else if (answer.type === "o") {
                                                return (
                                                    <AnswerOther
                                                        answer={answer}
                                                        key={`${this.state.currentQuestion.title} : ${answer.title}`}
                                                        currentPatientAnswer={this.state.currentPatientAnswer}
                                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                                        _setOtherPatientAnswer={this._setOtherPatientAnswer} />
                                                )
                                            }
                                            else if (answer.type === "T") {
                                                return (
                                                    <AnswerTime
                                                        answer={answer}
                                                        key={`${this.state.currentQuestion.title} : ${answer.title}`}
                                                        _setTime={this._setTime}
                                                        _setTimeUnit={this._setTimeUnit}
                                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer}
                                                        _setDate={this._setDate} />
                                                )
                                            }
                                            else if (answer.type === "V") {
                                                return (
                                                    <AnswerVasScore />
                                                )
                                            }
                                        })
                                    }
                                }


                            )() //immediately-invoked function expreesion, so I can use if-else in JSX
                        }

                        <View style={styles.containerProgress}>
                            <ProgressBar progress={this.state.progress} />
                        </View>

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
