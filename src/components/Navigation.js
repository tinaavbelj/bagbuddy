import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import home from "../images/home.svg"
import mylist from "../images/bookmark.svg"
import community from "../images/people.svg"
import local from "../images/location.svg"
import explore from "../images/bag.svg"

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/" smooth="true">
        <Item>
          <img src={home} alt="" />
          <div>Home</div>
        </Item>
      </StyledLink>
      <StyledLink to="/buy" smooth="true">
        <Item>
          <img src={mylist} alt="" />
          <div>My list</div>
        </Item>
      </StyledLink>
      <StyledLink to="/community" smooth="true">
        <Item>
          <img src={community} alt="" />
          <div>Community</div>
        </Item>
      </StyledLink>
      <StyledLink to="/local" smooth="true">
        <Item>
          <img src={local} alt="" />
          <div>Local</div>
        </Item>
      </StyledLink>
      <StyledLink to="/" smooth="true">
        <Item>
          <img src={explore} alt="" />
          <div>Explore</div>
        </Item>
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  font-weight: 700;
  cursor: pointer;
`

const Item = styled.div`
  text-align: center;
`

export default Navigation
