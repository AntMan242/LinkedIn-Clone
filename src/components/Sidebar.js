import React from 'react';
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>AJ</h2>
                <h4>something.com</h4>
            </div>
        </div>
    )
}

export default Sidebar
