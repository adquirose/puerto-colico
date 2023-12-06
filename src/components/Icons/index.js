import React from 'react'
import Styled from 'styled-components'
export const Container = Styled.div`
    display:flex;
    justify-content:center;
    text-align:right;
    align-items:center;
`
function Icon(props){
    return(
        <Container >
            <svg xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 48 48"  
                width={props.size} 
                height={props.size} 
                >
                    {props.children}
            </svg>
        </Container>
    )
}
export default Icon


