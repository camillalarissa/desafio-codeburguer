import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Buguer from '../../assets/burger 1.svg'
import { H1 } from "../../Components/Title/styles";
import { Button } from "../../Components/Button/styles"

import {
    Container,
    Image,
    InputLabel,
    Input,
    ContainerPedidos,

} from "./styles"

function App() {

    const [orders, setOrders] = useState([])
    const inputOrder = useRef()
    const inputName = useRef()

    const navigate = useNavigate()

    async function addNewOrder() {
        const { data: newOrders } = await axios.post("http://localhost:3006/orders", {
            orderclient: inputOrder.current.value,
            clientName: inputName.current.value
        })


        setOrders([...orders, newOrders])

        navigate('/pedidos')
    }


    return (

        <Container>

            <Image alt="logo-imagem" src={Buguer} />
            <ContainerPedidos>
                <H1>Faça seu pedido!</H1>
                <InputLabel>Pedido</InputLabel>
                <Input ref={inputOrder} placeholder="1-X-salada,1-Suco Lata"></Input>

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputName} placeholder="Camilla"></Input>

                <Button onClick={addNewOrder}>Novo Pedido</Button>

            </ContainerPedidos>
        </Container>)
}

export default App
