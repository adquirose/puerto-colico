import Styled from 'styled-components'

export const CardContacto = Styled.div`
    padding-top:${ props => props.paddingTop? props.paddingTop : '0'};
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    height: 190px;
    width:100%;
    @media(max-width:768px){
        padding-left:20px;
    }
`
export const ItemNombre = Styled.div`
    grid-template: [top] 1fr [bottom] / [izq] 35px [col1] 1fr [der];   
    grid-column: izq/der;
    grid-row: top/row1;
    margin: auto 0;
    padding-left:35px;  
`
export const ItemTelefono = Styled.div`
    display:grid;
    grid-template: [top] 1fr [bottom] / [izq] 35px [col1] 1fr [der];   
    grid-column: izq/der;
    grid-row: row1/row2;
    align-items:center;
   
`
export const ItemEmail = Styled.div`
    display:grid;   
    grid-template: [top] 1fr [bottom] / [izq] 35px [col1] 1fr [der];   
    grid-column: izq/der;
    grid-row: row2/row3; 
    align-items:center;
`
export const ItemWhatsapp = Styled.div`
    display:grid;   
    grid-template: [top] 1fr [bottom] / [izq] 35px [col1] 1fr [der];   
    grid-column: izq/der;
    grid-row: row3/bottom; 
    align-items:center;
`
export const Icon = Styled.div`
    grid-column: izq/col1;
    grid-row: top/bottom;
    width:35px;
    
`