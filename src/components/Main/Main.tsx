import { MainProps } from "../types/types"

export const Main: React.FC <MainProps> = ({ todos, changeStatusCompleted, deleteTodo }) => {

    return (
    <div className="d-flex justify-content-center">
      <ul className="list-group w-75">
        {todos.length > 0
          ? todos.map((todo, i) => (
            <li
              key={todo.id}
              className={`list-group-item d-flex align-items-center justify-content-between 
              ${todo.completed ? 'text-decoration-line-through' : ''}`}
            >
              <span>{`${i + 1}. ${todo.todo}`}</span>
              <div>
                <button type="button" className="btn btn-success btn-sm ms-2" onClick={() => changeStatusCompleted(todo.id)}>Done</button>
                <button type="button" className="btn btn-danger btn-sm ms-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))
          : <span>No tasks...</span>}
      </ul>
    </div>
    )
}
  