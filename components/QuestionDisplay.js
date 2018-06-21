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
    }

    _callSetAnswerForThePage = (answer, method) => {
        this.props._setAnswersForThePage(answer, method)
    }

    _setCurrentPatientAnswer1 = async (currentPatientAnswer_1) => {
        await this.setState({ currentPatientAnswer_1 })
        this._callSetAnswerForThePage(currentPatientAnswer_1, ADD)
        // this._setAllPatientAnswers()
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
        // this._setAllPatientAnswers()
        console.log("multiple current answer 1 = ", this.state.multipleChoiceCurrentAnswer_1)
    }

    _setAllPatientAnswers = () => {
        let allPatientAnswers = this.state.allPatientAnswers
        let questionPerPage = this.props.questionSet.length
        if (questionPerPage === 1) {
            if (this.props.questionSet[0].type === "Choice") {

            }
            if (this.props.questionSet[0].type === "MultiChoice") {
                if (_.isEmpty(this.state.multipleChoiceCurrentAnswer_1 !== false)) {
                    let allAnswers = ""
                    this.state.multipleChoiceCurrentAnswer_1.map((answer) => allAnswers = allAnswers + answer.title + " ")
                    allPatientAnswers.push("" + this.props.questionSet[0].title + ": " + allAnswers)
                    console.log("all = ", allPatientAnswers)

                    //user choose อื่นๆ
                    if (this.state.otherPatientAnswer_1 !== "") {
                        allAnswers = allAnswers + " " + this.state.otherPatientAnswer_1
                        allAnswers = allAnswers.replace('อื่นๆ', '') //remove the word อื่นๆ
                        console.log("อื่นๆ = ", allAnswers)
                    }
                }

            }
        }
        if (questionPerPage === 2) {

        }
    }

    _setAnswerNumberSelected = async (answerNumberSelected) => {
        this.setState({ answerNumberSelected })
    }

    _setTime1 = async (time_1) => {
        this.setState({ time_1 })
    }

    _setTimeUnit1 = (timeUnit_1) => {
        this.setState({ timeUnit_1 })
    }

    _setOtherPatientAnswer1 = (otherPatientAnswer_1) => {
        this.setState({ otherPatientAnswer_1 })
        console.log("otherPatientAnswer 1 = ", this.state.otherPatientAnswer_1)
    }

    _setCurrentPatientAnswer2 = async (currentPatientAnswer_2) => {
        await this.setState({ currentPatientAnswer_2 })
        // this._setAllPatientAnswers()
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
        }
        //user click already selected answer
        else if (method === "delete") {
            let multipleChoiceCurrentAnswer = this.state.multipleChoiceCurrentAnswer_2
            removedMultipleChoice = multipleChoiceCurrentAnswer.filter((selectedAnswer) => {
                return selectedAnswer.title !== answer.title
            })
            await this.setState({ multipleChoiceCurrentAnswer_2: removedMultipleChoice })
        }
        // this._setAllPatientAnswers()
        console.log("multiple current answer 2 = ", this.state.multipleChoiceCurrentAnswer_2)
    }

    _setTime2 = async (time_2) => {
        this.setState({ time_2 })
    }

    _setTimeUnit2 = (timeUnit_2) => {
        this.setState({ timeUnit_2 })
    }

    _setOtherPatientAnswer2 = (otherPatientAnswer_2) => {
        this.setState({ otherPatientAnswer_2 })
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
        console.log("state in display = ", this.state)
        return (
            <View style={styles.container}>

                <Question question={this.props.questionSet[0]} />
                {
                    this.props.questionSet[0].type === "Choice" ?
                        this.props.questionSet[0].answer.map((answer, index) => {

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
                                    />
                                )
                            }
                        })
                        : this.props.questionSet[1].type === "MultiChoice" ?
                            (
                                <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
                                    {this.props.questionSet[1].answer.map((answer, index) => {
                                        if (answer.type === "c" || answer.type === "E" || answer.type === "U" || (answer.type === User.info.sex) || (answer.type === "o")) {
                                            if (answer.type === "o") {
                                                return (
                                                    <AnswerOther
                                                        answer={answer}
                                                        key={`${this.props.questionSet[1].title} : ${answer.title}`}

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
                                    })
                                    }
                                </View>
                            )
                            : null
                }
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
    }
}