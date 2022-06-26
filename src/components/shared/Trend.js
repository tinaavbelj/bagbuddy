import React from "react"
import styled from "styled-components"

import { colors } from "../../constants/variables"

import up from "../../images/up.svg"
import down from "../../images/down.svg"

const Trend = ({ value }) => {
  return (
    <Wrapper>
      <Icon src={value >= 0 ? up : down} />
      <Value value={value}>{`${value} €`}</Value>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.img``

const Value = styled.div`
  margin-left: 4px;
  color: ${({ value }) => (value >= 0 ? colors.primary : colors.error)};
`

export default Trend
