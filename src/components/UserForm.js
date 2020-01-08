import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function UserForm(props) {
    const [ values, setState ] = useState({
        id: '',
        firstName: '',
        lastName: '',
        dob: ''
    });

    const handleChange = input => e => {
        setState({
            ...values, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <TextField 
            helperText="Enter your First Name"
            label="First Name"
            onChange={handleChange('firstName')}
            />
            <Button>Submit</Button>
        </div>
    );
}