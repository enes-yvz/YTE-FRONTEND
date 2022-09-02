import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ListLecturesAdmin() {

    const columns = [
        {
            field: 'delete',
            headerName: 'Delete',
            width: 150,
            renderCell: (params) => (
            <strong>
                <button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => {
    
                        deleteLecture(params.row.id);
    
                    }}>
                    Delete
                </button>
            </strong>)
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

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        updateLecture(updatedRow);
    };

    useEffect(() => {

        getLectures();

    },[]);

    async function getLectures() {

        const response = await axios.get('/lecture');

        setLectures(response.data);
    }

    async function updateLecture(lecture) {
        
        toast("Lecture Updated Succesfully");

        const res = await axios.put("/lecture/"+lecture.id, lecture);
        return res;
    }

    async function deleteLecture(id) {

        const responseDelete = await axios.delete('/lecture/'+id);
    
        getLectures();
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
                editMode="row"
                processRowUpdate={processRowUpdate}
                experimentalFeatures={{ newEditingApi: true }}     
                />
        </Box>
    );
}


export default ListLecturesAdmin;