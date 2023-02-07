import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import CustomerOrders from '../customer/Orders/CustomerOrders'

const CleanerDashboard = () => {
    return(
    <IonPage>
        <IonHeader >
            <IonToolbar className="cleaner-user">
                <IonTitle>Objednávky</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="cleaner-user">
            <CustomerOrders />
        </IonContent>
    </IonPage> 
    )
}

export default CleanerDashboard