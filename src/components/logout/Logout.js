import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react"
import { useHistory } from 'react-router-dom'
import { useIonViewDidEnter } from '@ionic/react'

const Logout = () => {
    const history = useHistory();

    useIonViewDidEnter(() => {
        history.push('/customer/login')
    })
    

    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Odhlásenie užívateľa</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Prebieha odhlasovanie užívateľa</p>
            </IonCardContent>
        </IonCard> 
    )
}

export default Logout