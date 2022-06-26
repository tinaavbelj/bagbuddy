import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Trend from "./Trend"
import Icon from "./Icon"

import { colorsRandom } from "constants/variables"

const Item = ({ item }) => {
  const colorIndex = item.name.length % 6

  return (
    <Wrapper>
      <StyledLink to={`etf/${item.id}`}>
        <Container>
          <Main>
            <Icon color={colorsRandom[colorIndex]}>{item.abbreviation.charAt(0)}</Icon>
            <Name>{item.abbreviation}</Name>
          </Main>
          <Trend value={item.dailyChange}></Trend>
          <Value>{item.currentValue} €</Value>
        </Container>
      </StyledLink>
    </Wrapper>
  )
}

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`

const Wrapper = styled.div`
  &:not(:first-child) {
    margin-top: 16px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Main = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  margin-left: 8px;
`

const Value = styled.div``

export default Item
