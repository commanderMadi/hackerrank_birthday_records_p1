import React, { useState } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

const App = () => {
    const [nameChecked, setNameChecked] = useState(false);
    const [ageChecked, setAgeChecked] = useState(false);
    const people = [
        {
            name: 'Veronica Mize',
            dob: '11/29/2011',
        },
        {
            name: 'Cecilia Olsson',
            dob: '09/16/1992',
        },
        {
            name: 'Peter Parker',
            dob: '01/16/1992',
        },
        {
            name: 'Jimmy Shergil',
            dob: '12/12/2001',
        },
        {
            name: 'Alexander Alfred',
            dob: '02/09/1891',
        },
        {
            name: 'Janice Shroyer',
            dob: '12/01/1982',
        },
        {
            name: 'Ralph White',
            dob: '11/30/2011',
        },
        {
            name: 'Deborah T. Decker',
            dob: '10/31/1999',
        },
    ];

    return (
        <div className='container-fluid'>
            <center>
                <h1>Birthday Records</h1>
            </center>
            <Filter
                nameChecked={nameChecked}
                ageChecked={ageChecked}
                setNameChecked={setNameChecked}
                setAgeChecked={setAgeChecked}
            ></Filter>
            <RecordTable
                nameChecked={nameChecked}
                ageChecked={ageChecked}
                people={people}
            ></RecordTable>
        </div>
    );
};

export default App;
