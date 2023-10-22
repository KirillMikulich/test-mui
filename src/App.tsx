import React from 'react';
import { FormControl, TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { NumericFormatCustom, TextMaskCustom } from './CustomInput';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function App() {

  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      <TextField
        id="filled-error-helper-text"
        label="Field label"
        defaultValue=""
        variant="standard"
      />
      <br />
      <TextField
        id="filled-error-helper-text"
        label="Field label"
        defaultValue=""
        variant="standard"
        helperText={'asdasd sad ass da'}
      />
      <br />
      <TextField
        error
        type='number'
        id="filled-error-helper-text"
        label="Type number"
        onChange={(value: any) => console.log(value.target.value)}
        defaultValue=""
        variant="standard"
      />
      <br />
      <TextField
        disabled
        id="filled-error-helper-text"
        label="Field label"
        defaultValue=""
        variant="standard"
      />
      <br />
      <TextField
        error
        id="filled-error-helper-text"
        label="Field label"
        defaultValue=""
        variant="standard"
        helperText={'test tes'}
      />
      <br />
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              BYN
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        variant="standard"
      />
      <br />
      <TextField
        error
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              BYN
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        variant="standard"
      />
      <br />
      <TextField
        error
        id="filled-error-helper-text"
        label="Placeholder"
        placeholder='+375 (00) 000-00-00'
        defaultValue=""
        variant="standard"
        helperText={'test tes'}
      />
      <br />
      <TextField
        label="Imask"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: TextMaskCustom as any,
          disableUnderline: true,
        }}
        variant="standard"
      />
    </div>
  );
}

export default App;
