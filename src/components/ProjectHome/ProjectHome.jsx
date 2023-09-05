import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import './ProjectHome.scss';

const ProjectHome = () => {

    return (
        <div className='project__master-container'>
            <Sidebar />
            <div>ProjectHome</div>
        </div>
    )
}

export default ProjectHome