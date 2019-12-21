const redux = require('redux')
const createStore = redux.createStore

const buycake ="buycake"

function buyCakes(){
return{
    type : buycake,
    info : 'first redux action'
}
}

const initialState = {
    numOfCakes:10
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case buycake : return{
//spread operator to use copy the state
            ...state,
            numOfCakes:state.numOfCakes-1,
            
        }

       
        default : return state
    }

}

const Store =createStore(reducer)
console.log("inital states==",Store.getState())
const unsubscribe=Store.subscribe(()=>console.log("upadatestates",Store.getState()))
Store.dispatch(buyCakes());
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())
Store.dispatch(buyCakes());
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())
Store.dispatch(buyCakes())

unsubscribe()



