export interface Todo {
    id: number,
    todo: string,
    completed: boolean,
}

export interface TodoResponse {
    todos: Todo[]
}

export interface UseTodos {
    todos: Todo[],
    addTodo: (title: string) => void,
    changeStatusCompleted: (id: number) => void,
    deleteTodo: (id: number) => void,
    clearListTodos: () => void,
}

export interface FooterProps {
    clearListTodos: () => void
}

export interface HeaderProps {
    addTodo: (title: string) => void;
}

export interface MainProps {
    todos: Todo[],
    changeStatusCompleted: (id: number) => void,
    deleteTodo: (id: number) => void
}
