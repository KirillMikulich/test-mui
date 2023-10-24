import React from 'react';
import { Autocomplete, FormControl, MenuItem, Select, TextField } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { NumericFormatCustom, TextMaskCustom } from './CustomInput';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
function App() {
  const [age, setAge] = React.useState('Placeholder');

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '1320',
  });

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleChange3 = (event: any, value: any) => {
    setSelectedValue(value);
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      {/* <TextField
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
      />*/}
      <br />

      <TextField
        label="Imask"
        value={''}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: TextMaskCustom as any,
          disableUnderline: true,
        }}
        variant="standard"
      /> 
      <TextField
        label="Imask"
        value={values.numberformat}
        onChange={handleChange2}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: TextMaskCustom as any,
          disableUnderline: true,
        }}
        variant="standard"
      /> 
  
  <TextField
        variant="standard"
        select
        sx={{
          marginTop: '20px'
        }}
        value={age === '' ? 'Placeholder' : age}
        label='Age'
        SelectProps={{
          IconComponent: ExpandMoreIcon
        }}
        onChange={handleChange}
      >
      <MenuItem value="Placeholder">
        Placeholder
      </MenuItem>
        
      <MenuItem value={'10'}>Ten</MenuItem>
      <MenuItem value={'20'}>Twenty</MenuItem>
      <MenuItem value={'30'}>Thirty</MenuItem>
    </TextField>

    <TextField
        variant="standard"
        error
        select
        sx={{
          marginTop: '20px'
        }}
        SelectProps={{
          IconComponent: ExpandMoreIcon
        }} 
        
        value={age === '' ? 'Placeholder' : age}
        label='Age'
        onChange={handleChange}
      >
      <MenuItem value="Placeholder">
        Placeholder
      </MenuItem>
        
      <MenuItem value={'10'}>Ten</MenuItem>
      <MenuItem value={'20'}>Twenty</MenuItem>
      <MenuItem value={'30'}>Thirty</MenuItem>
    </TextField>


<FormControl>
        <Autocomplete
          value={selectedValue}
          onChange={handleChange3}
          options={options}
          disablePortal
          popupIcon={<ExpandMoreIcon/>}
          renderInput={(params) => 
          <TextField {...params}
          variant="standard"
          error
          sx={{
            marginTop: '20px'
          }}
          label='Age'
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
          }} />}
/>
      </FormControl>
    </div>
  );
}

export default App;
