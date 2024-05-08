import React, { useState } from "react";
import { Box } from "@mui/material";
import { Dashboard } from './components/Dashboard';
import { InputField } from './components/InputField';

const classes = {
  wrap: {
    width: '200px',
    margin: '25vh auto'
  },
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaveState, setIsSaveState] = useState(false);
  const [state, setState] = useState()

  const dispatch = (state) => {
    setState(state);
  }

  return (
    <Box sx={classes.wrap}>
      <Dashboard onClick={setIsOpen} />
      {isOpen && <InputField onClick={setIsOpen} isOpen={isOpen} setIsSaveState={setIsSaveState} dispatch={dispatch} />}
      {isSaveState &&
        <Box sx={{ mt: '50px' }}>State is Save
          <Box sx={{ height: '100%', width: '200px' }}>
            {Object.keys(state.clientDetails).map(key => {
              console.log(key, 'key')
              return <div key={key}>{key} : {state.clientDetails[key]}</div>
            })}
            {Object.keys(state.jobDetails).map(key => {
              console.log(key, 'key')
              return <div key={key}>{key} : {state.jobDetails[key]}</div>
            })}
            {Object.keys(state.serviceLocation).map(key => {
              console.log(key, 'key')
              return <div key={key}>{key} : {state.serviceLocation[key]}</div>
            })}
            {Object.keys(state.scheduled).map(key => {
              console.log(key, 'key')
              return <div key={key}>{key} : {state.scheduled[key] ? state.scheduled[key] : 'no'}</div>
            })}

          </Box>
        </Box>}
    </Box>
  );
}

export default App;
