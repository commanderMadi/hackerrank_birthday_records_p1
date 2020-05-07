import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RecordTable = ({ nameChecked, ageChecked, people }) => {
    const sorted = () => {
        // If both age and name are checked, the sorting will be by age.
        if (ageChecked) {
            return people.sort((currentPerson, nextPerson) => {
                const ageOne = currentPerson.dob;
                const ageTwo = nextPerson.dob;
                return new Date(ageOne) - new Date(ageTwo);
            });
        }
        return people.sort((currentPerson, nextPerson) => {
            const nameOne = currentPerson.name.toLowerCase();
            const nameTwo = nextPerson.name.toLowerCase();
            if (nameOne < nameTwo) {
                return -1;
            }
            if (nameOne > nameTwo) {
                return 1;
            }
            return 0;
        });
    };

    return (
        <Paper className='width'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className='tcell table-header'>
                            Name
                        </TableCell>
                        <TableCell className='tcell table-header'>
                            Date of Birth
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sorted().map((person) => {
                        return (
                            <TableRow key={person.name}>
                                <TableCell className='tcell'>
                                    {person.name}
                                </TableCell>
                                <TableCell className='tcell'>
                                    {person.dob}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default RecordTable;
