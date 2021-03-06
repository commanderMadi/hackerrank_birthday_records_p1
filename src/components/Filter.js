import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// I refactored the code to use RFCs and hooks.
const Filter = ({ nameChecked, setNameChecked, ageChecked, setAgeChecked }) => {
    const handleNameChange = () => {
        !nameChecked ? setNameChecked(true) : setNameChecked(false);
    };

    const handleAgeChange = () => {
        !ageChecked ? setAgeChecked(true) : setAgeChecked(false);
    };
    return (
        <div className='checkboxes'>
            <Checkbox onChange={handleNameChange} checked={nameChecked} />
            <label>Name</label>
            <Checkbox onChange={handleAgeChange} checked={ageChecked} />
            <label>Age</label>
        </div>
    );
};

export default Filter;
