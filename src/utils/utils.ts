import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#986969',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#986969',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#986969',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#986969',
      },
      '&:hover fieldset': {
        borderColor: '#986969',
      },
    },
    '& .MuiInputBase-input': {
        color: '#FCFAF1',
    },
})

