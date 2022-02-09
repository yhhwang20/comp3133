import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import FormContainer from '../components/FormContainer'
import { loginUser } from '../actions/userActions';
import { withRouter } from 'react-router-dom';
import Headerr from '../components/Headerr';


const LoginScreen = (props) => {
    const [Username, setUserName] = useState('')
    const [Password, setPassword] = useState('')
  
    const dispatch = useDispatch()

    /*const onUserNameHandler = (event) =>{
      setUserName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }*/

    const onSubmitHandler = (event) =>{
      event.preventDefault();

      let body = {
          username : Username,
          password : Password
      }

      dispatch(loginUser(body))
          .then(response => {
              if (response.payload.loginSuccess) {
                  props.history.push('/dashboard')
              } else {
                  alert('Error')
              }
          })
    }
    return (

      <FormContainer>
        <Headerr/>
        <h1>Sign In</h1>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group controlId='text'>
            <Form.Label>Usern Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter User Name'
              value={Username}
              onChange={(event) => setUserName(event.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='primary'>
            Sign In
          </Button>
        </Form>
      </FormContainer>
    )
  }
  
  export default withRouter(LoginScreen) 