import React from 'react'
import {  AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
        <Toolbar>
                <Typography variant='h3'style={{color:'black'}} ><b>Personal Blog</b></Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit' ><Link to='/home'><b>HOME</b></Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to='/bl'><b>ADD</b></Link></Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>

        </AppBar>
          

    </div>
  )
}

export default Navbar