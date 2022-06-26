import React from "react"
import styled from "styled-components"

import loader from "../../images/loader-large.svg"

const Loader = () => {
  return (
    <Wrapper>
      <img src={loader} alt={"Loading"} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loader
