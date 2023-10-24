import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
//#FFE4E2 -red
export const theme = createTheme ({
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          disableUnderline: true,
        },
      },
      styleOverrides: {
        root: {
          backgroundColor: '#EFF0F1',
          '&:has(.Mui-focused)': {
            backgroundColor: '#DFE1E3',
          },
          '&:has(.Mui-error)': {
                backgroundColor: '#FFE4E2'
          },
          borderRadius: '10px',
          paddingLeft: '8px',
          paddingRight: '8px',
          maxWidth: '400px',
          '& .MuiFormLabel-root, .MuiFormLabel-root.Mui-focused, .MuiFormLabel-root.Mui-error': {
            color: '#5E666F',
            paddingLeft: '12px',
            paddingRight: '8px',
            top: '-10%',
          },
          '& .MuiFormLabel-root.MuiFormLabel-filled:not(.Mui-focused)': {
            top: '3px',
          },
          "& .MuiFormHelperText-root, .MuiFormHelperText-root.Mui-error" : {
            position: 'absolute',
            top: 'auto',
            bottom: '-18px',
            color: '#5E666F'
          },
          '& .MuiFormLabel-root.Mui-focused': {
            marginTop: '8px'
          },
          '& .MuiFormControl-root > .Mui-error' : {
            backgroundColor: 'red'
          },
          '& .MuiSelect-icon': {
            top: '50%',
            transform: 'translateY(-70%)',
          },
          '& .MuiSelect-iconOpen': {
            transform: 'translateY(-70%) rotateX(180deg)'
          },
          '& .MuiAutocomplete-endAdornment': {
            top: '50%',
            transform: 'translateY(-70%)',
          },
        },
      }
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                color: '#121518',
            },
        }
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: '10px',
        },
        select: {
          backgroundColor: 'transparent',
          padding: '4px 32px 8px 0px'
        }
      }
    }


  }
});
