import { IonContent, IonButton } from "@ionic/react"
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

const CleanerLogin = () => {
    const history = useHistory()

    const handleHistory = () => {
        history.push("/cleaner/dashboard")
    }
    
    return(<>
        <IonContent className="cleaner-user">
            <div className="login-wrapper">
                <h3 className="template-title">Prihlásenie upratovača</h3>
                <IonButton onClick={handleHistory}>Prihlásiť cez Google</IonButton>
                <Link className="switch-user-position" to="/customer/login">Zákazník</Link>
            </div>
            
        </IonContent>
    </>
    )
}

export default CleanerLogin