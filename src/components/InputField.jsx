import React, { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
    IconButton,
    Paper,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const classes = {
    header: {display: 'flex', pr: '20px', justifyContent: 'space-between'},
    content: {
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        borderTop: '1px solid lightgrey',
    },
    section: {
        width: '30%',
        p: '20px',
        flex: '1 1 auto',
    },
    text: {
        fontWeight: '600',
        mb: '12px',
    },
    inputContainer: { display: 'flex', columnGap: '6px'},
    field: { flex: '1 1 auto' },
    btnContainer: { m: '0 auto' },
}

const state = {
    clientDetails: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    },
    jobDetails: {
        jobType: '',
        jobSource: '',
        jobDescription: '',
    },
    serviceLocation: {
        address: '',
        city: '',
        state: '',
        zipCode: '',
        area: '',
    },
    scheduled: {
        startDate: '',
        startTime: '',
        endTime: '',
        testSelect: ''
    },
}
export const InputField = ({ onClick, isOpen, setIsSaveState, dispatch }) => {
    const [initialState, setInitialState] = useState(state)

    const handleClose = (close=false) => {
        onClick(false);
        !close && setIsSaveState(true);
    };
    const handleChange = (e) => {
        if (Object.keys(initialState.clientDetails).includes(e.target.name)) {
            console.log(1)
            return setInitialState({ ...initialState, clientDetails: {...initialState.clientDetails, [e.target.name]: e.target.value} })
        }
        if (Object.keys(initialState.jobDetails).includes(e.target.name)) {
            console.log(2)
            return setInitialState({ ...initialState, jobDetails: {...initialState.jobDetails, [e.target.name]: e.target.value} })
        }
        if (Object.keys(initialState.serviceLocation).includes(e.target.name)) {
            return setInitialState({ ...initialState, serviceLocation: {...initialState.serviceLocation, [e.target.name]: e.target.value} })
        }
        if (Object.keys(initialState.scheduled).includes(e.target.name)) {
            return setInitialState({ ...initialState, scheduled: {...initialState.scheduled, [e.target.name]: e.target.value} })
        }
    }

    return (
        <Dialog
            maxWidth='lg'
            open={isOpen}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    handleClose();
                    dispatch(initialState);
                },
            }}
        >
            <Box sx={classes.header}>
                <DialogTitle>New Crate a job</DialogTitle>
                <IconButton
                    aria-label='close'
                    onClick={() => handleClose(true)}
                    sx={{ color: 'lightgrey' }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent sx={classes.content}>
                <Paper elevation={6} sx={classes.section}>
                    <DialogContentText sx={classes.text}>
                        Client Details
                    </DialogContentText>
                    <Box sx={classes.inputContainer}>
                        <TextField
                            sx={classes.field}
                            margin='dense'
                            name='firstName'
                            label='First Name'
                            type='text'
                            variant='outlined'
                            value={initialState.clientDetails?.firstName || ''}
                            onChange={handleChange}
                        />
                        <TextField
                            sx={classes.field}
                            margin='dense'
                            name='lastName'
                            label='Last Name'
                            type='text'
                            variant='outlined'
                            value={initialState.clientDetails?.lastName || ''}
                            onChange={handleChange}
                        />
                    </Box>
                    <TextField
                        margin='dense'
                        name='phone'
                        label='Phone'
                        type='tel'
                        fullWidth
                        variant='outlined'
                        value={initialState.clientDetails?.phone || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin='dense'
                        name='email'
                        label='Email (optional)'
                        type='email'
                        fullWidth
                        variant='outlined'
                        value={initialState.clientDetails?.email || ''}
                        onChange={handleChange}
                    />
                </Paper>
                <Paper elevation={6} sx={classes.section}>
                    <DialogContentText sx={classes.text}>
                        Job Details
                    </DialogContentText>
                    <Box sx={classes.inputContainer}>
                        <FormControl sx={classes.field}>
                            <InputLabel>Job type</InputLabel>
                            <Select
                                value={initialState.jobDetails.jobType}
                                label="Job type"
                                onChange={handleChange}
                                name='jobType'
                            >
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={classes.field}>
                            <InputLabel>Job source</InputLabel>
                            <Select
                                value={initialState.jobDetails.jobSource}
                                label="Job source"
                                name='jobSource'
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        margin='dense'
                        name='jobDescription'
                        label='Job description (optional)'
                        type='text'
                        fullWidth
                        variant='outlined'
                        multiline
                        rows={4.5}
                        value={initialState.jobDetails.jobDescription}
                        onChange={handleChange}
                    />
                </Paper>
                <Paper elevation={6} sx={classes.section}>
                    <DialogContentText sx={classes.text}>
                        Service location
                    </DialogContentText>
                    <TextField
                        margin='dense'
                        name='address'
                        label='Address'
                        type='text'
                        fullWidth
                        variant='outlined'
                        value={initialState.serviceLocation.address}
                        onChange={handleChange}
                    />
                    <TextField
                        margin='dense'
                        name='city'
                        label='City'
                        type='text'
                        fullWidth
                        variant='outlined'
                        value={initialState.serviceLocation.city}
                        onChange={handleChange}
                    />
                    <TextField
                        margin='dense'
                        name='state'
                        label='State'
                        type='text'
                        fullWidth
                        variant='outlined'
                        value={initialState.serviceLocation.state}
                        onChange={handleChange}
                    />
                    <Box sx={classes.inputContainer}>
                        <TextField
                            sx={classes.field}
                            margin='dense'
                            name='zipCode'
                            label='Zip code'
                            type='text'
                            variant='outlined'
                            value={initialState.serviceLocation.zipCode}
                            onChange={handleChange}
                        />
                        <FormControl sx={classes.field} margin='dense'>
                            <InputLabel>Area</InputLabel>
                            <Select
                                onChange={handleChange}
                                name='area'
                                label='Area'
                                value={initialState.serviceLocation.area}
                                >
                                <MenuItem value='a'>a</MenuItem>
                                <MenuItem value='b'>b</MenuItem>
                                <MenuItem value='c'>c</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Paper>
                <Paper elevation={6} sx={classes.section}>
                    <DialogContentText sx={classes.text}>
                        Scheduled
                    </DialogContentText>
                    <TextField
                        name='startDate'
                        label='Start date'
                        type='date'
                        fullWidth
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={initialState.scheduled.startDate}
                        onChange={handleChange}
                        />
                    <Box sx={classes.inputContainer}>
                        <TextField
                            sx={classes.field}
                            margin='dense'
                            name='startTime'
                            label='Start time'
                            type='time'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={initialState.scheduled.startTime}
                            onChange={handleChange}
                        />
                        <TextField
                            sx={classes.field}
                            margin='dense'
                            name='endTime'
                            label='End time'
                            type='time'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={initialState.scheduled.endTime}
                            onChange={handleChange}
                        />
                    </Box>
                    <FormControl margin='dense' fullWidth>
                        <InputLabel>Test select</InputLabel>
                        <Select
                            defaultValue={initialState.scheduled.testSelect}
                            name='testSelect'
                            label="Test select"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                        </Select>
                    </FormControl>
                </Paper>
            </DialogContent>
            <DialogActions sx={classes.btnContainer}>
                <Button variant='contained' type='submit'>Create Job</Button>
                <Button variant='contained' onClick={() => handleClose()}>Save info</Button>
            </DialogActions>
        </Dialog>
    );
};



