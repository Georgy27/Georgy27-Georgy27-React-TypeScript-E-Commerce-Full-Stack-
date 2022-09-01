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

export const Pc = (props: CSSProp) => {
  return css`
    @media only screen and (min-width: 992px){
    ${props}
  }
  `
}
export const Tablet = (props: CSSProp) => {
  return css`
    @media only screen and (max-width: 810px){
    ${props}
  }
  `
}