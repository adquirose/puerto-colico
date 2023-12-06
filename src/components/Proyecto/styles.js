import Styled from 'styled-components'

export const Aviso = Styled.div`
    position: absolute;
    display:grid;
    width:90vw;
    height:100%;
    grid-template: [top] 90px [row1] 35px [row2] 1fr [bottom] / [izq] 1fr [der] ;
`
export const Span = Styled.div`
    display:flex;
    font-size: 1.75rem;
    text-align: center;
    grid-column: izq / der;
    grid-row: row1 / row2;
    background: rgba(0,0,10,0.5);
    align-items:center;
    justify-content:center;
    color: white;
`