import { css } from "styled-components"
import { CSSProp } from 'styled-components';


export const mobile = (props: CSSProp) => {
  return css`
  @media only screen and (max-width: 420px){
    ${props}
  }
`
}