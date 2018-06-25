const pages = {
    coughBloodQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4'],
            nextNormal: { next: 'end' }
        }
    }
}

export default pages