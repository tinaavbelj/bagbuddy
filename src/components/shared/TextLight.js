import styled from "styled-components"

import { colors } from "../../constants/variables"

const TextLight = styled.div`
  color: ${colors.baseLighten1};

  font-weight: ${({ bold }) => bold && "700"};
`
export default TextLight
