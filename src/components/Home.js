import React from "react"
import styled from "styled-components"

import { radius, colors } from "../constants/variables"

import TextLight from "./shared/TextLight"

import image from "../images/avatar.svg"

const Home = () => {
  return (
    <div>
      <Avatar src={image} />
      <Value>Welcome back, Anna</Value>
      <Box>
        <TextLight>Your sustainability score</TextLight>
        <Score>234 / 300</Score>
      </Box>
    </div>
  )
}

const Avatar = styled.img`
  margin-bottom: 8px;
`

const Box = styled.div`
  background-color: ${colors.white};
  border-radius: ${radius};
  padding: 16px;
  box-shadow: 2px 10px 60px rgb(28, 36, 68, 0.15);
`

const Value = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
`

const Score = styled.div`
  font-size: 24px;
  font-weight: 800;
`

export default Home
