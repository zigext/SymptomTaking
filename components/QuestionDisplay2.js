import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import AnswerChoices from './AnswerChoices.symptom'
import AnswerMultiChoices from './AnswerMultiChoices.symptom'
import AnswerTime from './AnswerTime.symptom'
import AnswerOther from './AnswerOther.symptom'
import AnswerTakePicture from './AnswerTakePicture.symptom'
import AnswerVasScore from './AnswerVasScore.symptom'
import AnswerPictureChoice from './AnswerPictureChoice.symptom'
import Question from './Question.symptom'
import User from '../UcareData/mockdata' //mock user from firebase => KOPAI

var _ = require('lodash')

const ADD = "add"
const DELETE = "delete"

// answers = answers.slice(0, -2).sort().concat(answers.slice(-2)) //sort answer by 

export default class QuestionDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPatientAnswer_1: "",
            currentPatientAnswer_2: "",
            multipleChoiceCurrentAnswer_1: [],
            multipleChoiceCurrentAnswer_2: [],
            otherPatientAnswer_1: "",
            otherPatientAnswer_2: "",
            time_1: "",
            time_2: "",
            timeUnit_1: "",
            timeUnit_2: "",
            date_1: "",
            date_2: "",
            vas_1: "",
            filename: "",
            pathStorage: "",
            timestamp: "",
            allPatientAnswers: [],
            alreadyChooseAnswer_1: false, //for 1 choice answer
            alreadyChooseAnswer_2: false
        }
        this.baseState = this.state
    }

    reset = async () => {
        await this.setState(this.baseState)
        await this.setState({ multipleChoiceCurrentAnswer_1: [] })
        console.log("reset", this.state)
    }

    _callSetAnswerForThePage = async (answer, method) => {
        if (this.state.currentPatientAnswer_1.type === "T") {
            //answer type T (ระยะเวลา) with Picker
            if (this.state.currentPatientAnswer_1.title === "ระยะเวลา" || this.state.currentPatientAnswer_1.title === "วันเดือนปี" || this.state.currentPatientAnswer_1.title === "วันเดือน") {
                if (this.state.time_1 && this.state.timeUnit_1) {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_1.type
                    obj.question = this.state.currentPatientAnswer_1.question
                    obj.title = `${this.state.time_1} ${this.state.timeUnit_1}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        time_1: "",
                        timeUnit_1: ""
                    })
                }
                else {
                    //user doesn't choose both time and timeUnit
                    if ((this.state.time_1 && !this.state.timeUnit_1) || (!this.state.time_1 && this.state.timeUnit_1)) {
                        ToastAndroid.showWithGravityAndOffset('กรุณาระบุเวลาและหน่วยเวลา', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                        return
                    }

                }
                // return
            }

            else if (this.state.currentPatientAnswer_1.title === "วว/ดด/ปปปป") {
                if (this.state.date_1 !== "") {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_1.type
                    obj.question = this.state.currentPatientAnswer_1.question
                    obj.title = `${this.state.date_1}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        date_1: ""
                    })
                }
            }

            else if (this.state.currentPatientAnswer_1.title === "เวลา") {
                if (this.state.time_1 !== "") {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_1.type
                    obj.question = this.state.currentPatientAnswer_1.question
                    obj.title = `${this.state.time_1}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        time_1: ""
                    })
                }
            }
            //frequency
            else if (this.state.currentPatientAnswer_1.title === "เป็นช่วงๆ") {
                if (this.state.time_1 && this.state.timeUnit_1) {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_1.type
                    obj.question = this.state.currentPatientAnswer_1.question
                    obj.title = `${this.state.time_1} ครั้ง ต่อ ${this.state.timeUnit_1}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        time_1: "",
                        timeUnit_1: ""
                    })
                }
                else {
                    //user doesn't choose both time and timeUnit
                    if ((this.state.time_1 && !this.state.timeUnit_1) || (!this.state.time_1 && this.state.timeUnit_1)) {
                        ToastAndroid.showWithGravityAndOffset('กรุณาระบุเวลาและหน่วยเวลา', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                        return
                    }

                }
                // return
            }
        }
        else if (this.state.currentPatientAnswer_1.type !== "T") {
            console.log("not T")
            if (this.state.currentPatientAnswer_1.type === "o" && this.state.otherPatientAnswer_1 !== "") {
                let obj = {}
                obj.type = this.state.currentPatientAnswer_1.type
                obj.question = this.state.currentPatientAnswer_1.question
                obj.title = `${this.state.otherPatientAnswer_1} `
                this.props._setAnswersForThePage(obj, method)
                //so, it doesn't call this again
                this.setState({
                    otherPatientAnswer_1: ""
                })
                // return
            }
            else if (this.state.currentPatientAnswer_1.type === "V" && this.state.vas_1 !== "") {
                console.log("type V")
                let obj = {}
                obj.type = this.state.currentPatientAnswer_1.type
                obj.question = this.state.currentPatientAnswer_1.question
                obj.title = `${this.state.vas_1} `
                this.props._setAnswersForThePage(obj, method)
                //so, it doesn't call this again
                this.setState({
                    vas_1: ""
                })
                // return
            }
            //take picture
            //KOPAI: Call ucarelib to save image in firestore and get url oh that image e.x. obj.title = imageUrl
            else if (this.state.currentPatientAnswer_1.type === "P" && this.state.filename !== "" && this.state.pathStorage !== "" && this.state.timestamp !== "") {
                console.log("type P")
                let obj = {}
                obj.type = this.state.currentPatientAnswer_1.type
                obj.question = this.state.currentPatientAnswer_1.question
                obj.title = `${this.state.filename} `
                this.props._setAnswersForThePage(obj, method)
                //so, it doesn't call this again
                this.setState({
                    filename: ""
                })
                // return
            }
            this.props._setAnswersForThePage(answer, method)
        }

        if (this.state.currentPatientAnswer_2.type === "T") {
            //answer type T (ระยะเวลา) with Picker
            if (this.state.currentPatientAnswer_2.title === "ระยะเวลา" || this.state.currentPatientAnswer_2.title === "วันเดือนปี" || this.state.currentPatientAnswer_2.title === "วันเดือน") {
                if (this.state.time_2 && this.state.timeUnit_2) {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_2.type
                    obj.question = this.state.currentPatientAnswer_2.question
                    obj.title = `${this.state.time_2} ${this.state.timeUnit_2}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        time_2: "",
                        timeUnit_2: ""
                    })
                }
                else {
                    //user doesn't choose both time and timeUnit
                    if ((this.state.time_2 && !this.state.timeUnit_2) || (!this.state.time_2 && this.state.timeUnit_2)) {
                        ToastAndroid.showWithGravityAndOffset('กรุณาระบุเวลาและหน่วยเวลา', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                        return
                    }

                }
                // return
            }

            else if (this.state.currentPatientAnswer_2.title === "วว/ดด/ปปปป") {
                if (this.state.date_2 !== "") {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_2.type
                    obj.question = this.state.currentPatientAnswer_2.question
                    obj.title = `${this.state.date_2}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        date_2: ""
                    })
                }
            }

            else if (this.state.currentPatientAnswer_2.title === "เวลา") {
                if (this.state.time_2 !== "") {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_2.type
                    obj.question = this.state.currentPatientAnswer_2.question
                    obj.title = `${this.state.time_2}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        time_2: ""
                    })
                }
            }
            //frequency
            else if (this.state.currentPatientAnswer_2.title === "เป็นช่วงๆ") {
                if (this.state.time_2 && this.state.timeUnit_2) {
                    let obj = {}
                    obj.type = this.state.currentPatientAnswer_2.type
                    obj.question = this.state.currentPatientAnswer_2.question
                    obj.title = `${this.state.time_2} ครั้ง ต่อ ${this.state.timeUnit_2}`
                    this.props._setAnswersForThePage(obj, method)
                    this.setState({
                        time_2: "",
                        timeUnit_2: ""
                    })
                }
                else {
                    //user doesn't choose both time and timeUnit
                    if ((this.state.time_2 && !this.state.timeUnit_2) || (!this.state.time_2 && this.state.timeUnit_2)) {
                        ToastAndroid.showWithGravityAndOffset('กรุณาระบุเวลาและหน่วยเวลา', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300)
                        return
                    }

                }
                // return
            }
        }
        else if (this.state.currentPatientAnswer_2.type !== "T") {
            console.log("Not T")
            if (this.state.currentPatientAnswer_2.type === "o" && this.state.otherPatientAnswer_2 !== "") {
                let obj = {}
                obj.type = this.state.currentPatientAnswer_2.type
                obj.question = this.state.currentPatientAnswer_2.question
                obj.title = `${this.state.otherPatientAnswer_2} `
                this.props._setAnswersForThePage(obj, method)
                // return
                //so, it doesn't call this again
                this.setState({
                    otherPatientAnswer_2: ""
                })
            }
            this.props._setAnswersForThePage(answer, method)
        }


        // this.props._setAnswersForThePage(answer, method)

        // this.props._setAnswersForThePage(answer, method)



        // if (this.state.time_1) {
        //     // let obj = {}
        //     // obj.type = this.state.currentPatientAnswer_1.type
        //     // obj.question = this.state.currentPatientAnswer_1.question
        //     // obj.next = this.state.currentPatientAnswer_1.next
        //     // obj.title = this.state.time_1
        //     // this.props._setAnswersForThePage(obj, method)
        // }
        // if (this.state.timeUnit_1) {
        //     // let obj = {}
        //     // obj.type = this.state.currentPatientAnswer_1.type
        //     // obj.question = this.state.currentPatientAnswer_1.question
        //     // obj.next = this.state.currentPatientAnswer_1.next
        //     // obj.title = this.state.timeUnit_1
        //     // this.props._setAnswersForThePage(obj, method)
        // }

        // else {
        //     //user doesn't choose both time and timeUnit
        //     if ((this.state.time_1 && !this.state.timeUnit_1) || (!this.state.time_1 && this.state.timeUnit_1)) {
        //         console.log("return")
        //         return
        //     }
        //     if ((this.state.time_2 && !this.state.timeUnit_2) || (!this.state.time_2 && this.state.timeUnit_2)) {
        //         return
        //     }

        //     //user answer textInput 
        //     if (this.state.currentPatientAnswer_1.type === "o" && this.state.otherPatientAnswer_1 !== "") {
        //         let obj = {}
        //         obj.type = this.state.currentPatientAnswer_1.type
        //         obj.question = this.state.currentPatientAnswer_1.question
        //         obj.title = `${this.state.otherPatientAnswer_1} `
        //         this.props._setAnswersForThePage(obj, method)
        //         return
        //     }
        //     if (this.state.currentPatientAnswer_2.type === "o" && this.state.otherPatientAnswer_2 !== "") {
        //         let obj = {}
        //         obj.type = this.state.currentPatientAnswer_2.type
        //         obj.question = this.state.currentPatientAnswer_2.question
        //         obj.title = `${this.state.otherPatientAnswer_2} 
        //         this.props._setAnswersForThePage(obj, method)
        //         return
        //     }
        //     console.log("X")
        //     this.props._setAnswersForThePage(answer, method)
        // }
    }

    _toggleAlreadyChooseAnswer1 = async (value) => {
        await this.setState({ alreadyChooseAnswer_1: value })
    }

    _toggleAlreadyChooseAnswer2 = async (value) => {
        await this.setState({ alreadyChooseAnswer_2: value })
    }

    _setCurrentPatientAnswer1 = async (currentPatientAnswer_1) => {
        await this.setState({ currentPatientAnswer_1 })
        this._callSetAnswerForThePage(currentPatientAnswer_1, ADD)


        console.log("current answer 1 = ", this.state.currentPatientAnswer_1)
    }

    //use this.state.multipleChoiceCurrentAnswer so it can add and delete answer each
    _setChoiceCurrentAnswer1 = async (answer, method) => {
        //user click new answer
        if (method === "add") {
            let tmpAnswer = this.state.multipleChoiceCurrentAnswer_1
            tmpAnswer.push(answer)
            await this.setState({
                multipleChoiceCurrentAnswer_1: _.uniq(tmpAnswer),
                currentPatientAnswer_1: answer
            })
            this._callSetAnswerForThePage(answer, ADD)
        }
        //user click already selected answer
        else if (method === "delete") {
            let tmpAnswer = this.state.multipleChoiceCurrentAnswer_1
            removedTmpAnswer = tmpAnswer.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({
                multipleChoiceCurrentAnswer_1: removedTmpAnswer,
                currentPatientAnswer_1: ""
            })
            this._callSetAnswerForThePage(answer, DELETE)
        }
    }

    _setMultipleChoiceCurrentAnswer1 = async (answer, method) => {
        //user click new answer
        if (method === "add") {
            let newMultiple = this.state.multipleChoiceCurrentAnswer_1
            newMultiple.push(answer)
            await this.setState({
                multipleChoiceCurrentAnswer_1: _.uniq(newMultiple)
            })
            this._callSetAnswerForThePage(answer, ADD)
        }
        //user click already selected answer
        else if (method === "delete") {
            let multipleChoiceCurrentAnswer = this.state.multipleChoiceCurrentAnswer_1
            removedMultipleChoice = multipleChoiceCurrentAnswer.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({ multipleChoiceCurrentAnswer_1: removedMultipleChoice })
            this._callSetAnswerForThePage(answer, DELETE)
        }

        console.log("multiple current answer 1 = ", this.state.multipleChoiceCurrentAnswer_1)
    }

    _setAnswerNumberSelected = async (answerNumberSelected) => {
        this.setState({ answerNumberSelected })
    }

    _setTime1 = async (time_1) => {
        await this.setState({ time_1 })
        this._callSetAnswerForThePage(time_1, ADD)
    }

    _setTimeUnit1 = async (timeUnit_1) => {
        await this.setState({ timeUnit_1 })
        this._callSetAnswerForThePage(timeUnit_1, ADD)
    }

    _setDate1 = (date_1) => {
        this.setState({ date_1 })
        this._callSetAnswerForThePage(date_1, ADD)
    }

    _setOtherPatientAnswer1 = async (otherPatientAnswer_1) => {
        await this.setState({ otherPatientAnswer_1 })
        this._callSetAnswerForThePage(otherPatientAnswer_1, ADD)
        console.log("otherPatientAnswer 1 = ", this.state.otherPatientAnswer_1)
    }

    _setCurrentPatientAnswer2 = async (currentPatientAnswer_2) => {
        await this.setState({ currentPatientAnswer_2 })
        this._callSetAnswerForThePage(currentPatientAnswer_2, ADD)

        console.log("current answer 2 = ", this.state.currentPatientAnswer_2)
    }

    //use this.state.multipleChoiceCurrentAnswer so it can add and delete answer each
    _setChoiceCurrentAnswer2 = async (answer, method) => {
        //user click new answer
        if (method === "add") {
            let tmpAnswer = this.state.multipleChoiceCurrentAnswer_2
            tmpAnswer.push(answer)
            await this.setState({
                multipleChoiceCurrentAnswer_2: _.uniq(tmpAnswer),
                currentPatientAnswer_2: answer
            })
            this._callSetAnswerForThePage(answer, ADD)
        }
        //user click already selected answer
        else if (method === "delete") {
            let tmpAnswer = this.state.multipleChoiceCurrentAnswer_2
            removedTmpAnswer = tmpAnswer.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({
                multipleChoiceCurrentAnswer_2: removedTmpAnswer,
                currentPatientAnswer_2: ""
            })
            this._callSetAnswerForThePage(answer, DELETE)
        }
    }

    _setMultipleChoiceCurrentAnswer2 = async (answer, method) => {
        //user click new answer
        if (method === "add") {
            let newMultiple = this.state.multipleChoiceCurrentAnswer_2
            newMultiple.push(answer)
            await this.setState({
                multipleChoiceCurrentAnswer_2: _.uniq(newMultiple)
            })
            this._callSetAnswerForThePage(answer, ADD)
        }
        //user click already selected answer
        else if (method === "delete") {
            let multipleChoiceCurrentAnswer = this.state.multipleChoiceCurrentAnswer_2
            removedMultipleChoice = multipleChoiceCurrentAnswer.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({ multipleChoiceCurrentAnswer_2: removedMultipleChoice })
            this._callSetAnswerForThePage(answer, DELETE)
        }
        console.log("multiple current answer 2 = ", this.state.multipleChoiceCurrentAnswer_2)
    }

    _setTime2 = async (time_2) => {
        await this.setState({ time_2 })
        this._callSetAnswerForThePage(time_2, ADD)
    }

    _setTimeUnit2 = async (timeUnit_2) => {
        await this.setState({ timeUnit_2 })
        this._callSetAnswerForThePage(timeUnit_2, ADD)
    }

    _setOtherPatientAnswer2 = async (otherPatientAnswer_2) => {
        await this.setState({ otherPatientAnswer_2 })
        this._callSetAnswerForThePage(otherPatientAnswer_2, ADD)
        console.log("otherPatientAnswer 2 = ", this.state.otherPatientAnswer_2)
    }

    _setDate2 = (date_2) => {
        this.setState({ date_2 })
        this._callSetAnswerForThePage(date_2, ADD)
    }

    _setVasScore = (vas_1) => {
        this.setState({ vas_1 })
        this._callSetAnswerForThePage(vas_1, ADD)
    }

    _setImage = (pathStorage, filename, timestamp) => {
        this.setState({ pathStorage, filename, timestamp })
    }


    //questionSet is array length 1 or 2
    _renderOneQuestion() {
        return (
            <View>
                <Question question={this.props.questionSet[0]} />
                {
                    this.props.questionSet[0].type === "Choice" ?
                        this.props.questionSet[0].answer.map((answer, index) => {
                            if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex)) {
                                return (
                                    <AnswerChoices
                                        answer={answer}
                                        key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                        currentPatientAnswer={this.state.currentPatientAnswer_1}
                                        alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                        _setOtherPatientAnswer={this._setOtherPatientAnswer1}
                                        _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer1}
                                        _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                    />
                                )

                            }
                            else if (answer.type === "o") {
                                return (
                                    <AnswerOther
                                        answer={answer}
                                        key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                        currentPatientAnswer={this.state.currentPatientAnswer_1}
                                        alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                        _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer1}
                                        _setOtherPatientAnswer={this._setOtherPatientAnswer1}
                                        _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                    />
                                )
                            }
                            else if (answer.type === "T") {
                                return (
                                    <AnswerTime
                                        answer={answer}
                                        key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                        alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                        _setTime={this._setTime1}
                                        _setTimeUnit={this._setTimeUnit1}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                        _setDate={this._setDate1}
                                        _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                    />
                                )
                            }
                            else if (answer.type === "V") {
                                return (
                                    <AnswerVasScore
                                        answer={answer}
                                        key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                        _setVasScore={this._setVasScore}
                                    />
                                )
                            }
                            else if (answer.type === "P") {
                                return (
                                    <AnswerTakePicture
                                        answer={answer}
                                        key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                        _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                        _setImage={this._setImage}
                                    />
                                )
                            }
                        })
                        : this.props.questionSet[0].type === "MultiChoice" ?

                            this.props.questionSet[0].answer.map((answer, index) => {
                                if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex) || (answer.type === "o")) {
                                    if (answer.type === "o") {
                                        return (
                                            <AnswerOther
                                                answer={answer}
                                                key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                currentPatientAnswer={this.state.currentPatientAnswer_1}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer1}
                                                _setOtherPatientAnswer={this._setOtherPatientAnswer1}
                                            />
                                        )
                                    }
                                    else {
                                        return (
                                            <AnswerMultiChoices
                                                answer={answer}
                                                key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                currentPatientAnswer={this.state.currentPatientAnswer_1}
                                                multipleChoiceCurrentAnswer={this.state.multipleChoiceCurrentAnswer_1}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer1}

                                            />
                                        )
                                    }
                                }
                            })

                            : null
                }
            </View>
        )
    }


    _renderTwoQuestions() {
        return (
            <View style={styles.container}>

                {/*Question no.1*/}
                <View style={styles.questionContainer}>
                    <Question question={this.props.questionSet[0]} />
                    {/*if scrollview horizontal, it will affect Picker component*/}
                    <ScrollView horizontal={this.props.questionSet[0].answer[0].type === "PC" ? true : false}>
                        {
                            this.props.questionSet[0].type === "Choice" ?
                                this.props.questionSet[0].answer.map((answer, index) => {
                                    if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex)) {
                                        return (
                                            <AnswerChoices
                                                answer={answer}
                                                key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                currentPatientAnswer={this.state.currentPatientAnswer_1}
                                                alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                _setOtherPatientAnswer={this._setOtherPatientAnswer1}
                                                _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer1}
                                                _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                            />
                                        )
                                    }
                                    else if (answer.type === "T") {
                                        return (
                                            <AnswerTime
                                                answer={answer}
                                                key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                                _setTime={this._setTime1}
                                                _setTimeUnit={this._setTimeUnit1}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                _setDate={this._setDate1}
                                                _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                            />
                                        )
                                    }
                                    else if (answer.type === "o") {
                                        return (
                                            <AnswerOther
                                                answer={answer}
                                                key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                _setOtherPatientAnswer={this._setOtherPatientAnswer1}
                                                _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                            />
                                        )
                                    }
                                    else if (answer.type === "PC") { //picture choice
                                        return (
                                            <View style={{ alignSelf: 'center' }} key={`${this.props.questionSet[0].title} : ${answer.title}`}>
                                                <AnswerPictureChoice
                                                    answer={answer}
                                                    alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                    _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer1}
                                                    _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                                />
                                            </View>
                                        )
                                    }
                                })

                                : this.props.questionSet[0].type === "MultiChoice" ?
                                    (<View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
                                        {this.props.questionSet[0].answer.map((answer, index) => {
                                            if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex) || (answer.type === "o")) {
                                                if (answer.type === "o") {
                                                    return (
                                                        <AnswerOther
                                                            answer={answer}
                                                            key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                            _setOtherPatientAnswer={this._setOtherPatientAnswer1}
                                                            _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer1}
                                                        />
                                                    )
                                                }
                                                else if (answer.type === "PC") { //picture choice
                                                    return (
                                                        <AnswerPictureChoice
                                                            answer={answer}
                                                            alreadyChooseAnswer={this.state.alreadyChooseAnswer_1}
                                                            key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                            _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer1}
                                                            _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer1}
                                                        />
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <AnswerMultiChoices
                                                            answer={answer}
                                                            key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                                            currentPatientAnswer={this.state.currentPatientAnswer_1}
                                                            multipleChoiceCurrentAnswer={this.state.multipleChoiceCurrentAnswer_1}
                                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                                            _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer1}
                                                        />
                                                    )
                                                }
                                            }
                                        })}
                                    </View>)
                                    : null
                        }
                    </ScrollView>
                </View>

                {/*Question no.2*/}
                <View style={styles.questionContainer}>
                    <Question question={this.props.questionSet[1]} />
                    <ScrollView horizontal={this.props.questionSet[1].answer[0].type === "PC" ? true : false}>
                        {
                            this.props.questionSet[1].type === "Choice" ?
                                this.props.questionSet[1].answer.map((answer, index) => {
                                    if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex)) {
                                        return (
                                            <AnswerChoices
                                                answer={answer}
                                                key={`${this.props.questionSet[1].title} : ${answer.title}`}
                                                currentPatientAnswer={this.state.currentPatientAnswer_2}
                                                alreadyChooseAnswer={this.state.alreadyChooseAnswer_2}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                _setOtherPatientAnswer={this._setOtherPatientAnswer2}
                                                _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer2}
                                                _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer2}
                                            />
                                        )
                                    }
                                    else if (answer.type === "o") {
                                        return (
                                            <AnswerOther
                                                answer={answer}
                                                key={`${this.props.questionSet[1].title} : ${answer.title}`}
                                                alreadyChooseAnswer={this.state.alreadyChooseAnswer_2}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                _setOtherPatientAnswer={this._setOtherPatientAnswer2}
                                                _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer2}
                                            />
                                        )
                                    }
                                    else if (answer.type === "T") {
                                        return (
                                            <AnswerTime
                                                answer={answer}
                                                key={`${this.props.questionSet[1].title} : ${answer.title}`}
                                                alreadyChooseAnswer={this.state.alreadyChooseAnswer_2}
                                                _setTime={this._setTime2}
                                                _setTimeUnit={this._setTimeUnit2}
                                                _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                _setDate={this._setDate2}
                                                _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer2}
                                            />
                                        )
                                    }
                                    else if (answer.type === "PC") { //picture choice
                                        return (
                                            <View style={{ alignSelf: 'center' }} key={`${this.props.questionSet[1].title} : ${answer.title}`}>
                                                <AnswerPictureChoice
                                                    answer={answer}
                                                    alreadyChooseAnswer={this.state.alreadyChooseAnswer_2}
                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                    _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer2}
                                                    _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer2}
                                                />
                                            </View>
                                        )
                                    }
                                })
                                : this.props.questionSet[1].type === "MultiChoice" ?
                                    (
                                        <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
                                            {
                                                this.props.questionSet[1].answer.map((answer, index) => {
                                                    if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex) || (answer.type === "o")) {
                                                        if (answer.type === "o") {
                                                            return (
                                                                <AnswerOther
                                                                    answer={answer}
                                                                    key={`${this.props.questionSet[1].title} : ${answer.title}`}
                                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                                    _setOtherPatientAnswer={this._setOtherPatientAnswer2}
                                                                    _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer2}
                                                                />
                                                            )
                                                        }
                                                        else if (answer.type === "PC") { //picture choice
                                                            return (
                                                                <AnswerPictureChoice
                                                                    answer={answer}
                                                                    alreadyChooseAnswer={this.state.alreadyChooseAnswer_2}
                                                                    key={`${this.props.questionSet[1].title} : ${answer.title}`}
                                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                                    _setChoiceCurrentAnswer={this._setChoiceCurrentAnswer2}
                                                                    _toggleAlreadyChooseAnswer={this._toggleAlreadyChooseAnswer2}
                                                                />
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <AnswerMultiChoices
                                                                    answer={answer}
                                                                    key={`${this.props.questionSet[1].title} : ${answer.title}`}
                                                                    currentPatientAnswer={this.state.currentPatientAnswer_2}
                                                                    multipleChoiceCurrentAnswer={this.state.multipleChoiceCurrentAnswer_2}
                                                                    _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                                                    _setMultipleChoiceCurrentAnswer={this._setMultipleChoiceCurrentAnswer2}
                                                                />
                                                            )
                                                        }
                                                    }
                                                }
                                                )
                                            }
                                        </View>
                                    )
                                    : null
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }

    render() {
        if (this.props.questionSet.length === 1)
            return this._renderOneQuestion()
        else
            return this._renderTwoQuestions()

    }
}

const styles = {
    container: {
        flex: 1
    },
    questionContainer: {
        flex: 1,
        marginVertical: 20
    }
}