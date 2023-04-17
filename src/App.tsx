import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { useTodos } from "./components/customHooks/useTodos"

const App: React.FC = () => {
    const {
        todos, addTodo, changeStatusCompleted, deleteTodo, clearListTodos,
    } = useTodos()

  return (
    <div className="container">
        <Header addTodo={addTodo} />
        <Main todos={todos} changeStatusCompleted={changeStatusCompleted} deleteTodo={deleteTodo} />
        <Footer clearListTodos={clearListTodos} />
    </div>
  )
}

export default App