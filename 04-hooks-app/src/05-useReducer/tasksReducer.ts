import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction = 
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
  todos:  z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem('tasks-state');
  if(!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    }
  };

  // VALIDAR Mediante Zod
  const result =  TaskStateScheme.safeParse(JSON.parse(localStorageState));

  if(result.error){
    console.log(result.error);
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    }
  };

  return result.data;

  //! CUIDADO ! objeto pudo haber sido manipulado al ser bajado del local storage
  // return JSON.parse(localStorageState)
}


export const taskReducer = (state:TaskState, action: TaskAction): TaskState => {


  switch (action.type) {

    case 'ADD_TODO':{
    const newTodo: Todo = {
      id: Date.now(),
      text: action.payload.trim(),
      completed: false,
    }
      //! NO SE DEBE HACER (lo de la linea de abajo)
      //state.todos.push(newTODO)
      // Porque lo que esta haciendo es mutar el state, eso va en contra de los reducer, 
      // siempre se debe mutar un nuevo estado

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }


    case 'DELETE_TODO':{
      const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);
      const completedTodos = currentTodos.filter( todo => todo.completed).length;

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: completedTodos,
        pending: currentTodos.length - completedTodos,
      };
    }

    case "TOGGLE_TODO":{
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload){
          return{...todo, completed: !todo.completed}
        }
        return todo;
      });
      // return state;
      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter( todo => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      }
    }


    default:
      return state;

  }
};