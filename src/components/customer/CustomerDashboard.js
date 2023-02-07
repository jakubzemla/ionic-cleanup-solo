import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import CustomerData from './CustomerInfo/CustomerData'
import CustomerOrders from './Orders/CustomerOrders'

const CustomerDashboard = () => { 
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Objednávky</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <CustomerData />
            <CustomerOrders />
        </IonContent>
    </IonPage> 
    )
}

export default CustomerDashboard