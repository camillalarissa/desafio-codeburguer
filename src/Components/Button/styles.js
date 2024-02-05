import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 68px;
padding:22px;
background-color:#5A3563 ;
color: #fff;
margin-top: ${props => props.isBack ? '200px' : '76px'} ;
border: none;
outline: none;
color: #FFF;
font-size: 17px;
cursor: pointer;
transition: 0.9s ease;


&:hover{
    background-color: #D93856;
    color: #ffff ;
}
&:active{
    
   opacity :0.5 ;
}
`