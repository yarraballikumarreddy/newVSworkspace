import {Axios_Posts,New_Posts} from './types';
import axios from 'axios';

export function axiouspost(){
    console.log('Feacthing..........')
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>dispatch({
            type:Axios_Posts,
            payload:res.data
        }))
        
    }
}
export const createPost = postdata=>dispatch=>{
    console.log('Action Called..........................')
        axios.post('https://jsonplaceholder.typicode.com/posts',postdata)
        .then(res=>dispatch({
            type:New_Posts,
            payload:res.data
        }))
    
}
