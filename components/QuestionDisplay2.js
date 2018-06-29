import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TextInput, ToastAndroid, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import AnswerChoices from './AnswerChoices.symptom'
import AnswerMultiChoices from './AnswerMultiChoices.symptom'
import AnswerTime from './AnswerTime.symptom'
import AnswerOther from './AnswerOther.symptom'
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
            allPatientAnswers: [],
        }
        this.baseState = this.state
    }

    reset = async () => {
        await this.setState(this.baseState)
        await this.setState({ multipleChoiceCurrentAnswer_1: [] })
        console.log("reset", this.state)
    }

    _callSetAnswerForThePage = (answer, method) => {
        //answer type T (ระยะเวลา) with Picker
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

        else {
            //user doesn't choose both time and timeUnit
            if ((this.state.time_1 && !this.state.timeUnit_1) || (!this.state.time_1 && this.state.timeUnit_1)) {
                return
            }
            if ((this.state.time_2 && !this.state.timeUnit_2) || (!this.state.time_2 && this.state.timeUnit_2)) {
                return
            }
            if (this.state.currentPatientAnswer_1.type === "o" && this.state.otherPatientAnswer_1 !== "") {
                let obj = {}
                obj.type = this.state.currentPatientAnswer_1.type
                obj.question = this.state.currentPatientAnswer_1.question
                obj.title = `${this.state.otherPatientAnswer_1} `
                this.props._setAnswersForThePage(obj, method)
                return
            }
            if (this.state.currentPatientAnswer_2.type === "o" && this.state.otherPatientAnswer_2 !== "") {
                let obj = {}
                obj.type = this.state.currentPatientAnswer_2.type
                obj.question = this.state.currentPatientAnswer_2.question
                obj.title = `${this.state.otherPatientAnswer_2} `
                this.props._setAnswersForThePage(obj, method)
                return
            }
            console.log("XXX")
            this.props._setAnswersForThePage(answer, method)
        }
    }

    _setCurrentPatientAnswer1 = async (currentPatientAnswer_1) => {
        await this.setState({ currentPatientAnswer_1 })
        this._callSetAnswerForThePage(currentPatientAnswer_1, ADD)

        console.log("current answer 1 = ", this.state.currentPatientAnswer_1)
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

    _setOtherPatientAnswer1 = async (otherPatientAnswer_1) => {
        await this.setState({ otherPatientAnswer_1 })
        this._callSetAnswerForThePage(otherPatientAnswer_2, ADD)
        console.log("otherPatientAnswer 1 = ", this.state.otherPatientAnswer_1)
    }

    _setCurrentPatientAnswer2 = async (currentPatientAnswer_2) => {
        await this.setState({ currentPatientAnswer_2 })
        this._callSetAnswerForThePage(currentPatientAnswer_2, ADD)
        console.log("current answer 2 = ", this.state.currentPatientAnswer_2)
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
        this.setState({ time_2 })
    }

    _setTimeUnit2 = (timeUnit_2) => {
        this.setState({ timeUnit_2 })
    }

    _setOtherPatientAnswer2 = async (otherPatientAnswer_2) => {
        await this.setState({ otherPatientAnswer_2 })
        this._callSetAnswerForThePage(otherPatientAnswer_2, ADD)
        console.log("otherPatientAnswer 2 = ", this.state.otherPatientAnswer_2)
    }

    _setDate = (date) => {
        this.setState({ date })
    }


    //questionSet is array length 1 or 2
    _renderOneQuestion() {
        return (
            <View>
                <Question question={this.props.questionSet[0]} />
                {
                    this.props.questionSet[0].type === "Choice" ?
                        this.props.questionSet[0].answer.map((answer, index) => {

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

                <View style={styles.questionContainer}>
                    <Question question={this.props.questionSet[0]} />
                    {
                        this.props.questionSet[0].type === "Choice" ?
                            this.props.questionSet[0].answer.map((answer, index) => {
                                if (answer.type === "c" || answer.type === "E" || answer.type === "U") {
                                    return (
                                        <AnswerChoices
                                            answer={answer}
                                            key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                        />
                                    )
                                }
                                else if (answer.type === "T") {
                                    return (
                                        <AnswerTime
                                            answer={answer}
                                            key={`${this.props.questionSet[0].title} : ${answer.title}`}
                                            _setTime={this._setTime1}
                                            _setTimeUnit={this._setTimeUnit1}
                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer1}
                                            _setDate={this._setDate}
                                        />
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
                </View>

                <View style={styles.questionContainer}>
                    <Question question={this.props.questionSet[1]} />
                    {
                        this.props.questionSet[1].type === "Choice" ?
                            this.props.questionSet[1].answer.map((answer, index) => {
                                if (answer.type === "c" || answer.type === "E" || answer.type === "U") {
                                    return (
                                        <AnswerChoices
                                            answer={answer}
                                            key={`${this.state.questionSet[1].title} : ${answer.title}`}
                                        />
                                    )
                                }
                                else if (answer.type === "T") {
                                    return (
                                        <AnswerTime
                                            answer={answer}
                                            key={`${this.state.questionSet[1].title} : ${answer.title}`}
                                            _setTime={this._setTime2}
                                            _setTimeUnit={this._setTimeUnit2}
                                            _setCurrentPatientAnswer={this._setCurrentPatientAnswer2}
                                            _setDate={this._setDate}
                                        />
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