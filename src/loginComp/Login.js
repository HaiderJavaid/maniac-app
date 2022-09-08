import React, { useRef, useState } from "react"
import {  FormControl,
            FormLabel,
            FormErrorMessage,
            FormHelperText, Box, Button, Alert, Input, Text, } from '@chakra-ui/react'
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
     return navigate("/login")
    } catch(e) {
      setError("Fail to log in.")
      console.log(e.message)
    }

    setLoading(false)
  }

  return (
    <>
      <Box px={10} py={20} background={'#F7FAFC'} boxShadow={'5px 5px 5px #d2d5d6, -5px -5px 5px #ffffff'} marginY={20} borderRadius={10}>
        
          <h2>Log In</h2>
          {error && <Alert>{error}</Alert>}
          <FormControl>
           
              <FormLabel mt={4} color={'teal'}>Email</FormLabel>
              <Input background={'#F7FAFC'} boxShadow={'inset 5px 5px 4px #dee1e3, inset -5px -5px 4px #ffffff'} id="1" type="email" ref={emailRef} required />
         
              <FormLabel mt={4} color={'teal'}>Password</FormLabel>
              <Input background={'#F7FAFC'} boxShadow={'inset 5px 5px 4px #dee1e3, inset -5px -5px 4px #ffffff'} id='2' type="password" ref={passwordRef} required />
         
            <Button onClick={handleSubmit} color={'white'} bg={'teal'} my={4} disabled={loading} type="submit">
              Log In
            </Button>
          </FormControl>
          <div className="w-100 text-center mt-3">
            <Text color='teal'><Link to="/forgot-password">Forgot Password?</Link></Text>
          </div>
        
      <div className="w-100 text-center mt-2">
        <Text color='gray.500'>Need an account? <Link to="/signup" color="teal">Sign Up</Link></Text>
      </div>
      </Box>

    </>
  )
}