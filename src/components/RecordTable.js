import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RecordTable = ({ nameChecked, ageChecked, people }) => {
    const sortedAlphabetically = () => {
        if (ageChecked) {
            return people.sort((currentPerson, nextPerson) => {
                const ageOne = currentPerson.dob;
                const ageTwo = nextPerson.dob;
                const yearOne = Number(ageOne.split('/')[2]);
                const yearTwo = Number(ageTwo.split('/')[2]);
                if (yearOne === yearTwo) {
                    return Number(ageOne.split('/')[0] - ageTwo.split('/')[0]);
                }
                return yearOne - yearTwo;
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
                    {sortedAlphabetically().map((person) => {
                        return (
                            <TableRow>
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
