import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {

const [todo, setTodo] = useState([
    {id: 1, todo: 'Acheter du lait'},
    {id: 2, todo: 'Acheter du pain'},
    {id: 3, todo: 'Acheter du fromage'},
])

 const [warning, setWarning] = useState(false)

const addNewTodo = (newTodo) =>{


    if(newTodo !== ''){
        warning && setWarning(false)
        
         setTodo([...todo, {
        id: uuidv4(),
        todo: newTodo
    }])
    }else{
        setWarning(true)
    }
   
}
const warningMsg = warning && <div className="alert alert-danger mt-3" role="alert">Veuillez indiquer un Todo</div>

const myTodos = todo.map(param => {
    return(
        <li className="list-group-item" key={param.id}>{param.todo}</li>
    )
})
    return (
        <div>
            {warningMsg}
            <h1 className="text-center mt-3 mb-3">{todo.length} To-do</h1>
            <ul className="list-group">
                {myTodos}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    );
};

export default Todo;