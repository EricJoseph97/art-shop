import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function UserForm(props) {
    const [ values, setValues ] = useState({
        id: '',
        firstName: '',
        lastName: '',
        dob: ''
    });



    const handleChange = input => e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <Dialog open={props.dialog} onBackdropClick={props.closeDialog} onEscapeKeyDown={props.closeDialog} >
                <DialogTitle>Create Account</DialogTitle>
                <DialogContent>
                    <TextField 
                    name="firstName"
                    helperText="Enter your First Name"
                    label="First Name"
                    onChange={handleChange('firstName')}
                    />
                    <TextField 
                    name="lastName"
                    helperText="Enter your Last Name"
                    label="Last Name"
                    onChange={handleChange('LastName')}
                    />
                    <TextField 
                    name="email"
                    helperText="Enter your Email"
                    label="Email"
                    onChange={handleChange('emial')}
                    />
                    <br />
                    <TextField 
                    name="dob"
                    type="date"
                    helperText="Enter your Date of birth"
                    label=" "
                    onChange={handleChange('dob')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeDialog} color="secondary">cancel</Button>
                    <Button color="primary">Submit</Button>
                </DialogActions>
                
            </Dialog>

        </div>
    );
}