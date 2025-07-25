import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[]
};
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            
            state.todos=state.todos.filter((curr)=>
                curr.id!==action.payload
            )
        },
        updateTodo:(state,action)=>{
            const {text,id} = action.payload
            state.todos=state.todos.map((curr)=>{
                if(curr.id===id){
                    return {...curr,text}
                }
                else{
                    return curr;
                }
            });
        },
        toggleTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    return {...todo,completed:!todo.completed}
                }
                return todo;  //unchanged  for others.
            })
        },
    }
})
export  const {addTodo,updateTodo,removeTodo,toggleTodo}= todoSlice.actions
export  default todoSlice.reducer