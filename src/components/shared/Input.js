import styled from "styled-components"

import { colors, radiusSmall } from "constants/variables"

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: ${colors.primaryLighten2};
  border-radius: ${radiusSmall};
  outline: none;
  border: none;
  &:focus {
    border: 1px solid ${colors.primary};
  }
  ::placeholder {
    color: ${colors.baseLighten2};
  }
`

export default Input
