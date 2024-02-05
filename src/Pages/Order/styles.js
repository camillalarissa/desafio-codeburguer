
import styled from 'styled-components'

export const Container = styled.div`

display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;



`

export const Image = styled.img`
margin-top: 30px;


`
export const ContainerPedidos = styled.div`

display: flex;
flex-direction: column;




`

export const User = styled.li`
list-style: none;
`
export const Order = styled.div`

display: flex;
justify-content: space-around;
align-items:center ;
gap: 30px;
width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.25);
color: white;
border: none;
outline: none;
font-size: 18px;
border-radius: 14px;
margin-top: 20px;
`
export const ParagraphOrder = styled.div`
  p {
    background: rgba(255, 255, 255, 0.25);
    align-content: space-between;
    width: 188px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }
`
export const TrashPedido = styled.button`
 background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  img {
    background: transparent;
  }


`
