import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import CleanerOrders from './Orders/CleanerOrders'

const CleanerDashboard = () => {
    return(
    <IonPage>
        <IonHeader >
            <IonToolbar className="cleaner-user">
                <IonTitle>Objednávky</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="cleaner-user">
            <CleanerOrders />
        </IonContent>
    </IonPage> 
    )
}

export default CleanerDashboard