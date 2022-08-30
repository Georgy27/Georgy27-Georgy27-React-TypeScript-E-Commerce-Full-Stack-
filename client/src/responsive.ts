import { css } from "styled-components"
import { CSSProp } from 'styled-components';


export const mobile = (props: CSSProp) => {
  return css`
  @media only screen and (max-width: 425px){
    ${props}
  }
`
}

export const smallMobile = (props: CSSProp) => {
  return css`
  @media only screen and (max-width: 320px){
    ${props}
  }
`
}