import styled, { css } from "styled-components"

import { colors } from "constants/variables"

export const Button = styled.button`
    width: ${({ wide }) => wide && "100%"}};
    padding: 12px;
    border: none;
    border-radius: 100px;
    width: 100%;
    outline: none;
    cursor: pointer;
    ${({ full }) =>
      full
        ? css`
            background-color: ${({ color }) => colors[color] || colors.secondary};
            color: ${colors.white};
            &:hover {
              background-color: ${colors.base};
            }
          `
        : css`
            border: 1px solid ${({ color }) => colors[color] || colors.base};
            color: ${({ color }) => colors[color] || colors.base};
            background-color: inherit;
            &:hover {
              background-color: ${({ color }) => colors[color + "Lighten1"] || colors.base};
            }
          `};
`

export default Button
