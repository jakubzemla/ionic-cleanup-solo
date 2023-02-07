import './CustomerData.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

const CustomerData = () => {
    const [customer, setCustomer] = useState([])

    const fetchCustomerData = () => {
        Axios.get("http://cleanup.skus.im/cms/api/profile")
            .then(response => { setCustomer(response.data.data[0])})
    }

    useEffect(() => {
        fetchCustomerData()
    }, [])

    return(
        <div className="customer-panel">
            <p>Názov zákazníka: {customer.name}</p>
            <p>Hodinovka: {customer.hourly_rate}€</p>
            <p>Aktuálny kredit: {customer.current_credit}€</p>
            <p>Mesačný budget: {customer.monthly_budget}</p>
        </div>
    )
}


export default CustomerData