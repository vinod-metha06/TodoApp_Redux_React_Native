import { TodoAction } from "../constanst/constanst";

export interface Reducer{
    todos:any
}

const initialState={
    todos:[]
}

export const todoreducer=(state=initialState,action:any)=>{
    switch (action.type) {
        case TodoAction.ADD_TODO:
            return{
                ...state,
               todos: [...state.todos,action.payload]
            }
            case TodoAction.TOGGLE_TODO:
                return {
                  ...state,
                  todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                  )
                };   
                case TodoAction.DELETE_TODO:
                    return {
                      ...state,
                      todos:state.todos.filter(todo => todo.id !== action.payload)
                    };  
    
        default:
           return state;
    }

}