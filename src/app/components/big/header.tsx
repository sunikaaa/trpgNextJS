'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '../drawer';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';



export default function ButtonAppBar() {
  const router = useRouter()
  const toLoginPage = (e) => {
    e.preventDefault()
    router.push("/login")
  }
  const toTopPage = (e) => {
    e.preventDefault()
    router.push("/")
  }
  return (
      <AppBar position="static" color="transparent">

        <Toolbar>
          <div className="mr-2">
            <Drawer />
          </div>
          <Button color="inherit">
            <Typography variant="h6" onClick={toTopPage} >
              TRPG tools
            </Typography>
          </Button>
          <Box flexGrow={1}></Box>
          <Button color="inherit" onClick={toLoginPage} >Login</Button>
        </Toolbar>
      </AppBar>
  );
}