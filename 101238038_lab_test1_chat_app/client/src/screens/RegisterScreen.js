import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { registerUser } from '../actions/userActions'
import { withRouter } from 'react-router-dom';
import Headerr from '../components/Headerr';

const RegisterScreen = (props) => {
  const [Username, setUserName] = useState('')
  const [Firstname, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const onSubmitHandler = (event) =>{
    event.preventDefault();

    if(Password !== ConfirmPassword){
        return alert('Password not matched')
    }

    let body = {
        username : Username,
        password : Password,
        firstname : Firstname,
        lastname : LastName
    }

    dispatch(registerUser(body))
        .then(response => {
            if (response.payload.success) {
                props.history.push('/login')
            } else {
                alert('Error')
            }
        })
    }

  return (
    
    <FormContainer>
      <Headerr/>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId='text'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter User name'
            value={Username}
            onChange={(event) => setUserName(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='text'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter First Name'
            value={Firstname}
            onChange={(event) => setFirstName(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='text'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Last Name'
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={ConfirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
    </FormContainer>
  )
}

export default withRouter(RegisterScreen)