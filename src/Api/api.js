import {_getUsers,_getQuestions,formatQuestion,_saveQuestion,_saveQuestionAnswer} from './_DATA.js'

export function alldata(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then((user,quesion)=>({
        user,
        quesion,
    }))

}
console.log(alldata())

export function formatQuestions(){
return formatQuestion
}

export function savequesions(){
    return _saveQuestion
}
export function saveQuestionAnswers(){
   return _saveQuestionAnswer
}

