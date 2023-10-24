'use client';

import React,{ReactNode, useEffect} from 'react'

import '../styles/globals.css'
import './tailwind.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import theme from '../styles/theme'
import Header from '../components/big/header'
import Footer from '../components/big/footer'
import {initStore, useStore} from '../reducer/index'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useSelector, useDispatch, Provider } from 'react-redux';
import { wrapper } from '../reducer';


const  MyApp = ({ Component, pageProps }:any)=> {
  useEffect(() =>{
    const jssStyles = document.querySelector('#jss-server-side')
    if(jssStyles && jssStyles.parentNode){
      jssStyles.parentNode.removeChild(jssStyles)
    }
    console.log("this is rendering")
  },[])

  // const reduxText = useSelector((state) => state)
  // console.log(reduxText)



  return (
          <>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
  )
}
export default MyApp