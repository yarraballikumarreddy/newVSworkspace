 import {Axios_Posts,New_Posts} from '../actions/types';
 const intialState={
  items:[],
  item:{}
}
 export default function(state=intialState,action){
     switch(action.type){
         case Axios_Posts:
             console.log('reducer..........')
             return{
                 ...state,
                 items:action.payload
             }
             case New_Posts:
                    return{
                        ...state,
                        item:action.payload
                    }
         default:
             return state;
     }
 }