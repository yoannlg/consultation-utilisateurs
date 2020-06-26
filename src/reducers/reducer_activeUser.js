import { USER_SELECTED } from '../actions/index'

export default function(state = null, action){
    console.log('STATE ::: ', state)
    console.log('ACTION ::: ', action)

    switch(action.type){
        case USER_SELECTED :
            return action.payload;
    }
    return state;
}