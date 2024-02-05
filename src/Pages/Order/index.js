import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Snack from '../../assets/buguerPronto.png'
import Trash from '../../assets/trash.svg'
import { H1 } from "../../Components/Title/styles";
import { Button } from "../../Components/Button/styles";

import {
    Container,
    Image,
    ContainerPedidos,
    User,
    Order,
    ParagraphOrder, TrashPedido
} from "./styles"

function Orders() {

    const [orders, setOrders] = useState([])
    const navigate = useNavigate()




    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get("http://localhost:3006/orders")

            setOrders(newOrders)
        }

        fetchOrders()
    }, [])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3006/orders/${orderId}`)
        const newOrder = orders.filter(order => order.id !== orderId)
        setOrders(newOrder)
    }
    function goBackPage() {
        navigate('/')
    }

    return (

        <Container>

            <Image alt="logo-imagem" src={Snack} />
            <ContainerPedidos>
                <H1>Pedido</H1>
                <ul>
                    {
                        orders.map(order => (
                            <User key={order.id}>
                                <Order>
                                    <ParagraphOrder>
                                        <p>{order.orderclient} </p>
                                        <p>{order.clientName}</p>
                                    </ParagraphOrder>

                                    <TrashPedido onClick={() => deleteOrder(order.id)}><img src={Trash} alt="lata-de-lixo" /></TrashPedido>
                                </Order>
                            </User>

                        ))
                    }

                </ul>

                <Button isBack={true} onClick={goBackPage}> Voltar</Button>

            </ContainerPedidos>
        </Container>)
}

export default Orders
