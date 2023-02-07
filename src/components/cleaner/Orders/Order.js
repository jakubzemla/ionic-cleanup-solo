import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/react'

const Order = (props) => {
    return(
        <IonCard className="cleaner-user-card">
            <IonCardHeader>
                <IonCardTitle className="order-title">Objednávka {props.id}</IonCardTitle>
                <IonCardSubtitle>Stav: {props.status}</IonCardSubtitle>
                {props.status === "planned" && <IonButton color="success">Štart upratovania</IonButton>}
                {props.status === "planned" && <IonButton color="dark" size="small">Zrušiť</IonButton>}
                {props.status === "ended" && <IonButton color="warning">Nastaviť plánovaná</IonButton>}
            </IonCardHeader>
            <IonCardContent>
                <p>Dátum: {props.date}</p>
                <p>Odhadovaný začiatok: {props.estimated_start}</p>
                <p>Odhadovaný koniec: {props.estimated_end}</p>
                <p>Odhadované trvanie (h): {props.estimated_duration_h}</p>
                <br />
                <p>Reálny štart: {props.real_start}</p>
                <p>Reálny koniec: {props.real_end}</p>
                <p>Reálny trvanie (h): {props.real_duration_h * 60}m 0s ({props.real_duration_h}h)</p>
                <br />
                <p>Manuálna cena: {props.manual_price}</p>
                <br />
                <p>Posledná zmena: {props.updated_at}</p>
            </IonCardContent>
        </IonCard>
    )
}

export default Order