import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage } from "@ionic/react"
import { useHistory } from 'react-router-dom'
import { useIonViewDidEnter } from '@ionic/react'

const Logout = () => {
    const history = useHistory();

    useIonViewDidEnter(() => {
        history.push('/customer/login')
    })
    

    return(<IonPage>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Odhlásenie užívateľa</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Prebieha odhlasovanie užívateľa</p>
            </IonCardContent>
        </IonCard>
    </IonPage> 
    )
}

export default Logout