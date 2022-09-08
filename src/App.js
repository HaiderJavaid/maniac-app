import React, {Fragment} from 'react';
import { ChakraProvider, Box, theme, Input, Button, Heading, Flex, InputGroup, InputRightElement, Divider} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import LeftDrawer from './Components/LeftDrawer';

import PrivateRoute from "./PrivateRoute"
import { AuthProvider } from "./Contexts/AuthContext"
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom"


import { nanoid } from 'nanoid';  // a library to import random ID's
import Login from './loginComp/Login';
import Signup from './loginComp/Signup';
// import Login from './loginComp2/Login/index';



function App() {

  

  return (
          <ChakraProvider theme={theme}>
            <Flex bgColor={'#F7FAFC'} flexDirection={'column'} width='100%' alignItems={'center'}>
        <AuthProvider>
      <BrowserRouter>
          <Routes>
            
          <Route exact path="/login"
                element={
                  <PrivateRoute>
                    <LeftDrawer />
                  </PrivateRoute>
                }
              ></Route>
              
              {/* <Route exact path="/" element={<LeftDrawer/>} /> */}
    
             <Route exact path="/" element={<Login/>} />
             <Route exact path="/signup" element={<Signup/>} />


    </Routes>
    </BrowserRouter>
    </AuthProvider>
            </Flex>
          </ChakraProvider>

   
  );
}

export default App;
