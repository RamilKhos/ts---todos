import { MainProps } from "../types/types"
import { List, ListItem, ListItemText, Divider, Button, FormGroup } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';

export const Main: React.FC <MainProps> = ({ todos, deleteTodo, changeStatusCompleted }) => {
    return (
    <main className="main">
        <div className="main__content">
            <List sx={{ width: '100%', color: '#FCFAF1' }}>
                    {todos.length > 0 ? todos.map((todo) => { return (
                        <>
                        <ListItem key={todo.id} disablePadding >
                            <Button onClick={() => changeStatusCompleted(todo.id)}>
                                {todo.completed === true ? <CheckCircleOutlineSharpIcon sx={{
                                    color: '#549D42',
                                }} /> : <PanoramaFishEyeSharpIcon sx={{
                                    color: '#8A3F1B'
                                }} />}
                            </Button>
                            
                            <ListItemText primary={todo.todo} sx={{ 
                                width: '100%', 
                                display: 'inline-block', 
                                wordWrap: 'break-word',
                                color: todo.completed ?  '#549D42' : '#8A3F1B',
                                textDecoration: todo.completed ? 'line-through' : 'none'
                                }} />
                            
                            <Button onClick={() => deleteTodo(todo.id)}>
                                <DeleteIcon sx={{ color: '#F23A29', opacity: .6 }} />
                            </Button>

                        </ListItem>

                        <Divider sx={{ opacity: .8, marginBottom: 1.5 }} />
                        </>
                        )
                        })
                        : (<div className="main__no-content">No task...</div>)
                    }
            </List>
        </div>
    </main>
    )
}
  