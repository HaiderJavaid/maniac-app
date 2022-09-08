import React, { useRef, useState } from "react"
import {  Text, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Box, Button, Alert, Input } from '@chakra-ui/react'
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      return navigate("/login")
    } catch(e) {
      setError("Failed to create an account")
      console.log(e.message)
    }

    setLoading(false)
  }

  return (
    <>
      <Box px={10} py={20}  background={'#F7FAFC'} boxShadow={'5px 5px 5px #d2d5d6, -5px -5px 5px #ffffff'} marginY={20} borderRadius={10}>
        
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <FormControl>
           
              <FormLabel mt={4} color={'teal'}>Email</FormLabel>
              <Input background={'#F7FAFC'} boxShadow={'inset 5px 5px 4px #dee1e3, inset -5px -5px 4px #ffffff'} id="em" type="email" ref={emailRef} required />
         
              <FormLabel mt={4} color={'teal'}>Password</FormLabel>
              <Input background={'#F7FAFC'} boxShadow={'inset 5px 5px 4px #dee1e3, inset -5px -5px 4px #ffffff'} id='pw' type="password" ref={passwordRef} required />

              <FormLabel mt={4} color={'teal'}>Confirm Password</FormLabel>
              <Input background={'#F7FAFC'} boxShadow={'inset 5px 5px 4px #dee1e3, inset -5px -5px 4px #ffffff'} id='pwc' type="password" ref={passwordConfirmRef} required />
         
            <Button  onClick={handleSubmit} color={'white'} bg={'teal'} my={4} disabled={loading} type="submit">
              Sign Up
            </Button>
          </FormControl>
       
      <div className="w-100 text-center mt-2">
        <Text color='gray.500'>
          Already have an account? <Link to="/">Log In</Link></Text>
      </div>
      </Box>
    </>
  )
}