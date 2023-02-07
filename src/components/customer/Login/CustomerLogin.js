import './CustomerLogin.css'
import { IonContent, IonButton, IonPage } from "@ionic/react"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

const CustomerLogin = () => {
    const history = useHistory()

    const handleHistory = () => {
        history.push("/customer/dashboard")
    }
    return(<IonPage>
        <IonContent >
            <div className="login-wrapper">
                <h2 className="company-title">GOLDLUX</h2>
                <h3 className="template-title">Prihlásenie zákazníka</h3>
                <IonButton onClick={handleHistory}>Prihlásiť cez Google</IonButton>
                <Link className="switch-user-position" to="/cleaner/login">Upratovač</Link>
            </div>
        </IonContent>
    </IonPage>
    )
}

export default CustomerLogin