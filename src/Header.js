import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return (
    <div className='header'>

        <IconButton>
            <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>

        <img
            className='header__logo' 
            src='https://www.bandt.com.au/information/uploads/2021/12/flame-gradient-RGB_1000px.jpg'
            alt=''
        />

        <IconButton>
            <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header