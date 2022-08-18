import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
        field: 'username',
        headerName: 'Username',
        width: 250
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 250
    },
    {
        field: 'surname',
        headerName: 'Surname',
        width: 250
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 250
    }
]


function ListUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers();

    },[]);

    async function getUsers() {

        const response = await axios.get('/user');

        setUsers(response.data);
    }


    return (
        <Box class="myBox" sx={{ height: 200, width: '100%'}}>
            <DataGrid 
                rows={users}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                hideFooter
            />
        </Box>
    );
}


export default ListUsers;
