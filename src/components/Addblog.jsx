import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
           <br /><br /><br /><br />
        <Typography variant='h4'>Enter The Blog Here</Typography><br />
        <TextField  label="Blog Name" variant="outlined" /><br /><br />
        <TextField  label="Description" variant="outlined" /><br /><br />
        <TextField  label="Author Name" variant="outlined" /><br /><br />

        <Button variant="contained">SUBMIT</Button>

    </div>
  )
}

export default Addblog