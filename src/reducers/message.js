import *as messages from './../constants/Messages'
import *as types from './../constants/ActionTypes'

const intitialState=messages.MSG_WELCOME;
const message =(state=intitialState,action)=>{
    switch(action.type){
        case types.CHANGE_MESSAGE:  
            const newState=action.message;
            return newState;

        default:
            return [...state];
    }

}
export default message;