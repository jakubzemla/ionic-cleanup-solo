import Axious from 'axios'
import { useState, useEffect } from 'react'
import Order from './Order'

const CleanerOrders = () => {
    const [orders, setOrders] = useState([])

    const fetchCustomerOrders = () => {
        Axious.get("http://cleanup.skus.im/cms/api/orders").then(response => setOrders(response.data.data))
    }

    useEffect(() => {
        fetchCustomerOrders()
    }, [])

    const ordersList = orders.map(order => {
        return (
            <Order key={order.id} {...order} className="blue"/>
        )
    })

    return (
        <>
        {ordersList}
        </>
    )
}

export default CleanerOrders