import React, { useState } from "react"
import styled from "styled-components"

import { useFirebase } from "contexts/FirebaseContext"
import { useHistory } from "react-router-dom"

import { radius, colors, contentWidth } from "../constants/variables"

import Button from "./shared/Button"
import TextLight from "./shared/TextLight"
import Input from "./shared/Input"

import loader from "../images/loader.svg"
import loginImage from "../images/login.svg"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useFirebase()
  const history = useHistory()

  const handleLogin = async () => {
    setLoading(true)
    try {
      await login(email, password)
      history.push("/")
    } catch (error) {
      setError("An error occured")
    }
    setLoading(false)
  }

  return (
    <div>
      <Box>
        <Value>Log in</Value>
        {error ? (
          <Error>{error}</Error>
        ) : (
          <>
            <InputWrapper>
              <StyledTextLight>Email</StyledTextLight>
              <Input
                placeholder="email"
                value={email}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              ></Input>
              <StyledTextLight>Password</StyledTextLight>
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Input>
            </InputWrapper>
            <Button full wide color="primary" onClick={handleLogin}>
              {loading ? <img alt="loader" src={loader} /> : "Log in"}
            </Button>
          </>
        )}
      </Box>
      <Image src={loginImage} />
    </div>
  )
}

const Box = styled.div`
  background-color: ${colors.white};
  border-radius: ${radius};
  padding: 16px;
`

const Value = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 8px 0;
  text-align: center;
`

const StyledTextLight = styled(TextLight)`
  margin-bottom: 8px;

  &:not(first-child) {
    margin-top: 16px;
  }
`

const InputWrapper = styled.div`
  margin: 40px 0 24px 0;
`

const Image = styled.img`
  width: 100vw;
  margin-bottom: -46px;
  margin-left: -16px;
  max-width: ${contentWidth};
`

const Error = styled.div`
  margin-top: 40px;
  text-align: center;
`

export default Login
