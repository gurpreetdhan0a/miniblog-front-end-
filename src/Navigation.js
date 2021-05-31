import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import GoogleAuth from './GoogleAuth';
const Navigation = () => {
    return (
        <div style={{display:"flex", width:"100%", justifyContent:"space-evenly"}}>
            <Link to="/form"><Button variant="contained" color="primary">Form</Button></Link>
            <Link to="/allPosts"><Button variant="contained" color="primary">Posts</Button></Link>
            <GoogleAuth/>
        </div>
    );
};

export default Navigation;