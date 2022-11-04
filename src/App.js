
import './App.css';

import {Radio,FormControlLabel, RadioGroup,FormLabel,FormControl,Box, TextField , Button} from '@mui/material'

function App() {
  
  
  
  return (
    <div className="App">

<Box >

<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>

</Box>


    <h1>Running BMI Calculator</h1>

    <Button variant="outlined">Testing</Button>

    </div>
  );
}

export default App;
