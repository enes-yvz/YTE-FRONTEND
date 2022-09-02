import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ListLectures() {

    const columns = [
        {
            width: 150
        },
        {
            field: 'id',
            headerName: 'ID',
            width: 250
    
        },
        {
            field: 'code',
            headerName: 'Code',
            width: 250
    
        },
        {
            field: 'instructor',
            headerName: 'Instructor',
            width: 250
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 250
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 250,
            editable:true
        },
        {
            field: 'startTime',
            headerName: 'Start Time',
            width: 250,
            editable:true
        },
        {
            field: 'endTime',
            headerName: 'End Time',
            width: 250,
            editable:true
        }
    ]

    const [lectures, setLectures] = useState([]);
    

    useEffect(() => {

        getLectures();

    },[]);

    async function getLectures() {

        const response = await axios.get('/lecture');

        setLectures(response.data);
    }


    return (
        <Box className="myBox" sx={{ height: 500, width: '100%'}}>
            <DataGrid 
                rows={lectures}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                hideFooter      
                />
        </Box>
    );
}


export default ListLectures;
