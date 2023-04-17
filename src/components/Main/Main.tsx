import { MainProps } from "../types/types"
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button, FormGroup } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';


export const Main: React.FC <MainProps> = ({ todos, deleteTodo }) => {
    return (
    <main className="main">
        <div className="main__content">
            <List sx={{ width: '100%', color: '#FCFAF1' }}>
                <FormGroup>
                {todos.length > 0 ?
                    todos.map((todo) => {
                        return (
                            <>
                            <ListItem key={todo.id} disablePadding >
                                <Checkbox />
                                <ListItemText 
                                primary={todo.todo}
                                sx={{
                                    width: '100%',
                                    display: 'inline-block',
                                    wordWrap: 'break-word',
                                }}
                                 />
                                <Button onClick={() => deleteTodo(todo.id)}>
                                    <DeleteIcon sx={{ color: '#c18692' }} />
                                </Button>
                            </ListItem>
                            <Divider sx={{
                                opacity: .8,
                                marginBottom: 1.5
                            }} />
                            </>
                        )
                    })
                    : <CircularProgress />
                }
                </FormGroup>
            </List>
        </div>
    </main>
    )
}
  