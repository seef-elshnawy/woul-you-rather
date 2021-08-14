import { receiveQuestions,  } from './quesions'
import { receiveUsers } from './users'
import { alldata } from '../Api/api';

export function handleInitialData(id) {
    return (dispatch) => {
       return alldata(id)
        .then (({questions, users}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
        })
    }
}