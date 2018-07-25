import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { applyMiddleware, combineReducers,createStore } from "redux";
import axios from 'axios'
import logger from 'redux-logger'
import thunkMiddleware from "redux-thunk"


/*********************************************************************************/

// const  reducer = function (state, action) {
//     if(action.type === "INC"){
//         return state+action.payload
//     }
//     if(action.type === "DEC"){
//         return state-action.payload
//     }
//     return state;
// }
//
// const  store = createStore(reducer, 0);
//
// store.subscribe(()=>{
//     console.log("store", store.getState())
// })
//
// store.dispatch({ type: "INC", payload: 1 })
// store.dispatch({ type: "INC", payload: 2 })
// store.dispatch({ type: "INC", payload: 33 })
// store.dispatch({ type: "DEC", payload: 1 })
// store.dispatch({ type: "DEC", payload: 1000 })


/*********************************************************************************/

// const userReducer = (state={}, action)=>{
//     switch (action.type){
//         case "CHANGE_NAME":
//             state = {...state, name: action.payload}
//             break;
//         case "CHANGE_AGE":
//             state = {...state, age:action.payload}
//             break;
//     }
//     return state
// }
//
// const tweetsReducer = (state={}, actions)=>{
//     return state
// }
//
//
// const reducer = combineReducers({
//     user: userReducer,
//     tweets: tweetsReducer
// })
//
// const  store = createStore(reducer, {
//     user: {
//         name:"will",
//         age: 35,
//     },
//     tweets: []
// });
//
// store.subscribe(()=>{
//     console.log("store", store.getState())
// })
//
// store.dispatch({ type: "CHANGE_NAME", payload: "will" })
// store.dispatch({ type: "CHANGE_NAME", payload: 2 })
// store.dispatch({ type: "CHANGE_AGE", payload: 33 })
// store.dispatch({ type: "CHANGE_AGE", payload: 1 })
// store.dispatch({ type: "CHANGE_AGE", payload: 1000 })


/***********************************************************************/

// const reducer = (initialState=0, action)=>{
//     if(action.type === "INC"){
//         console.log('init:', initialState)
//         return initialState + 1;
//     }else if(action.type === "DEC"){
//         console.log('init:', initialState)
//         return initialState - 1
//     }
//     return initialState
// }
//
// const logger = (store)=> (next) => (action) =>{
//     console.log("action fired", action)
//     action.type = "DEC"
//     next(action)
// }
//
// const error = (store)=> (next) => (action) =>{
//     try {
//         next(action)
//     }catch (e) {
//         console.log("AHHHH", e)
//     }
//
// }
//
// const middleware = applyMiddleware(logger, error);
//
// const store = createStore(reducer, 1, middleware)
//
// store.subscribe(()=>{
//     console.log("store changed: ", store.getState())
// })
//
// store.dispatch({ type: "INC"  })
// store.dispatch({ type: "INC"  })
// store.dispatch({ type: "INC"  })
// store.dispatch({ type: "DEC"  })
// store.dispatch({ type: "DEC"  })
// store.dispatch({ type: "E"  })


/***********************************************************************/

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

const reducer = (state = {}, action)=>{
    switch (action.type){
        case "FETCH_USERS_START": {
            return { ...state, fetching: true }
            break;
        }
        case "FETCH_USERS_ERROR": {
            return { ...state, fetching: false, error:action.payload }
            break;
        }
        case "RECEIVE_USERS": {
            return { ...state, fetching: false, fetched:true, users:action.payload }
            break;
        }
    }
    return state
}

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware)


// store.subscribe(()=>{
//     console.log("store changed: ", store.getState())
// })

store.dispatch((dispatch)=>{
    dispatch({type: "FETCH_USERS_START"})
    axios.get("http://resr.learncode.academy/api/wstern/users")
        .then((response)=>{
            dispatch({type: "RECEIVE_USERS", payload: response.data})
        })
        .catch((err)=>{
            dispatch({type: "FETCH_USERS_ERROR", payload:err})
        })
    //do something asyc
    //dispatch({})
})




























